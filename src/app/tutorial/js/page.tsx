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


    useEffect(() => {
        // TS
        // let & const
        // function & arrow function
        // loop
        // operator
        // functional & function component & oop
        const loops = [
            'for', 'forEach', 'map', 'while', 'function'
        ]
        const number = [1, 2, 3, 4, 5]



    }, [])
    return (
        <>


        </>
    )
}

export default Page;