import React, { Fragment } from "react";

// * interface
import { ISelectProps } from "./interface";

// * assets
import arrowDown from '../../../assets/img/DownArrow.svg';
import checkmarkSvg from '../../../assets/img/Check.svg';

export default function Select({
    label,
    selectedOption,
    defaultOption,
    selectOptions,
    onSelectOption,
}: ISelectProps) {
    return (
        <div>
            <p className="text-xs leading-xs text-[#999]">{label}</p>
            <div className="py-2 px-4 mt-1.5 bg-white rounded-lg border border-[#eee] flex items-center cursor-pointer group relative" tabIndex={1}>
                <p className="text-sm leading-sm font-medium text-neutral-800">
                    {selectedOption ? selectedOption : defaultOption}
                </p>
                <div className="px-1 ml-auto">
                    <img src={arrowDown} alt="arrow down to show that this input is dropdown" />
                </div>
                <div className="absolute top-8 left-0 border border-neutral-200 shadow-cardShadow hidden group-hover:block bg-white w-full max-h-[300px] rounded-[8px] overflow-y-auto z-10">
                    {selectOptions?.map((option: string, index: number) => {
                        const isOptionsChecked =
                            selectedOption.toLowerCase() === option.toLowerCase();
                        return (
                            <Fragment key={option}>
                                <div
                                    role="presentation"
                                    className="flex items-center px-4 py-2 cursor-pointer"
                                    onClick={() => {
                                        if (isOptionsChecked) {
                                            return onSelectOption("");
                                        }
                                        return onSelectOption(option);
                                    }}
                                >
                                    <p
                                        className={`text-sm leading-sm grow ${
                                            isOptionsChecked
                                                ? "text-accent-500 font-semibold"
                                                : "text-neutral-800 font-medium"
                                        }`}
                                    >
                                        {option}
                                    </p>
                                    <div className="pr-1">
                                        {isOptionsChecked && (
                                            <img src={checkmarkSvg} alt="checkmark svg for showing the selected option" />
                                        )}
                                    </div>
                                </div>
                                {/* eslint-disable-next-line no-unsafe-optional-chaining */}
                                {index !== selectOptions?.length - 1 && <hr />}
                            </Fragment>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}