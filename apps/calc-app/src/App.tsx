import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import {AtButton} from 'my-react-library';

function App() {
    const [count, setCount] = useState(0)
    const [log, setLog] = useState<readonly string[]>([]);

    const increase = () => setCount(count => count + 1);
    const decrease = () => setCount(count => count - 1);
    const clearLog = () => setLog([]);

    useEffect(() => {
        setLog(log => [...log, `${count}`]);
    }, [count])

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
                <button onClick={increase}>
                    Increase
                </button>

                <button onClick={decrease}>
                    Decrease
                </button>

                <p>
                    Count is {count}
                </p>
            </div>
            {log.length > 0 ? <Log log={log }/> : null}
            <button onClick={clearLog}>Clear log</button>
            <AtButton label={'Test'}></AtButton>
        </>
    )
}

export function Log({log}: {log: readonly string[]}): JSX.Element {
    useEffect(() => {
        console.log('mount Log');
    }, []);

    useEffect(() => {
        console.log('unmount Log');
    }, []);

    useEffect(() => {
        console.log('rerender');
    });

    return (
        <pre>{log.join('\n')}</pre>
    )
}

export default App
