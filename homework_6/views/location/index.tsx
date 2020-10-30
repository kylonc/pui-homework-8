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
                <section className="col-left">
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
                    <span className="neighborhood">Squirrel Hill</span>
                    <span className="area-desc">Our Pittsburgh location is nested in the quiet, charming neighborhood of Squirrel Hill, located on Forbes Avenue, where no business can really afford the rent prices, but because we charge so damn much for our products, we are actually doing okay. So come on down and make sure we don’t go out of business because we can’t make rent! See you soon!</span>
                    <span className="area-img" />
                </section>
                <section className="col-right">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d663.2578333165998!2d-79.91890892341169!3d40.43865158691614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x8834f2284c000001%3A0x1a620cff11d401a5!2sPatrick%20J%20Sparto%2C%206035%20Forbes%20Ave%2C%20Pittsburgh%2C%20PA%2015260!3m2!1d40.4380479!2d-79.9188959!5e0!3m2!1sen!2sus!4v1604076315720!5m2!1sen!2sus" width="600" height="450" frameBorder="0" style={{ border: 0 }} allowFullScreen={false} aria-hidden="false" tabIndex={0} />
                    <section className="contact-info">
                        <span className="title">Contact Information</span>
                        <ul className="contact-methods">
                            <li className="method">
                                <svg width="60" height="59" viewBox="0 0 60 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 29.1428V57H54.2857V29.1428" stroke="black" stroke-width="3" stroke-linejoin="round" />
                                    <mask id="path-2-inside-1" fill="white">
                                        <path d="M15 19.5C15 21.4891 14.2098 23.3968 12.8033 24.8033C11.3968 26.2098 9.48912 27 7.5 27C5.51088 27 3.60322 26.2098 2.1967 24.8033C0.790177 23.3968 3.00349e-07 21.4891 0 19.5L7.5 19.5H15Z" />
                                    </mask>
                                    <path d="M15 19.5C15 21.4891 14.2098 23.3968 12.8033 24.8033C11.3968 26.2098 9.48912 27 7.5 27C5.51088 27 3.60322 26.2098 2.1967 24.8033C0.790177 23.3968 3.00349e-07 21.4891 0 19.5L7.5 19.5H15Z" stroke="black" stroke-width="6" mask="url(#path-2-inside-1)" />
                                    <mask id="path-3-inside-2" fill="white">
                                        <path d="M30 19.5C30 21.4891 29.2098 23.3968 27.8033 24.8033C26.3968 26.2098 24.4891 27 22.5 27C20.5109 27 18.6032 26.2098 17.1967 24.8033C15.7902 23.3968 15 21.4891 15 19.5L22.5 19.5H30Z" />
                                    </mask>
                                    <path d="M30 19.5C30 21.4891 29.2098 23.3968 27.8033 24.8033C26.3968 26.2098 24.4891 27 22.5 27C20.5109 27 18.6032 26.2098 17.1967 24.8033C15.7902 23.3968 15 21.4891 15 19.5L22.5 19.5H30Z" stroke="black" stroke-width="6" mask="url(#path-3-inside-2)" />
                                    <mask id="path-4-inside-3" fill="white">
                                        <path d="M45 19.5C45 21.4891 44.2098 23.3968 42.8033 24.8033C41.3968 26.2098 39.4891 27 37.5 27C35.5109 27 33.6032 26.2098 32.1967 24.8033C30.7902 23.3968 30 21.4891 30 19.5L37.5 19.5H45Z" />
                                    </mask>
                                    <path d="M45 19.5C45 21.4891 44.2098 23.3968 42.8033 24.8033C41.3968 26.2098 39.4891 27 37.5 27C35.5109 27 33.6032 26.2098 32.1967 24.8033C30.7902 23.3968 30 21.4891 30 19.5L37.5 19.5H45Z" stroke="black" stroke-width="6" mask="url(#path-4-inside-3)" />
                                    <mask id="path-5-inside-4" fill="white">
                                        <path d="M60 19.5C60 21.4891 59.2098 23.3968 57.8033 24.8033C56.3968 26.2098 54.4891 27 52.5 27C50.5109 27 48.6032 26.2098 47.1967 24.8033C45.7902 23.3968 45 21.4891 45 19.5L52.5 19.5H60Z" />
                                    </mask>
                                    <path d="M60 19.5C60 21.4891 59.2098 23.3968 57.8033 24.8033C56.3968 26.2098 54.4891 27 52.5 27C50.5109 27 48.6032 26.2098 47.1967 24.8033C45.7902 23.3968 45 21.4891 45 19.5L52.5 19.5H60Z" stroke="black" stroke-width="6" mask="url(#path-5-inside-4)" />
                                    <path d="M1.42859 19.8571L4.64287 10.5714V2H54.6429V6.28571V10.5714L58.5714 19.8571" stroke="black" stroke-width="3" stroke-linejoin="round" />
                                    <mask id="path-7-inside-5" fill="white">
                                        <rect x="10" y="32" width="18.5714" height="12.1429" rx="2" />
                                    </mask>
                                    <rect x="10" y="32" width="18.5714" height="12.1429" rx="2" stroke="black" stroke-width="6" stroke-linejoin="round" mask="url(#path-7-inside-5)" />
                                    <mask id="path-8-inside-6" fill="white">
                                        <rect x="33.5714" y="32" width="15.7143" height="26.4286" rx="2" />
                                    </mask>
                                    <rect x="33.5714" y="32" width="15.7143" height="26.4286" rx="2" stroke="black" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" mask="url(#path-8-inside-6)" />
                                </svg>

                                <section className="address vert-centered">
                                    <span className="info">{this.state.currLocation.address.line1}</span>
                                    <span className="info">{this.state.currLocation.address.line2}</span>
                                </section>
                            </li>
                            <li className="method">
                                <svg width="66" height="58" viewBox="0 0 66 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <mask id="path-1-inside-1" fill="white">
                                        <path d="M46.6335 2.6462C46.9194 1.57927 48.016 0.94611 49.083 1.23199L56.1892 3.13609L51.1594 21.9074L44.0532 20.0033C42.9863 19.7174 42.3531 18.6208 42.639 17.5538L46.6335 2.6462Z" />
                                    </mask>
                                    <path d="M46.6335 2.6462C46.9194 1.57927 48.016 0.94611 49.083 1.23199L56.1892 3.13609L51.1594 21.9074L44.0532 20.0033C42.9863 19.7174 42.3531 18.6208 42.639 17.5538L46.6335 2.6462Z" stroke="black" stroke-width="6" mask="url(#path-1-inside-1)" />
                                    <mask id="path-2-inside-2" fill="white">
                                        <path d="M39.5545 29.0651C39.8404 27.9982 40.9371 27.3651 42.004 27.6509L49.1102 29.555L44.0804 48.3264L36.9742 46.4223C35.9073 46.1364 35.2741 45.0397 35.56 43.9728L39.5545 29.0651Z" />
                                    </mask>
                                    <path d="M39.5545 29.0651C39.8404 27.9982 40.9371 27.3651 42.004 27.6509L49.1102 29.555L44.0804 48.3264L36.9742 46.4223C35.9073 46.1364 35.2741 45.0397 35.56 43.9728L39.5545 29.0651Z" stroke="black" stroke-width="6" mask="url(#path-2-inside-2)" />
                                    <path d="M50.444 19.0151L53.3771 8.06884C53.8061 6.46758 55.8851 6.05347 56.895 7.36811L61.5591 13.4398C61.9381 13.9332 62.0659 14.5748 61.9049 15.1758L55.0697 40.685C54.918 41.2511 54.5256 41.7222 53.9963 41.9738L46.7873 45.3998C45.2467 46.132 43.5555 44.7234 43.997 43.0758L47.0063 31.8449C47.2605 30.8963 48.2355 30.3334 49.1842 30.5875C50.1328 30.8417 51.1078 30.2788 51.362 29.3301L52.9588 23.3708C53.213 22.4222 52.65 21.4471 51.7014 21.193C50.7528 20.9388 50.1898 19.9637 50.444 19.0151Z" stroke="black" stroke-width="3" />
                                    <path d="M37.9215 50.0179C34.6825 52.5371 21.7269 53.6167 18.4594 42.24C15.913 33.3739 28.981 31.6481 29.2959 38.951C29.5046 43.7914 25.4692 43.6152 23.6834 43.3942M14.9233 35.2628C12.0443 32.7437 6.12239 28.0618 14.1525 19.41" stroke="black" stroke-width="3" />
                                </svg>
                                <span className="info vert-centered">{this.state.currLocation.phone}</span>
                            </li>
                            <li className="method">
                                <svg width="59" height="57" viewBox="0 0 59 57" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                                    <path d="M6.53035 54.7144L51.6349 54.7144C53.6115 54.7144 54.3901 52.1525 52.7478 51.0526L30.0916 35.8792C29.4156 35.4265 28.5327 35.4283 27.8587 35.884L5.41035 51.0574C3.77638 52.1618 4.55813 54.7144 6.53035 54.7144Z" stroke="black" stroke-width="3" />
                                    <path d="M56.0692 28.2975L56.0692 49.8644C56.0692 51.4698 54.273 52.4209 52.9452 51.5186L37.512 41.032C36.3623 40.2507 36.3405 38.5638 37.4697 37.7531L52.9028 26.6729C54.226 25.7229 56.0692 26.6686 56.0692 28.2975Z" stroke="black" stroke-width="3" />
                                    <path d="M2.41455 28.2975L2.41455 49.8644C2.41455 51.4698 4.21073 52.4209 5.53859 51.5186L20.9717 41.032C22.1215 40.2507 22.1433 38.5638 21.0141 37.7531L5.58097 26.6729C4.25772 25.7229 2.41455 26.6686 2.41455 28.2975Z" stroke="black" stroke-width="3" />
                                    <path d="M7.51172 24.3994V4.401C7.51172 3.29643 8.40715 2.401 9.51172 2.401H48.4354C49.54 2.401 50.4354 3.29643 50.4354 4.401V24.3994" stroke="black" stroke-width="3" />
                                    <rect x="18.2426" y="7.76636" width="20.9253" height="24.1446" fill="url(#pattern0)" />
                                    <defs>
                                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                                            <use xlinkHref="#image0" transform="scale(0.025641 0.0222222)" />
                                        </pattern>
                                        <image id="image0" width="39" height="45" xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACcAAAAtCAYAAAAtOHJTAAAD+ElEQVRYR8WZjZFNQRCFeyNABGwGRIAI2AgQASJgI0AEVgRrI2AjQASIABFQ363pV+f1nZ6eu2vpqld+7tyZM6dP/8zcA7u8XTeze2Z2y8z4u9o3M+P32cx+bl3qYOsLbTxg7prZ4wZqZhoAvjOz9w1w+c5WcIB60ZgqJx8MODGz4wrkLDjcBahnyYLfxXW4kfH8cPXNhF3cDMDX2SZmwLHAh84C52YGA7ip0hNzwDoyQA5qgHveA1iBu92AqdAB9dLMPl7Qr73Nsskncb4ROCb5FCKQHaZu2AiWDSIVtxWDGbi4O9x2dAm2MtwR4H1dIwOHxtCI250m+I3kTA2HsadtJMHEWouGe+AQ7VuZ9m+6MkP7VQKOCIbRFbjozq5QCz6YA2P3VRT7VHgJb/l7N3rgEOiCutlhlSjbOE/ORLdGNuBINVSGKrpVSov2oluV3lnWXg2Ss5JcVQUSPHNhy9oKLmpthjW0yXtqsPXLzK51GgHYg5WewfgPda2CU1pJtBqtvcmiBCjsBI+6DzefitireYlWyh126OAUNQ/I1lCb2cO2qD8HGIz0AoBEDkjszMx4NzPWfNQe7twaF6tcqtpktwDjz57hKg+SN4U+NSkfO3OaCGGBRJhZ1GbF8m+ZaJfDksl17hMHp3qrqNexsAXLmZHzYNmt2oh68MzBKfWj3cXFqnSD1tCc217t7OxIk/E54GIwUOBJnD2LLh2N5X1djH9XNXoFLrIx2h2gHwhqysyoRMXNVONX4LbsTtMCoJYaOLDYElXNbQlulEY08qqECubYDo2Ch/GraI3MZeCiNquoZjFNqlWKYvwqz82C2xqpLLa1JKqmj9BADPcsoi4CbmuXo+OX2hoXzdLDVrdGj1Q5UccvEvDoUaGP2nJN1lW0Kguuv9XxTyJdJbBUEgenrcqoOMeDT7aR2E6BYRQQ2mjuGgkHNxtVOgkLwh4Avb3C9TSg3hYByNslxvcSPO6k5/POZVd/HVxcNMvkTEAi9kOMe8UPM/r/fszDvb4w4/AMDSlj6d20qd3zWtZsjnQXhd4rENrjxY1nBYVD0F7Ln7Xpo16fyWP7rQyyeyqD1lySKyxFxl2LvLPqvEcHnKq98a7Dj4OwNbpxijegfuOJLrum4KKe9q4GigJ/JY9jlxBbnPTu7ErQhEl7LUzMZeiF7vifWw9c73LvvwDMmr/ejSZiJ8VkR8CKWTQ9e7GzzFXdbPbuggl5Qj+NsoDSky35jl5xGmDVNjOx56jIjKeCLx02/RbdP574u9XRcG+NCpwPJoop5r0kWrlTn2+6iJwF5wtQ0PlxAoufkjKQfKPwTwKzUig1VzFC0MCkVwgt7vrN66IBZH8AU/sZGwB0urkAAAAASUVORK5CYII=" />
                                    </defs>
                                </svg>

                                <span className="info vert-centered">{this.state.currLocation.email}</span>
                            </li>
                        </ul>
                    </section>
                </section>
            </section >
        );
    }
}