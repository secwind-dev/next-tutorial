import { ci } from '@/types'
import { pipe, flow } from 'fp-ts/function'
import * as O from 'fp-ts/lib/Option'
function Page() {
    const len = (s: string): number => s.length
    const double = (n: number): number => n * 2

    const withNumber = (a: number) => (b: number) => a * b

    const fn = ci(
        'hello',
        O.fromPredicate((s) => s.length == 5),
        O.map(len),
        O.map(double),
        O.matchW(
            () => 'ไม่ถูกต้อง',
            (v) => withNumber(5)(v)
        )
    )
    // const fn = ci('hello', len, getEvent, double, withNumber(25))
    console.log('fn XX :>> ', fn)
    return <section>{fn}</section>
}

export default Page
