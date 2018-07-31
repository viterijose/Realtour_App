import React from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import ContainerSpace from "../components/Containers";
import { FlexBox, FlexRow } from "../components/FlexBox"
import ListingCard from "../components/ListingCard"
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

class MyListings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            listings: [],
            user: {
                "_id": "5b58091d48a774316e702636",
                "firstName": "Andre",
                "lastName": "Myers",
                "userName": "pbaff",
                "email": "andre.myers99@gmail.com",
                "password": "Paganizonda1",
                "ub_date": {
                    "$date": "2018-07-25T05:22:37.361Z"
                },
                "__v": 0
            },
            startDate: moment(),
            endDate: moment(),
        };
        this.createOpenHouse = this.createOpenHouse.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }

    componentDidMount() {
        this.loadListings();
    }

    loadListings = () => {
        API.getUserListings(this.state.user._id)
            .then(res => {
                this.setState({ listings: [res.data] });
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    createOpenHouse() {
        API.createOpenHouse({
            id: this.state.user._id,
            start: this.state.startDate,
            end: this.state.endDate,
        })
            .catch(err => console.log(err));
    }

    handleChangeStart(date) {
        this.setState({
            startDate: date
        });
    }

    handleChangeEnd(date) {
        this.setState({
            endDate: date
        });
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
                    From:
                    <DatePicker
                        selected={this.state.startDate}
                        selectsStart
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="LLL"
                        timeCaption="time"
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeStart}
                    />
                    To:
                    <DatePicker
                        selected={this.state.endDate}
                        selectsEnd
                        showTimeSelect
                        timeFormat="HH:mm"
                        timeIntervals={15}
                        dateFormat="LLL"
                        timeCaption="time"
                        startDate={this.state.startDate}
                        endDate={this.state.endDate}
                        onChange={this.handleChangeEnd}
                    />
                    <button onClick={this.createOpenHouse} />
                </Container>
            </div>
        )
    }
}

export default MyListings;
