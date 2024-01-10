'use client'
import * as dc from 'adc-directive'
import { ActionController } from '@/actions/controller'
import { createElement } from 'react'

function Page() {
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

    function createTags(data: any) {
        return Object.entries(data as Record<string, any>).map(
            ([key, value], i) => {
                console.log('key :>> ', typeof key)
                console.log('value :>> ', value)
                const comma = Object.keys(data).length - 1 === i ? '' : ','
                return createElement(
                    'div',
                    { className: 'pl-8' },
                    GenBox({ data: value, keyName: key, comma })
                )
            }
        )
    }

    function GenBox({
        data,
        className = '',
        comma = '',
        keyName = '',
    }: any): any {
        if (typeof data === 'object' && data !== null) {
            const startTag = Array.isArray(data)
                ? keyName
                    ? `${keyName}: [`
                    : `[`
                : keyName
                ? `${keyName}: {`
                : `{`
            const endTag = Array.isArray(data) ? ']' : `}${comma}`
            return createElement(
                'div',
                {
                    className: `flex flex-col gap-1 ${className}`,
                },
                createElement('span', null, startTag),
                ...createTags(data),
                createElement('span', null, endTag)
            )
        }
        const valOfString = typeof data == 'string' ? `"${data}"` : data
        if (typeof keyName == 'string')
            return createElement('span', null, `${keyName}: ${data}${comma}`)
        return createElement('span', null, valOfString)
    }

    return (
        <section className=" flex justify-center items-center w-full h-[100dvh] bg-slate-500">
            <section className=" bg-slate-400 p-5 flex justify-center items-center w-[400px]">
                <GenBox
                    data={res}
                    className=" bg-red-500 w-full"
                    keyName="max"
                />
            </section>
        </section>
    )
}

export default Page
