import { createSignal } from 'solid-js'

// Displays a counter with increment and decrement buttons
const Counter = (props: { title?: string; style?: string }) => {
    const [getCounter, setCounter] = createSignal(0)

    const Pill = (props: { text: string; bg?: string }) => <span class={`rounded-full px-2 py-1 ${props.bg}`}>{props.text}</span>

    return (
        <div class={props.style ?? 'bg-zinc-600 rounded p-5'}>
            <p class='text-center'>
                <span>
                    {props.title ?? 'Counter'}: &nbsp; {getCounter}
                </span>
                &nbsp; &nbsp;
                {getCounter() % 2 === 0 ? <Pill bg='bg-blue-400' text='even' /> : <Pill bg='bg-red-400' text='odd' />}
            </p>

            <div class='flex justify-center items-center my-5 gap-4'>
                <button class='bg-green-800 py-1 px-2 rounded hover:bg-green-900' onClick={() => setCounter(getCounter() + 1)}>
                    +
                </button>

                <button class='bg-red-800 py-1 px-2 rounded hover:bg-red-900' onClick={() => setCounter(getCounter() - 1)}>
                    -
                </button>
            </div>
        </div>
    )
}

export default Counter
