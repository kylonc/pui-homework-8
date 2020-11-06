import React from "react";
import { Radio } from "../radio";
import "./style.css";

export enum Flavor {
    Original = "original",
    OriginalGF = "original-gf",
    Walnut = "walnut",
    Blackberry = "blackberry",
    PumpkinSpice = "pumpkin-spice",
    CaramelPecan = "caramel-pecan"
}

export enum Glaze {
    None = "none",
    SugarMilk = "sugar-milk",
    VanillaMilk = "vanilla-milk",
    DoubleChocolate = "double-choco"
}

export enum Quantity {
    One = 1,
    Three = 3,
    Six = 6,
    Twelve = 12
}

export type Options = Flavor | Glaze | Quantity;

export interface IOptionData {
    name: string;
    id: string;
    key: Options;
}

export interface IOptionMap {
    [key: string]: {
        name: string;
        price: number;
        imgSrc?: string
    }
}

interface IOptionSectionProps {
    selectedFlavor: Flavor;
    selectedGlaze: Glaze;
    selectedQuantity: Quantity;
    onOptionChange?: (option: string, value: Options) => void;
}

export class OptionSection extends React.Component<IOptionSectionProps> {

    public static readonly FLAVOR_MAP: IOptionMap = {
        [Flavor.Original]: {
            name: "Original",
            price: 8,
            imgSrc: "https://www.veganricha.com/wp-content/uploads/2020/05/Sweet-potato-cinnamon-rolls-veganricha-9420-2-1.jpg"
        },
        [Flavor.OriginalGF]: {
            name: "Original (Gluten Free)",
            price: 10,
            imgSrc: "https://www.paleorunningmomma.com/wp-content/uploads/2017/12/cinnamon-rolls-22.jpg"
        },
        [Flavor.Walnut]: {
            name: "Walnut",
            price: 9,
            imgSrc: "https://www.thelittleepicurean.com/wp-content/uploads/2015/02/chocolate-walnut-cinnamon-rolls-3.jpg"
        },
        [Flavor.Blackberry]: {
            name: "Blackberry",
            price: 10,
            imgSrc: "https://i0.wp.com/gatherforbread.com/wp-content/uploads/2014/08/Blackberry-Cinnamon-Rolls-square.jpg?resize=800%2C800&ssl=1"
        },
        [Flavor.PumpkinSpice]: {
            name: "Pumpkin Spice",
            price: 9,
            imgSrc: "https://diethood.com/wp-content/uploads/2013/10/Pumpkin-Pie-Cinnamon-Rolls-7.jpg"
        },
        [Flavor.CaramelPecan]: {
            name: "Caramel Pecan",
            price: 9,
            imgSrc: "https://www.thechunkychef.com/wp-content/uploads/2018/11/Maple-Caramel-Pecan-Sticky-Buns-Recipe-up-close-680x775.jpg"
        },
    };

    public static readonly GLAZE_MAP: IOptionMap = {
        [Glaze.None]: {
            name: "None",
            price: 0
        },
        [Glaze.SugarMilk]: {
            name: "Sugar (Milk)",
            price: 2
        },
        [Glaze.VanillaMilk]: {
            name: "Vanilla (Milk)",
            price: 2
        },
        [Glaze.DoubleChocolate]: {
            name: "Double Chocolate",
            price: 3
        },
    };

    public static readonly FLAVOR_OPTIONS: IOptionData[] = [
        {
            name: OptionSection.FLAVOR_MAP[Flavor.Original].name,
            id: "original",
            key: Flavor.Original
        },
        {
            name: OptionSection.FLAVOR_MAP[Flavor.OriginalGF].name,
            id: "original-gf",
            key: Flavor.OriginalGF
        },
        {
            name: OptionSection.FLAVOR_MAP[Flavor.Walnut].name,
            id: "walnut",
            key: Flavor.Walnut
        },
        {
            name: OptionSection.FLAVOR_MAP[Flavor.Blackberry].name,
            id: "blackberry",
            key: Flavor.Blackberry
        },
        {
            name: OptionSection.FLAVOR_MAP[Flavor.PumpkinSpice].name,
            id: "pumpkin-spice",
            key: Flavor.PumpkinSpice
        },
        {
            name: OptionSection.FLAVOR_MAP[Flavor.CaramelPecan].name,
            id: "caramel-pecan",
            key: Flavor.CaramelPecan
        }
    ];

    public static readonly GLAZE_OPTIONS: IOptionData[] = [
        {
            name: OptionSection.GLAZE_MAP[Glaze.None].name,
            id: "none",
            key: Glaze.None
        },
        {
            name: OptionSection.GLAZE_MAP[Glaze.SugarMilk].name,
            id: "sugar-milk",
            key: Glaze.SugarMilk
        },
        {
            name: OptionSection.GLAZE_MAP[Glaze.VanillaMilk].name,
            id: "vanilla-milk",
            key: Glaze.VanillaMilk
        },
        {
            name: OptionSection.GLAZE_MAP[Glaze.DoubleChocolate].name,
            id: "double-choco",
            key: Glaze.DoubleChocolate
        },
    ];

    public static readonly QUANTITY_OPTIONS: IOptionData[] = [
        {
            name: "1",
            id: "1",
            key: Quantity.One
        },
        {
            name: "3",
            id: "3",
            key: Quantity.Three
        },
        {
            name: "6",
            id: "6",
            key: Quantity.Six
        },
        {
            name: "12",
            id: "12",
            key: Quantity.Twelve
        },
    ];

    render() {
        return (
            <React.Fragment>
                <section id="flavor" className="selection">
                    <div className="title">
                        flavor:
                        <span className="curr-selection">
                            &nbsp;{OptionSection.FLAVOR_MAP[this.props.selectedFlavor].name} +${OptionSection.FLAVOR_MAP[this.props.selectedFlavor].price}
                        </span>
                    </div>
                    <Radio
                        type="flavor"
                        usePlaceholder={true}
                        options={OptionSection.FLAVOR_OPTIONS}
                        selectedOption={this.props.selectedFlavor}
                        onChangeHandler={this.props.onOptionChange}
                    />
                </section>
                <section id="glaze" className="selection">
                    <div className="title">
                        glaze:
                    <span className="curr-selection">
                            &nbsp;{OptionSection.GLAZE_MAP[this.props.selectedGlaze].name}  +${OptionSection.GLAZE_MAP[this.props.selectedGlaze].price}</span>
                    </div>
                    <Radio
                        type="glaze"
                        usePlaceholder={true}
                        options={OptionSection.GLAZE_OPTIONS}
                        selectedOption={this.props.selectedGlaze}
                        onChangeHandler={this.props.onOptionChange}
                    />
                </section>
                <section id="quantity" className="selection">
                    <div className="title">quantity</div>
                    <Radio
                        type="quantity"
                        usePlaceholder={false}
                        options={OptionSection.QUANTITY_OPTIONS}
                        selectedOption={this.props.selectedQuantity}
                        onChangeHandler={this.props.onOptionChange}
                    />
                </section>
            </React.Fragment>
        )
    }
}