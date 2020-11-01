import React from "react";
import { Flavor, Glaze, Quantity, OptionSection } from "../option-section";
import "./style.css";

interface IOptionModalProps {
    flavor: Flavor;
    glaze: Glaze;
    quantity: Quantity;
    onCloseModal: () => void;
}

interface IOptionModalState {
    selectedFlavor: Flavor;
    selectedGlaze: Glaze;
    selectedQuantity: Quantity;
}

export class OptionModal extends React.Component<IOptionModalProps, IOptionModalState> {
    constructor(props: IOptionModalProps) {
        super(props);

        this.state = {
            selectedFlavor: props.flavor,
            selectedGlaze: props.glaze,
            selectedQuantity: props.quantity
        }
    }

    private onClickBackground() {
        this.props.onCloseModal();
    }

    render() {
        return (
            <div className="modal-background" onClick={this.onClickBackground}>
                <section className="modal">
                    <h1 className="title">Update Order</h1>
                    <OptionSection
                        selectedFlavor={this.state.selectedFlavor}
                        selectedGlaze={this.state.selectedGlaze}
                        selectedQuantity={this.state.selectedQuantity}
                    />
                </section>
            </div>
        );
    }
}
