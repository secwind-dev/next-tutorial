import Calendar from './calendar'
import CalendarBetween from './calendarBetween'

export interface CalenderState {
    lang?: 'thai' | 'en' | 'th' | 'english'
    nextDate?: (arg: any) => void // function
    nextMonth?: (arg: any) => void // function
    year?: 'en' | 'th'
    value: Date // '2022-10-30'
    min?: Date // '2022-10-30'
    max?: Date // '2022-10-30'
    style?: Style
}
type Style = {
    ['font-family']?: string
    text?: string
    ['text-week']?: string
    current?: string
    picker?: string
    disabled?: string
    background?: string
    border?: string
    borderRadius?: string
    shadow?: string
    width?: string
}
let EnumStyle: Style = {
    ['font-family']: `'Arial', sans-serif`,
    picker: '#0ea5e9', // สีวันที่กดเลือก --picker
    disabled: '#c3c2c8', // สีวันที่ถูก disabled  --disabled
    background: '#f3f8fe', //--background
    text: '#151426', //สีตัวอักษร
    ['text-week']: '#1e293b', //สีตัวอักษร
    current: '#ffdfd2', // สีวันที่ปัจจุบัน --calendar_date_current
    border: 'none', //--border
    borderRadius: '1.2rem', //--borderRadius
    shadow: 'none',
    width: '300px',
}

export const swCalendar = Calendar
export const swCalendarBetween = CalendarBetween
