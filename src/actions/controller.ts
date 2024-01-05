type UserCreated = { id: string; name: string }

/** For 400 */
type BadRequest = { code: 'bad_request'; message: string }

/** Response type intersection */
type UserResponse =
    | (Omit<Response, 'json'> & {
          status: 201
          json: () => UserCreated | PromiseLike<UserCreated>
      })
    | (Omit<Response, 'json'> & {
          status: 400
          json: () => BadRequest | PromiseLike<BadRequest>
      })

interface ActionsAbstract {
    get<T>(url: string): Promise<T>
    post<T, S extends object>(
        url: string,
        state?: S,
        header?: HeadersInit
    ): Promise<T>
}

export class ActionController implements ActionsAbstract {
    async get<T>(url: string): Promise<T> {
        const data = await fetch(url).then((res) => this.responseHandler(res))
        return data as T
    }
    async post<T, S extends object>(
        url: string,
        state?: S,
        header?: HeadersInit
    ): Promise<T> {
        let requestHeaders: HeadersInit = new Headers()
        requestHeaders.set('Content-Type', 'application/json')
        if (header) {
            requestHeaders = header
        }
        const query: RequestInit = {
            method: 'POST',
            headers: requestHeaders,
        }
        if (state) query.body = JSON.stringify(state)

        const data = await fetch(url, query).then((res) =>
            this.responseHandler(res)
        )

        return data as T
    }

    private responseHandler = (response: Response) => {
        const res = response as UserResponse
        return this.marshalResponse(res)
    }

    private marshalResponse = (res: UserResponse) => {
        const status = [200, 201, 400, 404]
        if (status.includes(res.status)) return res.json()
        return Error('Unhandled response code')
    }
}

// type User = {
//     userId: 1
//     id: 1
//     title: 'Adam aut ManU'
//     completed: false
//     price: number
// }
// const url = 'https://jsonplaceholder.typicode.com/todos/1'
// const fb = new ActionController()

// async function getInit() {
//     const payload = await fb.get<User>(url)

//     dcFindPayload(payload, ['title', 'completed'], 'function getInit')

//     console.log('payload :>> ', payload)
// }
