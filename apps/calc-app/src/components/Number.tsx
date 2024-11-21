export default function Number({n, onClick}: Readonly<{n: number, onClick: (n: number) => void}>) {
    return (
        <button onClick={() => onClick(n)}>{n}</button>
    )
}
