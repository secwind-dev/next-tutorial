'use client'
import styles from './Button.module.css'

function Box() {
    return (
        <div
            id="box"
            className={styles.box}
        >
            <span>
                Flex & Grig
            </span>
            <button
                type="button"
                color="red"
            >
                BTN RED
            </button>
            <button
                type="button"
                color="blue"
                data-status="FOO"
            >
                BTN BLUE
            </button>

        </div >
    )
}



function List() {
    const lists = [
        'width',
        'height',
        'margin',
        'padding',
        'flex',
        'grid',
        'position',
        'before,after'
    ]

    return (
        <div id="list" className={styles.list}>
            <ul className='flex flex-col !gap-4' >
                {lists.map((text, i) => (
                    <li id={`rung-${text}`} key={i}>{text}</li>
                ))}
            </ul>
        </div>
    )
}

function Page() {





    return (
        <>
            <section className={styles.section}>
                {List()}
            </section>
            <section className={styles.section}>
                {Box()}
            </section>

        </>
    )
}

export default Page;