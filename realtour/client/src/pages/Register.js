import React from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { FormBtn, Input,FormContainer } from "../components/Form";
import Navbar from "../components/Navbar";
import images from "../images.json";
import ContainerSpace from "../components/Containers"

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            // passwordCheck: "",
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
        // console.log(this.state.ownerName)
        // if (this.state.password === this.passwordCheck) {
            API.registerUser({
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                userName: this.state.userName,
                email: this.state.email,
                password: this.state.password,
                date: this.state.date
            })
                .then(res => console.log(res.data))
                .catch(err => console.log(err));
        // }else{
        //     this.setState({
        //         password:"",
        //         passwordCheck:""
        //     })
        //     return alert("Passwords must match")
     
        // }
    }
    render() {
        return (
            <div>
                <Container fluid>
                    <Navbar
                        src={this.state.images[0].src}
                    />

                </Container>

                <ContainerSpace/>
                
                <Container fluid>
                    <Row>
                        <Col size="lg-4">
                        </Col>

                        <Col size="lg-4">
                        <FormContainer>
                            <form>
                                <Input
                                    name="firstName"
                                    placeholder="First Name"
                                    value={this.state.firstName}
                                    onChange={this.handleInputChange}
                                />
                                <br/>
                                <Input
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={this.state.lastName}
                                    onChange={this.handleInputChange}
                                />
                                <br/>
                                <Input
                                    name="userName"
                                    placeholder="Username"
                                    value={this.state.userName}
                                    onChange={this.handleInputChange}
                                />
                                <br/>
                                <Input
                                    name="email"
                                    placeholder="Email"
                                    value={this.state.email}
                                    onChange={this.handleInputChange}
                                />
                                <br/>
                                <Input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handleInputChange}
                                />
                                {/* <Input
                                    name="passwordCheck"
                                    type="password"
                                    placeholder="Verify Password"
                                    value={this.state.passwordCheck}
                                    onChange={this.handleInputChange}
                                /> */}
                                <br/>
                                <FormBtn
                                    disabled={!(this.state.firstName && this.state.lastName && this.state.userName && this.state.email && this.state.password)}
                                    onClick={this.handleFormSubmit}
                                >
                                    Submit Listing
                                </FormBtn>

                            </form>
                            </FormContainer>
                        </Col>

                        <Col size="lg-4">
                        </Col>
                    </Row>
                </Container>
                <p>{this.state.ownerName} {this.state.street} {this.state.city} {this.state.zipcode}</p>
            </div>
        )
    }
}

export default Register;