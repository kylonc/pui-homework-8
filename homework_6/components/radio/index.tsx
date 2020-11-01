import React from "react";
import { IOptionData } from "../option-section";
import { ICartData } from "../../components/cart";

interface IRadioProps {
    type: keyof ICartData;
    usePlaceholder: boolean;
    options: IOptionData[];
    selectedOption: string | number;
    onChangeHandler?: (key: string, value: string | number) => void;
}

export class Radio extends React.Component<IRadioProps> {
    public static GLOBAL_INDEX = 0;
    private index: number;

    constructor(props: IRadioProps) {
        super(props);

        this.index = Radio.GLOBAL_INDEX++;
    }

    private changeHanlder(key: string, value: string | number): () => void {
        return () => {
            if (!this.props.onChangeHandler) {
                return;
            }

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
                                id={option.id + this.index}
                                type="radio"
                                name={this.props.type}
                                hidden={true}
                                defaultChecked={this.props.selectedOption === option.key}
                                onChange={this.changeHanlder(this.props.type, option.key)}
                            />
                            <label
                                htmlFor={option.id + this.index}
                                {...(this.props.usePlaceholder && { "data-content": `${option.name}` })}
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