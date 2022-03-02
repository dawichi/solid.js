import { For, Show } from 'solid-js'

// Displays images into a grid
const Gallery = (props: {
    loading: boolean
    error: boolean
    title?: string
    images: {
        name: string
        image: string
    }[]
}) => {
    return (
        <div class='container mx-auto bg-zinc-800 rounded p-5 my-10'>
            <h2 class='text-2xl text-center'>{props.title ?? 'Gallery'}</h2>
            <hr class='w-4/5 mx-auto my-5' />

            <div class='grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                <Show when={props.loading}>
                    <p>Loading ...</p>
                </Show>

                <Show when={props.error}>
                    <p>Error!</p>
                </Show>

                <For each={props.images}>
                    {photo => (
                        <section class='bg-zinc-700 cursor-pointer p-4 shadow rounded shadow flex justify-center items-center hover:shadow-zinc-400'>
                            <p class='mr-3'>{photo.name}</p>
                            <img class='w-12 md:w-24 rounded' src={photo.image} />
                        </section>
                    )}
                </For>
            </div>
        </div>
    )
}

export default Gallery
