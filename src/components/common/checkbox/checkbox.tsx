import type { FC } from "react";

interface CheckboxProps {
       checked: boolean;
       onChange: () => void;
}

export const Checkbox: FC<CheckboxProps> = ({checked, onChange}) =>
       <input type = "checkbox" onChange={ onChange } checked = { checked } />

