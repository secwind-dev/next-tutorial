import { values } from '@/types'
import { pipe } from 'fp-ts/function'
function Page() {
    const len = (s: string): number => s.length
    const double = (n: number): number => n * 2
    const x = pipe('hello', len, double)

    const sum = (a: number) => (b: number) => a * b

    const withNumber = sum(15)

    const fn = values('hello', len, double, withNumber)

    console.log('object :>> ', fn)

    return (
        <section className=" flex justify-center items-center w-full h-[100dvh] bg-slate-500">
            <section className=" bg-slate-400 p-5 flex justify-center items-center w-[400px]"></section>
        </section>
    )
}

export default Page
