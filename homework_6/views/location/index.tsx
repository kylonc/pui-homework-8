import React from "react";
import { CustomSelect } from "../../components/custom-select";
import "./style.css"

interface ILocationState {
    currLocation: ILocationData;
    showOptionGroup: boolean;
}

enum City {
    Pittsburgh,
    LosAngeles,
    NewYork,
    Austin,
    Seattle
}

export interface ILocationData {
    name: string;
    imgSrc: string;
    phone: string;
    address: {
        line1: string;
        line2: string;
    }
    email: string
}

export class LocationPage extends React.Component<{}, ILocationState> {

    constructor(props = {}) {
        super(props);

        this.state = {
            currLocation: this.locations[City.Pittsburgh],
            showOptionGroup: false
        };

        this.updateLocation = this.updateLocation.bind(this);
        this.toggleOptionGroup = this.toggleOptionGroup.bind(this);
    }

    private locations: { [key: string]: ILocationData } = {
        [City.Pittsburgh]: {
            name: "Pittsburgh",
            imgSrc: "",
            phone: "412-666-6666",
            address: {
                line1: "100 Penn Ave.",
                line2: "Pittsburgh, PA 12345"
            },
            email: "shakeyourbunspgh@gmail.com"
        },
        [City.LosAngeles]: {
            name: "Los Angeles",
            imgSrc: "",
            phone: "213-666-6666",
            address: {
                line1: "100 Palm Ave.",
                line2: "Los Angeles, CA 12345"
            },
            email: "shakeyourbunsla@gmail.com"
        },
        [City.NewYork]: {
            name: "New York",
            imgSrc: "",
            phone: "212-666-6666",
            address: {
                line1: "100 Liberty Ave.",
                line2: "New York, NY 12345"
            },
            email: "shakeyourbunsny@gmail.com"
        },
        [City.Austin]: {
            name: "Austin",
            imgSrc: "",
            phone: "4512-666-6666",
            address: {
                line1: "100 Weird Ave.",
                line2: "Austin, TX 12345"
            },
            email: "shakeyourbunsatx@gmail.com"
        },
        [City.Seattle]: {
            name: "Seattle",
            imgSrc: "",
            phone: "206-666-6666",
            address: {
                line1: "100 Shore Ave.",
                line2: "Seattle, WA 12345"
            },
            email: "shakeyourbunssea@gmail.com"
        }
    };

    private updateLocation(currLocation: ILocationData) {
        this.setState({ currLocation });
    }

    private toggleOptionGroup() {
        this.setState({
            showOptionGroup: !this.state.showOptionGroup
        });
    }

    render() {
        const orderedLocations = [
            this.locations[City.Pittsburgh],
            this.locations[City.LosAngeles],
            this.locations[City.NewYork],
            this.locations[City.Austin],
            this.locations[City.Seattle]
        ];

        const locationIdx = orderedLocations.findIndex((location: ILocationData) => {
            return location.name === this.state.currLocation.name;
        })

        orderedLocations.splice(locationIdx, 1);

        return (
            <section id="location-content">
                <section className="location-select">
                    <span className="prefix">I live in</span>
                    <CustomSelect
                        currVal={this.state.currLocation.name}
                        options={orderedLocations}
                        showOptionGroup={this.state.showOptionGroup}
                        onChangeOption={this.updateLocation}
                        toggleOptionGroup={this.toggleOptionGroup}
                    />
                </section>
            </section>
        );
    }
}