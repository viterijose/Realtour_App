import React from "react";
import { Container } from "../../src/components/Grid"
import ContainerSpace from "../components/Containers"
import API from "../utils/API"
import { ListingDetail, DeleteBtn } from "../components/ListingDetail";
<<<<<<< HEAD
import withAuthorization from '../components/withAuthorization';
=======
import {Appointment} from "../components/Appointment";

import withAuthorization from '../components/withAuthorization';

const authCondition = (authUser) => !!authUser;
>>>>>>> joseBranch

const authCondition = (authUser) => !!authUser;

class SavedListings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [],
            isAppointment: false,
            userId:"5b63aeddb13c1d098fb11ab9"
        }
        this.deleteListing = this.deleteListing.bind(this)
        // this.setAppointment =  this.setAppointment.bind(this)
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

    deleteListing = listing_id => {
        console.log(listing_id)
        API.deleteListing(listing_id)
            .then(res => this.loadListings())
            .catch(err => console.log(err))
    }

    // setAppointment = () =>(

    // )


    render() {

        return (
            <div>
<<<<<<< HEAD
=======
                {/* <Container fluid>
                    <Navbar
                        src={this.state.images[0].src}
                    />
                    <NavHeader />
                </Container> */}


>>>>>>> joseBranch
                <ContainerSpace />
                <Container>

                    {this.state.listings.map(listing => {
                        // console.log(listing.openHouse.start)
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
                                        // openHouse = {listing.openHouse.start}

                                    />
                                </Row>

                                <br />
                                <Row>
                                    <Col size="lg-2">
                                        <DeleteBtn onClick={() => this.deleteListing(listing._id)} />
                                    </Col>  
                                    <Col size = "lg-4">
                                        <Appointment listingId = {listing._id} isAppointmentSet ={listing.hasAppointments} owner={listing.owner} userId={this.state.userId}/>
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

export default withAuthorization(authCondition)(SavedListings);