import React from "react";
import Navbar from "../components/Navbar"
import { Col, Row, Container } from "../../src/components/Grid"
import ContainerSpace from "../components/Containers"
import { FlexBox, FlexRow } from "../components/FlexBox"
import ListingCard from "../components/ListingCard"
import images from "../images.json"
import API from "../utils/API"
import NavHeader from "../components/NavHeader"

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images,
            listings: [],
            login:false,
            display:"block",
            userId:"psmith"

        }
    }

    componentDidMount() {
        // alert("MOUNTED")
        this.loadListings();
    }

    loadListings = () => {
        API.getAllListings()
            .then(res => {
                this.setState({ listings: res.data });
                console.log(res.data)
            }
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                {/* <Listing display={this.state.display} userId={this.state.userId}/> */}
                <Container fluid>
                    <Navbar
                        src={this.state.images[0].src}
                    />
                    <NavHeader
                        display={this.state.display}
                        userId={this.state.userId}
                    />
                </Container>
                
                
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
            </div>

        )
    }

}

export default Home;