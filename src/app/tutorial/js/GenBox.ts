import { createElement } from 'react'

function createTags(data: any) {
    return Object.entries(data as Record<string, any>).map(
        ([key, value], i) => {
            const comma = Object.keys(data).length - 1 === i ? '' : ','
            return createElement(
                'div',
                { className: 'pl-8' },
                GenBox({ data: value, keyName: key, comma })
            )
        }
    )
}
export default function GenBox({
    data,
    className = '',
    comma = '',
    keyName = '',
}: any): any {
    if (data instanceof Date) {
        const d = data as Date
        const date = `'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}'`
        return createElement(
            'span',
            null,
            `${keyName}: new Date(${date})${comma}`
        )
    } else if (typeof data === 'object' && data !== null) {
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
    } else if (!Number.isInteger(+keyName)) {
        const _val = typeof data == 'string' ? `"${data}"` : data
        return createElement('span', null, `${keyName}: ${_val + comma}`)
    }
    const valOfString = typeof data == 'string' ? `"${data}"` : data

    return createElement('span', null, valOfString + comma)
}
