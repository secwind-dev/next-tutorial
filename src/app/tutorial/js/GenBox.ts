import { createElement } from 'react'
type Props = {
    data: {
        value?: any
        comma?: string
        key?: string
        prefix?: string
        suffix?: string
        name?: string
    }
    className?: string
}

function createTags(data: Record<string, any>) {
    return Object.entries(data).map(([key, value], i) => {
        const comma = Object.keys(data).length - 1 === i ? '' : ','
        const props = { className: 'pl-8' }
        const children = [GenBox({ data: { value, key, comma } })]
        return createElement('div', props, ...children)
    })
}
export default function GenBox({ data, className = '' }: Props): any {
    const {
        value,
        key = '',
        comma = '',
        prefix = '',
        suffix = '',
        name = '',
    } = data
    if (value instanceof Date) {
        const d = value as Date
        const date = `'${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}'`
        return createElement('span', null, `${key}: new Date(${date})${comma}`)
    } else if (typeof value === 'object' && value !== null) {
        // ถ้า value = array | object
        const sTag = Array.isArray(value) ? '[' : '{'
        const lTag = Array.isArray(value) ? ']' : '}'
        const title = name ? name : key ? `${key}:` : ''
        console.log('key :>> ', key)
        const startTag = `${title} ${sTag}`
        const endTag = lTag + comma
        const props = {
            className: `flex flex-col gap-1 ${className}`,
        }
        const children = [
            createElement('span', null, prefix + startTag),
            ...createTags(value),
            createElement('span', null, endTag + suffix),
        ]
        return createElement('div', props, ...children)
    } else if (!Number.isInteger(+key)) {
        // ถ้า key เป็นตัวเลข
        const _val = typeof value == 'string' ? `"${value}"` : value
        return createElement('span', null, `${key}: ${_val + comma}`)
    }
    const valOfString = typeof value == 'string' ? `"${value}"` : value

    return createElement('span', null, valOfString + comma)
}
