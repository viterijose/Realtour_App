import React from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { FormBtn, Input, FormContainer } from "../components/Form";
// import Navbar from "../components/Navbar";
import images from "../images.json";
import ContainerSpace from "../components/Containers";
import { auth } from '../firebase';
import { Link, withRouter, } from 'react-router-dom';

const RegisterPage = ({ history }) =>
    <div>
        <Register history={history} />
    </div>

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            userName: "",
            email: "",
            password: "",
            passwordConfirm: "",
            error: null,
            date: new Date(Date.now()),
            images
        }
    }

    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        })
    }

    handleFormSubmit = event => {
        const {
            firstName,
            lastName,
            userName,
            email,
            password,
            date,
        } = this.state;

        const { history } = this.props;

        event.preventDefault();
        // console.log(this.state.ownerName)
        // if (this.state.password === this.passwordCheck) {

        API.registerUser({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: password,
            date: date
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

        auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(authUser => {
                console.log(authUser);
                history.push('/')
            })
            .catch(err => this.setState({ error: err }));
    }
    render() {

        const {
            firstName,
            lastName,
            userName,
            email,
            password,
            passwordConfirm,
            error,
        } = this.state;

        const isInvalid = password !== passwordConfirm || password === "" || email === "" || userName === "";

        return (
            <div>

                <ContainerSpace />

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
                                        value={firstName}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <Input
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={lastName}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <Input
                                        name="userName"
                                        placeholder="Username"
                                        value={userName}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <Input
                                        name="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <Input
                                        name="password"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={this.handleInputChange}
                                    />
                                    <Input
                                        name="passwordConfirm"
                                        type="password"
                                        placeholder="Confirm password"
                                        value={passwordConfirm}
                                        onChange={this.handleInputChange}
                                    />
                                    <br />
                                    <FormBtn
                                        disabled={!(this.state.firstName && this.state.lastName && this.state.userName && this.state.email && this.state.password)}
                                        onClick={this.handleFormSubmit}
                                    >
                                        Submit
                                </FormBtn>

                                    {error && <p>{error.message}</p>}
                                </form>
                            </FormContainer>
                        </Col>

                        <Col size="lg-4">
                        </Col>
                    </Row>
                </Container>
                {/* <p>{this.state.ownerName} {this.state.street} {this.state.city} {this.state.zipcode}</p> */}
            </div>
        )
    }
}
const RegisterLink = () =>
    <p>
        Don't have an account?
    {' '}
        <Link to={'/register'}>Sign Up</Link>
    </p>
export default withRouter(RegisterPage);
export {Register,RegisterLink};
