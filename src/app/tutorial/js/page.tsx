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

    function generateStringNUmber(key: string, value: any, comma: string) {
        const _val = typeof value == 'string' ? `"${value}"` : value
        return createElement('span', null, `${key}: ${_val}${comma}`)
    }
    function generateObject(key: string, value: any, comma: string) {
        return GenBox({ data: value, keyName: key, comma })
    }
    function generateArray(key: string, value: any, comma: string) {
        return createElement(
            'div',
            { className: `flex flex-col gap-1 ` },
            createElement('span', null, key ? `${key}: [` : `[`),
            GenBox({ data: value, keyName: key, comma }),
            createElement('span', null, `]${comma ? (comma as string) : ''}`)
        )
    }

    function generate(data: any) {
        console.log('TYPE :>> ', typeof data)
        if (Array.isArray(data)) {
            console.log('xxxx :>> ')
            return data.map((v, i) => {
                console.log('isArray :>> ', v)
                const _comma = data.length - 1 === i ? '' : ','

                return GenBox({ data: v, suffixKey: _comma })
            })
        } else {
            return Object.entries(data as Record<string, any>).map(
                ([key, value], i) => {
                    const _comma = Object.keys(data).length - 1 === i ? '' : ','

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
    }

    function GenBox({ data, className, comma, keyName }: any): any {
        function render() {
            if (Array.isArray(data)) {
                return createElement(
                    'div',
                    {
                        className: `flex flex-col gap-1 ${
                            className ? className : ''
                        }`,
                    },
                    createElement(
                        'span',
                        null,
                        keyName ? `${keyName}: [` : `[`
                    ),
                    ...generate(data),
                    createElement(
                        'span',
                        null,
                        `]${comma ? (comma as string) : ''}`
                    )
                )
            } else if (typeof data === 'object' && data !== null) {
                return createElement(
                    'div',
                    {
                        className: `flex flex-col gap-1 ${
                            className ? className : ''
                        }`,
                    },
                    createElement(
                        'span',
                        null,
                        keyName ? `${keyName}: {` : `{`
                    ),
                    ...generate(data),
                    createElement(
                        'span',
                        null,
                        `}${comma ? (comma as string) : ''}`
                    )
                )
            } else
                return createElement(
                    'span',
                    null,
                    `${keyName}: ${data}${comma}`
                )
        }

        return render()
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
