export default function Number({n, onClick, className}: Readonly<{n: number, onClick: (n: number) => void, className: string}>) {
    return (
        <button onClick={() => onClick(n)} className={className}>{n}</button>
    )
}
