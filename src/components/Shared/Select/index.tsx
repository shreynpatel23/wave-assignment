import React from "react";

// * interface
import { ISelectProps } from "./interface";

export default function Select({
    label,
    selectedOption,
    selectOptions,
    onSelectOption,
}: ISelectProps) {
    return (
        <div className="flex flex-col">
            <label htmlFor={label} className="text-xs leading-xs text-[#999]">{label}</label>
            <select className="py-2 px-4 mt-1.5 bg-white rounded-lg border border-[#eee]"
                name={label}
                id={label}
                value={selectedOption}
                onChange={event => onSelectOption(event.target.value)}>
                {selectOptions?.map((option: string) => {
                    return <option key={option} value={option}>{option}</option>
                })}
            </select>
        </div>
    );
}