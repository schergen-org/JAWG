import '@mantine/core/styles.css';
import { useEffect, useState } from 'react'
import './App.css'
import { Schema } from './types/Schema'
import { loadJsonData } from './services/loadJsonService'
import RouterSwitcher from './components/routerSwitcher';
import { AppShell } from '@mantine/core';

function App() {
    const [data, setData] = useState<Schema | null>(null);

    useEffect(() => {
        loadJsonData().then(setData)
    }, []);

    return (
        <AppShell>
            <AppShell.Main>
                <RouterSwitcher
                    pages={data?.pages ?? []}
                />
            </AppShell.Main>
        </AppShell>
    )
}

export default App
