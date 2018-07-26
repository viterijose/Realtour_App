import React from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import Navbar from "../components/Navbar";
import ContainerSpace from "../components/Containers";
import { FlexBox, FlexRow } from "../components/FlexBox"
import ListingCard from "../components/ListingCard"
import CreateOpenHouse from '../components/CreateOpenHouse';

class MyListings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            listings: [],
            user: 'andre myers'
        };
    }

    componentDidMount() {
        this.loadListings();
    }

    loadListings() {
        API.getUserListings(this.state.user)
            .then(res => {
                this.setState({ listings: res.data });
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <ContainerSpace />

              
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
                                    />
                                </FlexRow>
                            );
                        })}
                    </FlexBox>
                    <CreateOpenHouse />
                </Container>
            </div>
        )
    }
}

export default MyListings;
