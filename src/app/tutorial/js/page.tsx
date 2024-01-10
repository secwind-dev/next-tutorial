'use client'
import GenBox from './GenBox'

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
        value: new Date(),
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
