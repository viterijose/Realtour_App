import React from "react";
import { Container } from "../../src/components/Grid"
import ContainerSpace from "../components/Containers"
import API from "../utils/API"
import { ListingDetail, DeleteBtn } from "../components/ListingDetail";
import withAuthorization from '../components/withAuthorization';

const authCondition = (authUser) => !!authUser;

class SavedListings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
                <ContainerSpace />
                <Container fluid>

                    {this.state.listings.map(listing => {
                        return (
                            <div key={listing._id}>
                                <ListingDetail
                                    src={listing.imgSrc}
                                    id={listing._id}
                                    price={listing.price}
                                    key={listing._id}
                                    city={listing.city}
                                    address={listing.street}
                                    zipcode={listing.zipcode}

                                />

                                <DeleteBtn onClick = {() => this.deleteListing(listing._id)}/>
                            </div>

                        )
                    })}
                </Container>
            </div>

        )
    }

}

export default withAuthorization(authCondition)(SavedListings);