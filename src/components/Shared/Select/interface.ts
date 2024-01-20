export interface ISelectProps {
    label: string;
    selectedOption: string;
    defaultOption: string;
    selectOptions: Array<string>;
    onSelectOption: (value: string) => void;
}