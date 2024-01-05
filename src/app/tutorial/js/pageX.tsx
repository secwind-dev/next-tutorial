'use client'
import * as dc from 'adc-directive'
import { ActionController } from '@/actions/controller'
import { useState, useEffect } from 'react'


type User = {
    userId: 1
    id: 1
    title: 'Adam aut ManU'
    completed: false
    price: number,
    like: {
        animal: string,
        color: string
    }
}
const url = 'https://jsonplaceholder.typicode.com/todos/1'
const https = new ActionController()

const items = [
    {
        id: 1,
        name: 'Max',
        age: 25,
        salary: 17500,
    },
    {
        id: 2,
        name: 'Jam',
        age: 15,
        salary: 9000,
    },
    {
        id: 3,
        name: 'Bar',
        age: 30,
        salary: 25000,
    },
    {
        id: 99,
        name: 'Lisa',
        age: 27,
        salary: 35000,
    },
]


function Page() {
    // async function getInit() {
    //     const payload = await https.get<User>(url)

    //     const validate = dc.validateObject(payload, ['id', 'like.animal'])

    //     if (validate.status !== 1) {
    //         throw Error(validate.message)
    //     }
    //     setState((v) => ({ ...v, ...payload }))

    // }

    const x = items.map(v => v.name)
    //    ^?




    const [state, setState] = useState<User>({} as any)
    // dcFindPayload(payload, ['title', 'completed'], 'function getInit')

    useEffect(() => {
        const number = [1, 2, 3, 4, 5]

    }, [])
    return (
        <>
            <h1 className="name">{state.title}</h1>
            <h3>{state.userId}</h3>

        </>
    )
}

export default Page;