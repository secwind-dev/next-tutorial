'use client'
import * as dc from 'adc-directive'
import { ActionController } from '@/actions/controller'
import { useState, useEffect } from 'react'
import { swCalendar, swCalendarBetween } from '@/oop/index'
import { createElement } from 'react'

type User = {
    userId: 1
    id: number
    title: 'Adam aut ManU'
    completed: false
    price: number
    like: {
        animal: string
        color: string
        role: 'ADMIN' | 'USER'
    }
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'
const https = new ActionController()

function Page() {
    const [state, setState] = useState(new Date())
    const [between, setBetween] = useState([new Date(), new Date('2024-01-22')])
    const [calendar] = useState(
        new swCalendar('#calendar', {
            value: state,
            style: {
                background: 'red',
            },
            nextDate: (res) => {
                console.log('event ตอนกดเปลี่ยนวันที่ :>> ', res)
            },
        })
    )
    const [calendarBetween] = useState(
        new swCalendarBetween('#calendarBetween', {
            lang: 'th',
            values: between,
            style: {
                background: 'pink',
            },
            nextDate: (res) => {
                console.log('event ตอนกดเปลี่ยนวันที่ :>> ', res)
            },
        })
    )

    function GenBox({ data }: any): any {
        const gen = (payload: any) => {
            return Object.entries(payload as Record<string, any>).map(
                ([key, value], i) => {
                    // if (typeof value !== 'object') {
                    const _val = typeof value == 'string' ? `"${value}"` : value
                    const checkString = ['string', 'number'].includes(
                        typeof value
                    )
                    const checkObj = typeof value === 'object'
                    return createElement(
                        'div',
                        { className: 'pl-4' },
                        checkString &&
                            createElement('span', null, `${key}:${_val},`),
                        checkObj &&
                            createElement(
                                'span',
                                null,
                                `${key}:`,
                                GenBox({ data: value })
                            )
                    )
                    // return createElement(
                    //     'div',
                    //     { className: 'pl-4' },
                    //     createElement('span', null, `${key}:`),
                    //     checkString && createElement('span', null, `${key}:${_val},`),
                    //     checkObj && GenBox({ data: value })
                    // )
                }
            )
        }
        return createElement(
            'div',
            { className: 'flex flex-col gap-1' },
            createElement('span', null, `{`),
            ...gen(data),
            createElement('span', null, `}`)
        )
    }

    const res = {
        username: 'username',
        name: 'Max',
        age: 15,
        email: 'test@test.com',
        like: {
            // colors: ['red', 'blue', 'green'],
            price: 35000,
            animal: 'CAT',
        },
    }

    useEffect(() => {
        // calendar.render()
        // calendarBetween.render()
    }, [])
    return (
        <section className=" flex justify-center items-center w-full h-[100dvh] bg-slate-500">
            <div className=" bg-white mx-auto flex  justify-between p-4 gap-4 w-[600px] border border-slate-800">
                <div id="calendar" className=" shadow"></div>
                <div id="calendarBetween"></div>
                <GenBox data={res} />
            </div>
        </section>
    )
}

export default Page
