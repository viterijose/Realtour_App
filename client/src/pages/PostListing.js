import React from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { FormBtn, Input, TextArea } from "../components/Form";
import { Carousel, CarouselItem, CarouselActItem } from "../components/Carousel"
// import Navbar from "../components/Navbar";
// import NavHeader from "../components/NavHeader"
import images from "../images.json";
import ContainerSpace from "../components/Containers";
import withAuthorization from '../components/withAuthorization';




const authCondition = (authUser) => !!authUser;//Andre Branch


class PostListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
            buildingType: "",
            price: "",
            description: "",
            date: new Date(Date.now()),
            images
        }
    }
    componentDidMount() {
        const { params } = this.props
        console.log(params.match.params.user)
        this.setState({ owner: params.match.params.user })
    }

    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        event.preventDefault();

        API.postListing({
            owner: this.state.owner,
            street: this.state.street,
            city: this.state.city,
            zipcode: this.state.zipcode,
            date: this.state.date,
            price: this.state.price,
            img: images[5].src,
            description: this.state.description
        })
            .then(res => {
                API.saveListing(this.state.owner, { postedListings: res.data._id })
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err))
                // console.log(res.data)
                this.setState({
                    owner: "",
                    street: "",
                    city: "",
                    zipcode: "",
                    date: "",
                    price: "",
                    img: "",
                    description: "",
                })
            })
            .catch(err => console.log(err));
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

                <Container fluid>
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
                                    {/* <Input
                                        name="ownerName"
                                        placeholder="Owner"
                                        value={this.state.ownerName}
                                        onChange={this.handleInputChange}
                                    />
                                    <br /> */}
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
                                    {/* <Input
                                        name="photo"
                                        type="file"
                                        accept="image/*"
                                        onChange={this.handleInputChange}
                                    />
                                    <br /> */}
                                    <TextArea
                                        value={this.state.description}
                                        onChange={this.handleInputChange}
                                        name="description"
                                        placeholder="Describe your house and the surrounding area (Optional)"
                                    />
                                    <br />
                                    <FormBtn
                                        disabled={!(this.state.street)}
                                        onClick={this.handleFormSubmit}
                                    >
                                        Submit Listing
                                </FormBtn>
                                </form>
                            </div>
                        </Col>

                        <Col size="lg-6">
                            <Carousel>
                                <CarouselActItem src={this.state.images[1].src} name={"First-slide"}
                                />
                                <CarouselItem src={this.state.images[2].src} name={"Second-slide"}
                                />
                                <CarouselItem src={this.state.images[3].src} name={"third"}
                                />
                            </Carousel>

                        </Col>

                    </Row>
                </Container>
            </div>
        )
    }
}

export default withAuthorization(authCondition)(PostListing);