import React from "react";
import { IOptionData } from "../../views/shop";

interface IRadioProps {
    type: string;
    usePlaceholder: boolean;
    options: IOptionData[];
    selectedOption: string | number;
    onChangeHandler: (key: string, value: string | number) => void;
}

export class Radio extends React.Component<IRadioProps> {
    constructor(props: IRadioProps) {
        super(props);
    }

    private changeHanlder(key: string, value: string | number): () => void {
        return () => {
            this.props.onChangeHandler(key, value);
        }
    }

    render() {
        return (
            <React.Fragment>
                {...this.props.options.map((option: IOptionData) => {
                    return (
                        <React.Fragment key={option.id}>
                            <input
                                id={option.id}
                                type="radio"
                                name={this.props.type}
                                hidden={true}
                                defaultChecked={this.props.selectedOption === option.key}
                                onChange={this.changeHanlder(this.props.type, option.key)}
                            />
                            <label
                                htmlFor={option.id}
                                { ...(this.props.usePlaceholder && { "data-content": `${option.name}`}) }
                            >
                                {option.name}
                            </label>
                        </React.Fragment>
                    )
                })}
            </React.Fragment>
        );
    }
}