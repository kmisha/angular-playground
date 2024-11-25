export default function Input({value, onClear}: {value: string, onClear: () => void}) {
    return (
        <label htmlFor='value' style={{padding: '1em', display: 'flex', gap: '0.5em', alignItems: 'center'}}>
            <input name='value' value={value} style={{height: '2em'}} />
            <button onClick={onClear}>Clear</button>
        </label>
    )
}
