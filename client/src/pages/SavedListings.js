import React from "react";
import { Row, Col, Container } from "../../src/components/Grid"
import ContainerSpace from "../components/Containers"
import API from "../utils/API"
import { ListingDetail, DeleteBtn } from "../components/ListingDetail";
import { Appointment } from "../components/Appointment";
import { Carousel, CarouselItem, CarouselActItem } from "../components/Carousel"

import withAuthorization from '../components/withAuthorization';

const authCondition = (authUser) => !!authUser;

class SavedListings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listings: [],
            isAppointment: false,
            userId: "",
            savedListings: []
        }
        this.deleteListing = this.deleteListing.bind(this)
        // this.setAppointment =  this.setAppointment.bind(this)
    }
    componentDidMount() {
        const { params } = this.props
        // console.log(params)
        // this.setState({userId:this.props.params.id})
        this.loadListings(params.match.params.user);
    }
    loadListings = (userId) => {
        console.log(userId)
        this.setState({ userId: userId })
        API.getMySavedListingsId(userId)
            .then(res => {
                let listingInfo = []
                // this.setState({ listings: res.data })
                // console.log(res.data.savedListings)
                res.data.savedListings.forEach(element => {
                    // console.log(element._id)

                    listingInfo.push(element._id)
                    // console.log(listingInfo)
                });
                this.setState({
                    listings: res.data.savedListings,
                    savedListings: listingInfo
                })

            })
            .catch(err => console.log(err));
    }

    deleteListing = listingId => {
        console.log(listingId)
        // let position = this.state.savedListings.indexOf(listing_id)
        // // console.log(position)
        // if(~position) this.state.savedListings.splice(position,1);
        // console.log(this.state.savedListings)
        // console.log(listing_id.toString())
        API.deleteListing(this.state.userId, { listingId })
            .then(res => this.loadListings(this.state.userId))
            .catch(err => console.log(err))
    }

    render() {

        return (
            <div>
                {/* <Container fluid>
                    <Navbar
                        src={this.state.images[0].src}
                    />
                    <NavHeader />
                </Container> */}


                <ContainerSpace />
                <Container>

                    {this.state.listings.map(listing => {
                        // console.log(listing.openHouse.start)
                        return (

                            <div key={listing._id}>
                                <Row>
                                    <ListingDetail
                                        // src={listing.imgSrc}
                                        id={listing._id}
                                        price={listing.price}
                                        key={listing._id}
                                        city={listing.city}
                                        address={listing.street}
                                        zipcode={listing.zipcode}
                                        description={listing.description}
                                    // openHouse = {listing.openHouse.start}

                                    >
                                    {listing.img && <Carousel key={listing._id}>
                                            <CarouselActItem src={listing.img[0]} name={"first-slide"} />
                                            <CarouselItem src={listing.img[1]} name={"second-slide"} />
                                            <CarouselItem src={listing.img[2]} name={"third-slide"} />
                                            <CarouselItem src={listing.img[3]} name={"fourth-slide"} />
                                            <CarouselItem src={listing.img[4]} name={"fifth-slide"} />
                                            <CarouselItem src={listing.img[5]} name={"fifth-slide"} />
                                        </Carousel>}
                                        {/* <Carousel key={listing._id}>
                                            <CarouselActItem src={listing.img[0]} name={"first-slide"} />
                                            <CarouselItem src={listing.img[1]} name={"second-slide"} />
                                            <CarouselItem src={listing.img[2]} name={"third-slide"} />
                                            <CarouselItem src={listing.img[3]} name={"fourth-slide"} />
                                            <CarouselItem src={listing.img[4]} name={"fifth-slide"} />
                                            <CarouselItem src={listing.img[5]} name={"fifth-slide"} />
                                        </Carousel> */}
                                    </ListingDetail>
                                </Row>

                                <br />
                                <Row>
                                    <Col size="lg-2">
                                        <DeleteBtn onClick={() => this.deleteListing(listing._id)} />
                                    </Col>
                                    <Col size="lg-4">
                                        <Appointment listingId={listing._id} isAppointmentSet={listing.hasAppointments} owner={listing.owner} userId={this.state.userId} />
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