import React from "react";
import API from "../utils/API";
import { Row, Col, Container } from "../components/Grid";
import ContainerSpace from "../components/Containers";
import Navbar from "../components/Navbar";
import NavHeader from "../components/NavHeader";
import images from "../images.json"
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ListingDetail, EditBtn } from "../components/ListingDetail";
import { Input, TextArea, FormBtn } from "../components/Form";
// import { Carousel, CarouselActItem } from "../components/Carousel"
import withAuthorization from '../components/withAuthorization';//Andre Branch

const authCondition = (authUser) => !!authUser;//Andre Branch

class MyListings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images,
            listings: [],
            listing: {},
            isUpdate: false,
            user: {
                "_id": "5b63aeddb13c1d098fb11ab9",
                // "firstName": "Iman",
                // "lastName": "Eltyab",
                // "userName": "pbaff",
                // "email": "andre.myers99@gmail.com",
                // "password": "Paganizonda1",
                // "ub_date": {
                //     "$date": "2018-07-25T05:22:37.361Z"
                // },
                // "__v": 0
            },
            startDate: moment(),
            endDate: moment(),
        };
        this.createOpenHouse = this.createOpenHouse.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.editListing = this.editListing.bind(this);
    }

    componentDidMount() {
        this.loadListings();
    }
    editListing = (listingId) => {
        API.getListing(listingId)
            .then(res => this.setState({ listing: res.data }))
            .catch(err => console.log(err))
        this.setState({
            isUpdate: true
        })
        console.log(this.state.listing)
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        const updatedListing = { ...this.state.listing }
        updatedListing[name] = value
        this.setState({
            listing: updatedListing
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.patchListing(this.state.listing._id, this.state.listing)
            .then(res => {
                this.setState({isUpdate: false});
                this.loadListings();
            })
            .catch (err => console.log(err))
    }

    loadListings = () => {
        API.getUserListings(this.state.user._id)
            .then(res => {
                this.setState({
                    listings: [res.data],
                    listing: res.data
                });
                console.log(res.data)
            })
            .catch(err => console.log(err));
    }

    readListing = () => (
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
                                        description={listing.description}
                                        openHouse={listing.openHouse}
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
                                    <EditBtn onClick={() => this.editListing(this.state.listing._id)} />
                                </Col>
                            </Row>
                            <hr />
                        </div>

                    );
                })}
            </Container>
            <ContainerSpace />
        </div>

    );

    updateListing = () => (
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
            <Container >
                <Row>
                    <Col size="lg-6">
                        <div className="postForm" style={{
                            width: "100%",
                            background: "rgb(217,217,217)",
                            padding: "20px",
                            border: "2px",
                            borderRadius: "2%",
                            boxShadow: "2px 2px grey"
                        }}>
                            <form>
                                <Input
                                    name="price"
                                    placeholder="Price"
                                    value={this.state.price}
                                    onChange={this.handleInputChange}
                                />
                                <br />
                                <Input
                                    name="street"
                                    placeholder="Street"
                                    value={this.state.street}
                                    onChange={this.handleInputChange}
                                />
                                <br />
                                <Input
                                    name="city"
                                    placeholder="City"
                                    value={this.state.city}
                                    onChange={this.handleInputChange}
                                />
                                <br />
                                <Input
                                    name="zipcode"
                                    placeholder="zipcode"
                                    value={this.state.zipcode}
                                    onChange={this.handleInputChange}
                                />
                                <br />
                                <TextArea
                                    value={this.state.description}
                                    onChange={this.handleInputChange}
                                    name="description"
                                    placeholder="Describe your house and the surrounding area (Optional)"
                                />
                                <br />
                                <FormBtn
                                    // disabled={!(this.state.ownerName && this.state.street)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Submit Listing
                                </FormBtn>
                            </form>
                        </div>
                    </Col>
                    <Col size="lg-6">
                        <h2>Current Listing Displayed:</h2>
                        <br/>
                        <div className="content">
                            <ul>
                                <li>
                                    <strong>Price:</strong> ${this.state.listing.price}
                                </li>

                                <li>
                                    <strong>Address:</strong> {this.state.listing.street}
                                </li>

                                <li>
                                    <strong>City:</strong> {this.state.listing.city}
                                </li>

                                <li>
                                    <strong>Zipcode:</strong> {this.state.listing.zipcode}
                                </li>


                                <li>
                                    <strong>Open House:</strong> {moment(this.state.listing.openHouse.start).format('lll')} to {moment(this.state.listing.openHouse.end).format('lll')}
                                </li>

                                <li>
                                    <strong>Description:</strong>
                                    <p style={{ textAlign: "justify" }}>{this.state.listing.description}</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>

            </Container>
            <ContainerSpace />
        </div>

    )

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

    // render() {
    //     return (
    //         <div>
    //             <Container fluid>
    //                 <Navbar
    //                     src={this.state.images[0].src}
    //                 />
    //                 <NavHeader
    //                     display={this.state.display}
    //                     userId={this.state.userId}
    //                 />
    //             </Container>
    //             <ContainerSpace />
    //             <Container >


    //                 {this.state.listings.map(listing => {
    //                     return (
    //                         <div key={listing._id}>
    //                             <Row>
    //                                 <Col size="lg-12">
    //                                     <ListingDetail
    //                                         src={listing.imgSrc}
    //                                         id={listing._id}
    //                                         price={listing.price}
    //                                         key={listing._id}
    //                                         city={listing.city}
    //                                         address={listing.street}
    //                                         zipcode={listing.zipcode}
    //                                     />

    //                                 </Col>
    //                             </Row>
    //                             <br />
    //                             <Row>
    //                                 <Col size="lg-4">
    //                                     From:
    //                        <DatePicker
    //                                         selected={this.state.startDate}
    //                                         selectsStart
    //                                         showTimeSelect
    //                                         timeFormat="HH:mm"
    //                                         timeIntervals={15}
    //                                         dateFormat="LLL"
    //                                         timeCaption="time"
    //                                         startDate={this.state.startDate}
    //                                         endDate={this.state.endDate}
    //                                         onChange={this.handleChangeStart}
    //                                     />
    //                                     To:
    //                       <DatePicker
    //                                         selected={this.state.endDate}
    //                                         selectsEnd
    //                                         showTimeSelect
    //                                         timeFormat="HH:mm"
    //                                         timeIntervals={15}
    //                                         dateFormat="LLL"
    //                                         timeCaption="time"
    //                                         startDate={this.state.startDate}
    //                                         endDate={this.state.endDate}
    //                                         onChange={this.handleChangeEnd}
    //                                     />
    //                                     <br />
    //                                 </Col>
    //                             </Row>
    //                             <Row>
    //                                 <Col size="lg-2">
    //                                     <button className="btn btn-success" onClick={this.createOpenHouse} >Submit</button>
    //                                 </Col>
    //                                 <Col size="lg-2">
    //                                     <EditBtn onClick={() => this.editListing(this.state.listing._id)}/>
    //                                 </Col>
    //                             </Row>
    //                             <hr />
    //                         </div>

    //                     );
    //                 })}
    //             </Container>
    //             <ContainerSpace />
    //         </div>
    //     )
    // }

    render() {
        if (!this.state.isUpdate) return this.readListing();
        else return this.updateListing();
    }
}

export default withAuthorization(authCondition)(MyListings);
