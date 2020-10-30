import React from "react"
import { ILocationData } from "../..//views/location";
import "./style.css";

interface ICustomSelectProps {
    currVal: string;
    showOptionGroup: boolean;
    options: ILocationData[];
    onChangeOption: (option: ILocationData) => void;
    toggleOptionGroup: () => void;
}

export class CustomSelect extends React.Component<ICustomSelectProps> {

    private clickHander(option: ILocationData): (event: React.MouseEvent) => void {
        return (event) => {
            event.stopPropagation();
            this.props.onChangeOption(option);
            this.props.toggleOptionGroup();
        }
    }

    render() {
        const { showOptionGroup } = this.props;

        return (
            <section className="select">
                <span className="current-value" onClick={this.props.toggleOptionGroup}>
                    {this.props.currVal}
                    <span
                        className={"arrow" + (showOptionGroup ? " up" : " down")} />
                </span>
                <section className={"option-group" + (showOptionGroup ? " visible" : "")}>
                    {
                        ...this.props.options.map((option: ILocationData) => {
                            return (
                                <span
                                    key={option.name}
                                    className="option"
                                    onClick={this.clickHander(option)}
                                >
                                    {option.name}
                                </span>)
                        })
                    }
                </section>
            </section>
        );
    }
}