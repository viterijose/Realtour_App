import React from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import ContainerSpace from "../components/Containers";
import { FlexBox, FlexRow } from "../components/FlexBox"
import ListingCard from "../components/ListingCard"
import PickDateRange from '../components/PickDateRange';
import moment from 'moment';

class MyListings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            listings: [],
            user: 'andre myers',
            startDate: moment(),
            endDate: moment(),
        };
    }

    componentDidMount() {
        this.loadListings();
    }

    loadListings() {
        API.getUserListings(this.state.user)
            .then(res => {
                this.setState({ listings: [res.data] });
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    createOpenHouse() {
        API.createOpenHouse({
            id: this.state.user,
            start: this.state.startDate,
            end: this.state.endDate,
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div>
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
                    <PickDateRange />
                    <button onClick={this.createOpenHouse} />
                </Container>
            </div>
        )
    }
}

export default MyListings;
