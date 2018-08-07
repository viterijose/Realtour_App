import React from "react"; //Andre Branch
import { Container } from "../../src/components/Grid";
import ContainerSpace from "../components/Containers";//Andre Branch
import API from "../utils/API";//Andre Branch
import { SaveBtn, ListingDetail } from "../components/ListingDetail";//Andre Branch
// import PropTypes from "prop-types";

import withAuthorization from "../components/withAuthorization";

const authCondition = (authUser) => !!authUser; //returns a true due to double exclamation mark

class Listing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listing: {},
            userId: "",
        }
        this.SaveListing = this.SaveListing.bind(this)

    }
    SaveListing = (savedListings, userId) => {
        // console.log(userId)
        API.saveListing(userId, { savedListings })
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

    componentDidMount() {
        const { params } = this.props
        API.getUser(params.userData.email)
            .then(res => this.setState({ userId: res.data[0]._id }))
            .catch(err => console.log(err))
        API.getListing(params.match.params.id)
            .then(res => {
                this.setState({ listing: res.data })
            })
            .catch(err => console.log(err))
    }


    render() {
        const {
            listing,
            userId
        } = this.state
        return (
            <div>
                <ContainerSpace />
                <Container>
                    <ListingDetail
                        src={listing.imgSrc}
                        id={listing._id}
                        price={listing.price}
                        key={listing._id}
                        city={listing.city}
                        address={listing.street}
                        zipcode={listing.zipcode}
                        description={listing.description}
                        openHouse={listing.openHouse}
                    />
                    <br />
                    <SaveBtn onClick={() => this.SaveListing(listing._id, userId)} />
                </Container>
                <ContainerSpace />
            </div>

        )
    }

}
export default withAuthorization(authCondition)(Listing);