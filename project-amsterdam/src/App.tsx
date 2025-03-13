import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Schema } from './types/Schema'
import { loadJsonData } from './services/loadJsonService'

function App() {
    const [count, setCount] = useState(0)
    const [data, setData] = useState<Schema | null>(null);

    useEffect(() => {
        loadJsonData().then(setData)
    }, []);

    return (
        <>
            <div>
                <a href="https://vite.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
                </button>
                <p>
          Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
        Click on the Vite and React logos to learn more
            </p>

            <div>
                <h1>JSON Viewer</h1>
                <pre>{data ? JSON.stringify(data, null, 2) : 'Keine Daten verfügbar'}</pre>
            </div>
        </>
    )
}

export default App
