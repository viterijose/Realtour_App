import React from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import ContainerSpace from "../components/Containers";
import { FlexBox, FlexRow } from "../components/FlexBox";
import ListingCard from "../components/ListingCard";
import Navbar from "../components/Navbar";
import NavHeader from "../components/NavHeader";
import images from "../images.json"
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ListingDetail, EditBtn } from "../components/ListingDetail";

class MyListings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images,
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
                <Container fluid>
                    <Navbar
                        src={this.state.images[0].src}
                    />
                    <NavHeader
                        display={this.state.display}
                        userId={this.state.userId}
                    />
                </Container>
                <ContainerSpace />
                <Container >


                    {this.state.listings.map(listing => {
                        return (
                            <div key={listing._id}>
                                <Row>
                                    <Col size="lg-12">
                                        <ListingDetail
                                            src={listing.imgSrc}
                                            id={listing._id}
                                            price={listing.price}
                                            key={listing._id}
                                            city={listing.city}
                                            address={listing.street}
                                            zipcode={listing.zipcode}
                                        />

                                    </Col>
                                </Row>
                                <br />
                                <Row>
                                    <Col size="lg-4">
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
                                        <br />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col size="lg-2">
                                        <button className="btn btn-success" onClick={this.createOpenHouse} >Submit</button>
                                    </Col>
                                    <Col size="lg-2">
                                        <EditBtn />
                                    </Col>
                                </Row>
                                <hr />
                            </div>

                        );
                    })}
                </Container>
                <ContainerSpace />
            </div>
        )
    }
}

export default MyListings;
