import React from "react"; //Andre Branch
import Navbar from "../components/Navbar";
import { Container } from "../../src/components/Grid";
import ContainerSpace from "../components/Containers";//Andre Branch
import images from "../images.json";
import API from "../utils/API";//Andre Branch
import NavHeader from "../components/NavHeader";
import { SaveBtn, ListingDetail } from "../components/ListingDetail";//Andre Branch

import withAuthorization from "../components/withAuthorization";

const authCondition = (authUser) => !!authUser; //returns a true due to double exclamation mark


class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: {},
            login: false,
            display: "block",
            userId: "psmith"
        }
        this.SaveListing = this.SaveListing.bind(this)

    }
    SaveListing = listing_id => {
        // console.log(listing_id)
        API.saveListing({ listing_id })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    componentDidMount() {
       //  alert("MOUNTED " + this.props.match.params )
         //console.log(this.props);
        API.getListing(this.props.params.id)
            .then(res => {
                this.setState({ listing: res.data })
                console.log(this.state.listing.openHouse.start)
            })
            .catch(err => console.log(err))

          
    }


    render() {
        return (
            <div>
                {/* <Container fluid>
                    <Navbar
                        src={this.state.images[0].src}
                    />
                    <NavHeader
                        display={this.state.display}
                        userId={this.state.userId}
                    />
                </Container> */}


                <ContainerSpace />
                <Container>
                    <ListingDetail
                        src={this.state.listing.imgSrc}
                        id={this.state.listing._id}
                        price={this.state.listing.price}
                        key={this.state.listing._id}
                        city={this.state.listing.city}
                        address={this.state.listing.street}
                        zipcode={this.state.listing.zipcode}
                        description={this.state.listing.description}
                        openHouse={this.state.listing.openHouse}

                    />
                    <br />
                    <SaveBtn onClick={() => this.SaveListing(this.state.listing._id)} />
                </Container>
                <ContainerSpace />
            </div>

        )
    }

}

// export {
//     authCondition,
//     Listing
// }

export default withAuthorization(authCondition)(Listing);