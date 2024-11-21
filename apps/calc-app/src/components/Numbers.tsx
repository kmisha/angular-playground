import Number from "./Number"

export default function Numbers({onTypeNumber}: Readonly<{onTypeNumber: (n: number) => void}>) {
    return (
        <div className="numbers">
            {Array.from({length: 10}).map((_, i) => <Number n={i} onClick={onTypeNumber} key={i} />)}
        </div>
    )
}
