import { FC } from "react";
import css from "./styles.module.css"

interface RadiogroupProps {
       items: { id: string; label: string; value: string }[];
       value: string;
       onChange: (value: string) => void;
}

export const Radiogroup: FC<RadiogroupProps> = ({ items, value, onChange }) => {
       return (
              <div className = {css.radiogroup}>
                     {items.map(item => (
                            <div key = {item.id}>
                                   <input
                                          type = "radio"
                                          id = {item.id}
                                          value = {item.value}
                                          checked = {item.value === value}
                                          onChange = {() => onChange(item.value)}
                                   />
                                   <label htmlFor={item.id}>{item.label}</label>
                            </div>
                     ))}
              </div>
       );
}
