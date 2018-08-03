import React from "react";
import Navbar from "../components/Navbar"
import { Col, Row, Container } from "../../src/components/Grid"
import ContainerSpace from "../components/Containers"
import images from "../images.json"
import API from "../utils/API"
import NavHeader from "../components/NavHeader"
import { ListingDetail, DeleteBtn } from "../components/ListingDetail";


class SavedListings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images,
            listings: [],
        }
        this.deleteListing = this.deleteListing.bind(this)
    }
    deleteListing = listing_id => {
        console.log(listing_id)
        API.deleteListing(listing_id)
            .then(res => this.loadListings())
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.loadListings();
    }
    loadListings = () => {
        API.getAllListings()
            .then(res => {
                this.setState({ listings: res.data })
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }


    render() {

        return (
            <div>
                <Container fluid>
                    <Navbar
                        src={this.state.images[0].src}
                    />
                    <NavHeader />
                </Container>


                <ContainerSpace />
                <Container>

                    {this.state.listings.map(listing => {
                        return (

                            <div key={listing._id}>
                                <Row>
                                    <ListingDetail
                                        src={listing.imgSrc}
                                        id={listing._id}
                                        price={listing.price}
                                        key={listing._id}
                                        city={listing.city}
                                        address={listing.street}
                                        zipcode={listing.zipcode}
                                        description={listing.description}

                                    />
                                </Row>

                                <br />
                                <Row>
                                    <Col size="lg-2">
                                        <DeleteBtn onClick={() => this.deleteListing(listing._id)} />
                                    </Col>
                                    <Col size="lg-2">
                                    <button className="btn btn-primary">Set up Appointment</button>
                                    </Col>
                                    <Col size="lg-2">
                                    <a href="/video">Open House</a>
                                    </Col>
                                </Row>
                                <hr />


                            </div>


                        )
                    })}
                </Container>
            </div>

        )
    }

}

export default SavedListings;