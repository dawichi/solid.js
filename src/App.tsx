import { Component, createResource, createSignal, For, Show } from 'solid-js'

interface Character {
    name: string
    image: string
}

const fetchData = async () => {
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const response = await res.json()
    return response.results
}

const App: Component = () => {
    const [getCounter, setCounter] = createSignal(0)

    const [getCharacters, { mutate, refetch }] = createResource<Array<Character>>(fetchData, { initialValue: [] })

    return (
        <div class='bg-zinc-900 min-h-screen text-white p-10'>
            <h1 class='text-center text-2xl'>First try to solid JS</h1>

            <div class='bg-zinc-700 p-10 m-10 flex justify-around'>
                <div>
                    <p>Counter: {getCounter}</p>
                    <p>{getCounter() % 2 === 0 ? 'si par' : 'no par'}</p>
                </div>

                <div>
                    <button class='bg-green-800 py-1 px-2 rounded hover:bg-green-900' onClick={() => setCounter(getCounter() + 1)}>
                        Increment
                    </button>

                    <button class='bg-red-800 py-1 px-2 rounded hover:bg-red-900' onClick={() => setCounter(getCounter() - 1)}>
                        Decrement
                    </button>
                </div>
            </div>

            <div class='bg-zinc-700 p-10 m-10 grid grid-cols-6 gap-4'>
                <Show when={getCharacters.loading}>
                    <p>Loading ...</p>
                </Show>

                <Show when={getCharacters.error}>
                    <p>Error ;(</p>
                </Show>

                <For each={getCharacters()} fallback={<p>text when is empty</p>}>
                    {character => (
                        <div class='bg-zinc-800 p-4 border rounded shadow flex justify-center items-center'>
                            <h2>{character.name}</h2>
                            <img class='w-24' src={character.image} />
                        </div>
                    )}
                </For>
            </div>
        </div>
    )
}

export default App
