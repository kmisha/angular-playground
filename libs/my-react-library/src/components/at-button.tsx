import { ButtonHTMLAttributes } from "react"

export interface AtButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    label: string
}

export function AtButton({ label, onClick }: AtButtonProps) {
    return (
        <button onClick={onClick}>{label}</button>
    )
}
