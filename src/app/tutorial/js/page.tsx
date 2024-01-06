'use client'
import * as dc from 'adc-directive'
import { ActionController } from '@/actions/controller'
import { useState, useEffect } from 'react'
import { swCalendar, swCalendarBetween } from '@/oop/index'

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
            nextDate: (res) => {
                console.log('event ตอนกดเปลี่ยนวันที่ :>> ', res)
            },
        })
    )
    const [calendarBetween] = useState(
        new swCalendarBetween('#calendarBetween', {
            lang: 'th',
            values: between,
            style: {},
            nextDate: (res) => {
                console.log('event ตอนกดเปลี่ยนวันที่ :>> ', res)
            },
        })
    )

    useEffect(() => {
        calendar.render()
        calendarBetween.render()
    }, [])
    return (
        <section className=" flex justify-center items-center w-full h-[100dvh] bg-slate-500">
            <div className=" bg-white mx-auto flex  justify-between p-4 gap-4 w-[600px] border border-slate-800">
                <div id="calendar" className=" shadow"></div>
                <div id="calendarBetween"></div>
            </div>
        </section>
    )
}

export default Page
