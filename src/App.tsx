import '@mantine/core/styles.css';
import { useEffect, useState } from 'react'
import './App.css'
import { Schema } from './types/Schema'
import { loadJsonData } from './services/loadJsonService'
import RouterSwitcher from './components/routerSwitcher';
import { AppShell } from '@mantine/core';
import Header from './components/Header';

function App() {
    const [data, setData] = useState<Schema | null>(null);

    useEffect(() => {
        loadJsonData().then(setData)
    }, []);

    return (
        <AppShell
            header={{ height: 120 }}
            padding="md"
        >
            <AppShell.Header>
                <Header 
                    pages={data?.pages ?? []}
                />
            </AppShell.Header>
            <AppShell.Main>
                <RouterSwitcher
                    pages={data?.pages ?? []}
                />
            </AppShell.Main>
        </AppShell>
    )
}

export default App
