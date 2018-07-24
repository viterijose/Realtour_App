import React from "react";
import Navbar from "../components/Navbar"
import { Col, Row, Container } from "../../src/components/Grid"
import ContainerSpace from "../components/Containers"
import FlexBox from "../components/FlexBox"
import ListingCard from "../components/ListingCard"
import images from "../images.json"
import API from "../utils/API"


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images,
            listings: []

        }
    }

    componentDidMount() {
        // alert("MOUNTED")
        this.loadListings();
    }

    loadListings = () => {
        API.getListings()
            .then(res =>{
                this.setState({ listings: res.data });
                console.log(res.data)
            }
            )
            .catch(err => console.log(err));
        // console.log(this.state.listings)

    }
    render() {
        return (
            <div>
                <Container fluid>
                    <Navbar
                        src={this.state.images[0].src}
                    />
                </Container>
                <ContainerSpace />
                <Container fluid>
                    <FlexBox>
                        {/* {this.state.listings.length ? ()} */}
                        {this.state.listings.map(listing => {
                            return (
                                <ListingCard
                                    src={listing.imgSrc}
                                    id={listing._id}
                                    price={listing.price}
                                    key={listing._id}
                                    city={listing.city}
                                    address={listing.street}
                                    zipcode={listing.zipcode}
                                />
                            );
                        })}
                    </FlexBox>
                </Container>
            </div>

        )
    }

}

export default Home;