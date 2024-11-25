export type Operator = '+' | '-' | '*' | '/' | '=';

export default function Operators({onOperatorClick}: {onOperatorClick: (o: Operator) => void}) {
    const operators: readonly Operator[] = ['+', '-', '*', '/', '='];
    return (
        <div style={{display: 'flex', gap: '.5em', justifyContent: 'center'}}>
            {operators.map(operator => <button onClick={() => onOperatorClick(operator)}>{operator}</button>)}
        </div>
    )
}
