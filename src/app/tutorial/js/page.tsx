'use client'
import * as dc from 'adc-directive'
import { ActionController } from '@/actions/controller'
import { useState, useEffect } from 'react'


type User = {
    userId: 1
    id: number
    title: 'Adam aut ManU'
    completed: false
    price: number,
    like: {
        animal: string,
        color: string,
        role: 'ADMIN' | 'USER'
    }
}




const url = 'https://jsonplaceholder.typicode.com/todos/1'
const op = new ActionController()

const items = [
    {
        id: 1,
        name: 'Lisa',
        age: 25,
        salary: 17500,
        location: 'TH'
    },
    {
        id: 2,
        name: 'Jam',
        age: 15,
        salary: 9000,
        location: 'USA'
    },
    {
        id: 3,
        name: 'Bar',
        age: 30,
        salary: 25000,
        location: 'EN'
    },
    {
        id: 4,
        name: 'Foo',
        age: 16,
        salary: 25000,
        location: 'CN'
    },
    {
        id: 5,
        name: 'Lisa',
        age: 27,
        salary: 35000,
        location: 'JP'
    },
]


function Page() {
    // function component
    // js,css, //   next??? vue 
    const [state, setState] = useState<User>({} as any)
    // dcFindPayload(payload, ['title', 'completed'], 'function getInit')
    async function getInit() {
        const payload = await op.get<User>(url)


        // const validate = dc.validateObject(payload, ['id'])

        // if (validate.status !== 1) {
        //     throw Error(validate.message)
        // }
        setState((v) => ({ ...v, ...payload }))

        console.log('payload :>> ', payload);

    }

    let n = 100


    function addNumberToFive(num: number) {
        return 5
    }


    useEffect(() => {












    }, [])
    return (
        <>


        </>
    )
}

export default Page;