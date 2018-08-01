import React from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { FormBtn, Input } from "../components/Form";
import Navbar from "../components/Navbar";
import images from "../images.json";
import ContainerSpace from "../components/Containers";


class PostListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ownerName: "",
            street: "",
            city: "",
            state: "",
            zipcode: "",
            buildingType: "",
            price: "",
            date: new Date(Date.now()),
            images
        }
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
            ownerName: this.state.ownerName,
            street: this.state.street,
            city: this.state.city,
            zipcode: this.state.zipcode,
            date: this.state.date,
            price: this.state.price,
            img:this.state.photo
        })
            .then(res => {
                console.log(res.data)
                this.setState({
                    ownerName: "",
                    street: "",
                    city: "",
                    zipcode: "",
                    date: "",
                    price: "",
                    img:""
                })
            })
            .catch(err => console.log(err));
    }
    render() {
        return (
            <div>
                <Container fluid>
                    <Navbar
                        src={this.state.images[0].src}
                    />
                </Container>

                <ContainerSpace />

                <Container fluid>
                    <Row>
                        <Col size="lg-4">
                        </Col>

                        <Col size="lg-4">
                            <form>
                                <Input
                                    name="ownerName"
                                    placeholder="Owner"
                                    value={this.state.ownerName}
                                    onChange={this.handleInputChange}
                                />
                                 <Input
                                    name="price"
                                    placeholder="Price"
                                    value={this.state.price}
                                    onChange={this.handleInputChange}
                                />
                                <Input
                                    name="street"
                                    placeholder="Street"
                                    value={this.state.street}
                                    onChange={this.handleInputChange}
                                />
                                <Input
                                    name="city"
                                    placeholder="City"
                                    value={this.state.city}
                                    onChange={this.handleInputChange}
                                />
                                <Input
                                    name="zipcode"
                                    placeholder="zipcode"
                                    value={this.state.zipcode}
                                    onChange={this.handleInputChange}
                                />
                                <Input
                                    name="photo"
                                    type="file"
                                    accept="image/*"
                                    onChange={this.handleInputChange}
                                />
                                <FormBtn
                                    disabled={!(this.state.ownerName && this.state.street)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Submit Listing
                                </FormBtn>
                            </form>
                        </Col>

                        <Col size="lg-4">
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default PostListing;