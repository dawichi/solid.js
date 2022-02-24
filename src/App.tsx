import type { Component } from 'solid-js'

import logo from './logo.svg'

const App: Component = () => {
    return (
        <div class='text-center bg-zinc-900 text-white'>
            <header class='h-screen flex flex-col justify-center items-center'>
                <img src={logo} class='w-96 animate-pulse' alt='logo' />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
            </header>
        </div>
    )
}

export default App
