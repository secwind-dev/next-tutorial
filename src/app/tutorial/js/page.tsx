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

    function GenBox({ data, nameKey, className, suffixKey }: any): any {
        const render = (payload: any) => {
            return Object.entries(payload as Record<string, any>).map(
                ([key, value], i) => {
                    const _comma =
                        Object.keys(payload).length - 1 === i ? '' : ','

                    const checkString = ['string', 'number'].includes(
                        typeof value
                    )
                    const checkObj =
                        typeof value === 'object' &&
                        !Array.isArray(value) &&
                        value !== null

                    return createElement(
                        'div',
                        { className: 'pl-8' },
                        checkString && generateStringNUmber(key, value, _comma),
                        checkObj && generateObject(key, value, _comma)
                        // Array.isArray(value) &&
                        //     generateArray(key, value, _comma)
                    )
                }
            )
        }
        const generateStringNUmber = (
            key: string,
            value: any,
            comma: string
        ) => {
            const _val = typeof value == 'string' ? `"${value}"` : value
            return createElement('span', null, `${key}: ${_val}${comma}`)
        }
        const generateObject = (key: string, value: any, comma: string) => {
            return createElement(
                'span',
                null,

                GenBox({ data: value || '', nameKey: key, suffixKey: comma })
            )
        }
        // const generateArray = (key: string, value: any, comma: string) => {
        //     return createElement(
        //         'div',
        //         {
        //             className: `flex flex-col gap-1 ${
        //                 className ? className : ''
        //             }`,
        //         },
        //         createElement('span', null, nameKey ? `${nameKey}: [` : `[`),
        //         GenBox({ data: value || '', nameKey: key, suffixKey: comma }),
        //         createElement(
        //             'span',
        //             null,
        //             `]${suffixKey ? (suffixKey as string) : ''}`
        //         )
        //     )
        // }
        return createElement(
            'div',
            { className: `flex flex-col gap-1 ${className ? className : ''}` },
            createElement('span', null, nameKey ? `${nameKey}: {` : `{`),
            ...render(data),
            createElement(
                'span',
                null,
                `}${suffixKey ? (suffixKey as string) : ''}`
            )
        )
    }

    const res = {
        username: 'username',
        name: 'Max',
        age: 15,
        email: 'test@test.com',
        like: {
            colors: ['red', 'blue', 'green'],
            price: 35000,
            animal: 'CAT',
            profile: {
                job: 'DEV',
                salary: 20000,
                name: {
                    a: 'A',
                    b: 100,
                },
            },
        },
        cars: ['TOYOTA', 'HONDA', 'SUZUKI'],
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
                <section className=" bg-slate-400 p-5 flex justify-center items-center w-[400px]">
                    <GenBox data={res} className=" bg-red-500 w-full" />
                </section>
            </div>
        </section>
    )
}

export default Page
