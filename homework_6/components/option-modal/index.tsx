import React from "react";
import { Flavor, Glaze, Quantity, OptionSection, Options } from "../option-section";
import { ICartData } from "../cart";
import "./style.css";

interface IOptionModalProps {
    item: ICartData;
    onClose: () => void;
    onUpdate: (updatedItem: ICartData) => void;
}

interface IOptionModalState {
    flavor: Flavor;
    glaze: Glaze;
    quantity: Quantity;
    imgSrc: string;
    price: number;
}

export class OptionModal extends React.Component<IOptionModalProps, IOptionModalState> {
    constructor(props: IOptionModalProps) {
        super(props);

        this.state = {
            ...this.props.item
        }

        this.onOptionChange = this.onOptionChange.bind(this);
        this.onConfirm = this.onConfirm.bind(this);
    }

    private clickHandler(event: React.MouseEvent) {
        event.stopPropagation();
    }

    private onOptionChange(option: string, value: Options) {
        const nextState = Object.assign(
            {},
            { ...this.state },
            { [option]: value }
        );

        nextState.imgSrc = OptionSection.FLAVOR_MAP[nextState.flavor].imgSrc;
        nextState.price = OptionSection.FLAVOR_MAP[nextState.flavor].price + OptionSection.GLAZE_MAP[nextState.glaze].price;


        this.setState({ ...nextState });
    }

    private onConfirm() {
        const updatedItem = Object.assign({}, { ...this.state });
        this.props.onUpdate(updatedItem);
    }

    render() {
        return (
            <div className="modal-background" onClick={this.props.onClose}>
                <form className="modal" onClick={this.clickHandler}>
                    <h1 className="title">Update Order</h1>
                    <OptionSection
                        selectedFlavor={this.state.flavor}
                        selectedGlaze={this.state.glaze}
                        selectedQuantity={this.state.quantity}
                        onOptionChange={this.onOptionChange}
                    />
                    <section className="controls">
                        <button
                            type="button"
                            className="action cancel"
                            onClick={this.props.onClose}
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="action update"
                            onClick={this.onConfirm}
                        >
                            Update
                            </button>
                    </section>
                </form>
            </div>
        );
    }
}
