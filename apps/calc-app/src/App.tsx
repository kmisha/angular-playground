import { useState } from 'react'
import './App.css'
import Numbers from './components/Numbers'
import Operators, { Operator } from './components/Operators';
import Input from './components/Input';

const calc = (value: string): string => {
    try {
        return eval(value);
    } catch (e) {
        return e as string;
    }
}

export default function App() {
    const [inputValue, setInputValue] = useState('');

    const runOperator = (o: Operator): void => {
        if (o === '=') {
            setInputValue(calc);

            return;
        }

        setInputValue(value => value + o);
    }

    return (
        <div>
            <Input value={inputValue} onClear={() => setInputValue('')} />
            <Operators onOperatorClick={runOperator} />
            <Numbers onTypeNumber={n => {setInputValue(value => value + n)}}/>
        </div>
    )
}
