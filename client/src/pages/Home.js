import React from "react";
import Navbar from "../components/Navbar"
import { Container } from "../../src/components/Grid"
import ContainerSpace from "../components/Containers"
import { FlexBox, FlexRow } from "../components/FlexBox"
import ListingCard from "../components/ListingCard"
import images from "../images.json"
import API from "../utils/API"
import NavHeader from "../components/NavHeader"
import { SearchInput, SearchBtn, SearchContainer } from "../components/SearchBar"
import { AboutUs } from "../components/AboutUs"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images,
            listings: [],
            login: false,
            display: "block",
            userId: "psmith",
            searchVal: ""

        }
    }

    componentDidMount() {

        this.loadListings();
    }
    searchFormSubmit = () => {
        // alert("Searching..." + this.state.searchVal)
        if (/\d/.test(this.state.searchVal)) {
            // const data = this.state.searchVal
            API.searchByZipcode({ data: this.state.searchVal })
                .then(res => this.setState({
                    listings: res.data,
                    searchVal: ""
                }))
                .catch(err => console.log(err))
        } else {
            // let city = this.state.searchVal.toUpperCase() -----------------for better features and eliminating bugs
            API.searchByCity({ data: this.state.searchVal })
                .then(res => this.setState({
                    listings: res.data,
                    searchVal: ""
                }))
                .catch(err => console.log(err))
        }
    }

    loadListings = () => {
        API.getAllListings()
            .then(res => {
                this.setState({ listings: res.data });
                // console.log(res.data)
            }
            )
            .catch(err => console.log(err));
    }
    handleInputChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }
    render() {
        return (
            <div>
                {/* <Container fluid> */}
                {/* <Navbar
                    src={this.state.images[0].src}
                />
                <NavHeader
                    display={this.state.display}
                    userId={this.state.userId}
                /> */}
                {/* </Container> */}


                {/* <ContainerSpace /> */}

                <SearchContainer >
                    <SearchInput
                        value={this.state.searchVal}
                        onChange={this.handleInputChange}
                        name="searchVal"
                    />
                    <SearchBtn
                        onClick={() => this.searchFormSubmit()}
                    />
                </SearchContainer>

                <ContainerSpace />

                <Container fluid>
                    <FlexBox>
                        {this.state.listings.map(listing => {
                            return (
                                <FlexRow id={listing._id} key={listing._id}>
                                    <ListingCard
                                        src={listing.imgSrc}
                                        id={listing._id}
                                        price={listing.price}
                                        key={listing._id}
                                        city={listing.city}
                                        address={listing.street}
                                        zipcode={listing.zipcode}
                                        openHouse={listing.openHouse}
                                    />
                                </FlexRow>
                            );
                        })}
                    </FlexBox>

                </Container>
                <ContainerSpace />
                {/* <Container> */}
                    <AboutUs src={this.state.images[0].src} />
                {/* </Container> */}
                <ContainerSpace />
            </div>

        )
    }

}

export default Home;