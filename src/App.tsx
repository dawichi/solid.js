import { Component, createResource, For, Show } from 'solid-js'
import Counter from './components/Counter'
import Gallery from './components/Gallery'

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
    const [getPhotos, { mutate, refetch }] = createResource<Array<Character>>(fetchData, { initialValue: [] })

    const generalBoxStyle = 'bg-zinc-700 rounded p-5'

    return (
        <div class='bg-zinc-900 min-h-screen text-white p-5'>
            <h1 class='text-center text-2xl'>Solid + TailwindCSS + Prettier</h1>
            <h4 class='text-center mt-3'>A basic template</h4>

            <div class='container mx-auto bg-zinc-800 rounded p-5 my-10 grid gap-4 grid-cols-2'>
                <Counter style={generalBoxStyle} />
                <Counter title={'Counter 2'} style={generalBoxStyle} />
            </div>

            <Gallery loading={getPhotos.loading} error={getPhotos.error} images={getPhotos()} />
        </div>
    )
}

export default App
