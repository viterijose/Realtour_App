import React from "react"; //Andre Branch
import { Container } from "../../src/components/Grid";
import ContainerSpace from "../components/Containers";//Andre Branch
import API from "../utils/API";//Andre Branch
import { SaveBtn, ListingDetail } from "../components/ListingDetail";//Andre Branch
// import PropTypes from "prop-types";
import { Carousel, CarouselItem, CarouselActItem } from "../components/Carousel"

import withAuthorization from "../components/withAuthorization";

const authCondition = (authUser) => !!authUser; //returns a true due to double exclamation mark

class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: {},
            userId: "",
            savedListings: [],
            disable: false,
            mount: false
        }
        this.SaveListing = this.SaveListing.bind(this)

    }
    SaveListing = (savedListings, userId) => {
        // console.log(userId)
        API.saveListing(userId, { savedListings })
            .then(res => {
                this.setState({
                    disable: true
                })
                console.log(res.data)
            }
            )
            .catch(err => console.log(err))
    }

    componentDidMount() {
        // ------------------- IMPLEMENT POPULATE ON DB ----------------------

        const { params } = this.props
        API.getUser(params.userData.email)
            .then(res => {
                // console.log(res.data[0])
                this.setState({
                    userId: res.data[0]._id,
                    savedListings: res.data[0].savedListings
                })

            })
            .catch(err => console.log(err))
        API.getListing(params.match.params.id)
            .then(res => {
                console.log(res.data)
                this.setState({
                    listing: res.data,
                    mount: true
                })
                // console.log(this.state.userId)
                // console.log(this.state.listing.owner)
                if (this.state.listing.owner === this.state.userId) {
                    this.setState({ disable: true })
                    // console.log("TRUE")
                } else {
                    if (this.state.savedListings.indexOf(this.state.listing._id) < 0) {
                        this.setState({ disable: false })
                    }
                    else {
                        this.setState({ disable: true })
                    }
                }

            })
            .catch(err => console.log(err))

    }


    render() {
        const {
            listing,
            userId,
            disable
        } = this.state
        if (this.state.mount) {
            console.log(listing.img)
            return (
                <div>
                    <ContainerSpace />
                    <Container>

                        <ListingDetail
                            // src={listing.img}
                            id={listing._id}
                            price={listing.price}
                            key={listing._id}
                            city={listing.city}
                            address={listing.street}
                            zipcode={listing.zipcode}
                            description={listing.description}
                            openHouse={listing.openHouse}

                        >
                            <Carousel>
                                <CarouselActItem src={listing.img[0]} name={"first-slide"} />
                                {/* {{if (listing.img) {
                                    return
                                }}} */}
                                <CarouselItem src={listing.img[1]} name={"second-slide"} />
                                <CarouselItem src={listing.img[2]} name={"third-slide"} />
                                <CarouselItem src={listing.img[3]} name={"fourth-slide"} />
                                <CarouselItem src={listing.img[4]} name={"fifth-slide"} />
                                <CarouselItem src={listing.img[5]} name={"fifth-slide"} />
                            </Carousel>
                            {/* <CarouselItem src={src} name={i+"slide"}/> */}
                            {/* {listing.img.map((src,i)=>{
                            // if(i>=1){
                                <CarouselItem src={src} name={i+"slide"}/>
                            // }
                        })} */}
                        </ListingDetail>
                        <br />

                        <SaveBtn onClick={() => this.SaveListing(listing._id, userId)} disable={disable} />
                    </Container>
                    <ContainerSpace />
                </div>

            )
        } else {
            return (<ContainerSpace />)
        }

    }

}
export default withAuthorization(authCondition)(Listing);