import React from "react";
import Navbar from "../components/Navbar"
import { Col, Row, Container } from "../../src/components/Grid"
import ContainerSpace from "../components/Containers"
import images from "../images.json"
import API from "../utils/API"
import NavHeader from "../components/NavHeader"
import { ListingDetail,DeleteBtn } from "../components/ListingDetail";


class SavedListings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images,
            listings: [],
        }
        // this.deleteListing = this.deleteListing.bind(this)
    }
    // deleteListing = listing_id => {
    //     console.log(listing_id)
    // }
    componentDidMount() {
        // alert("MOUNTED")
        API.getListings()
            .then(res => {
                this.setState({ listings: res.data })
                console.log(res.data)
            })
            .catch(err => console.log(err));
        // API.getMySavedListings()
        //     .then(res => console.log(res.data)
        //         // this.setState({ listings: res.data })
        //     )
        //     .catch(err => console.log(err))
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
                <Container fluid>

                    {this.state.listings.map(listing => {
                        return(
                            <ListingDetail
                                src={listing.imgSrc}
                                id={listing._id}
                                price={listing.price}
                                key={listing._id}
                                city={listing.city}
                                address={listing.street}
                                zipcode={listing.zipcode}

                            >
                            <DeleteBtn/>
                            </ListingDetail>
                            
                        )
                        })}
                </Container>
            </div>

        )
    }

}

export default SavedListings;