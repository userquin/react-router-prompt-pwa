import { Outlet } from 'react-router-dom'
import ReloadPrompt from './ReloadPrompt'
import './App.css'

function App() {
    return (
        <main className="App">
            <img src="/favicon.svg" alt="PWA Logo" width="60" height="60" />
            <h1 className="Home-title">Custom React PWA with Prompt</h1>
            <Outlet />
            <ReloadPrompt />
        </main>
    )
}

export default App
