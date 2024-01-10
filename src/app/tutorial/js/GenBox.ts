import { createElement } from 'react'

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
export function GenBox({
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
