import '@mantine/core/styles.css';
import { useEffect, useState } from 'react'
import './App.css'
import { Schema } from './types/Schema'
import { loadJsonData } from './services/loadJsonService'
import RouterSwitcher from './components/routerSwitcher';

function App() {
    const [data, setData] = useState<Schema | null>(null);

    useEffect(() => {
        loadJsonData().then(setData)
    }, []);

    return (
        <>
            <div>
                <RouterSwitcher
                    pages={data?.pages ?? []}
                />
                <h1>JSON Viewer</h1>
                <pre>{data ? JSON.stringify(data, null, 2) : 'Keine Daten verfügbar'}</pre>
            </div>
        </>
    )
}

export default App
