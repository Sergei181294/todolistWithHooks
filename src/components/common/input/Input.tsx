import type { FC, ChangeEvent } from "react"
import css from "./input.module.css"
import cn from "classnames"

interface InputProps {
       value:string;
       onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
       className?: string;

}

export const Input: FC<InputProps> = ({value, onChange, className}) => <input className = {cn (css.input, className)} value = {value} onChange = {onChange}/>
