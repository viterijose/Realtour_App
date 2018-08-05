import React from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
<<<<<<< HEAD
import { FormBtn, Input, FormContainer, } from "../components/Form";
=======
import { FormBtn, Input, FormContainer } from "../components/Form";
// import Navbar from "../components/Navbar";
>>>>>>> joseBranch
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
<<<<<<< HEAD
        API.registerUser({
            firstName: firstName,
            lastName: lastName,
            userName: userName,
            email: email,
            password: password,
            date: date,
=======
        const { history } = this.props;
        API.registerUser({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            userName: this.state.userName,
            email: this.state.email,
            password: this.state.password,
            date: this.state.date
>>>>>>> joseBranch
        })
            .then(res => console.log(res.data))
            .catch(err => console.log(err));

<<<<<<< HEAD
        auth.doCreateUserWithEmailAndPassword(email, password)
=======
        auth.doCreateUserWithEmailAndPassword(this.state.email, this.state.password)
>>>>>>> joseBranch
            .then(authUser => {
                console.log(authUser);
                history.push('/myListings')
            })
            .catch(err => this.setState({ error: err }));
<<<<<<< HEAD
        // }else{
        //     this.setState({
        //         password:"",
        //         passwordCheck:""
        //     })
        //     return alert("Passwords must match")

        // }
    }
    render() {
=======
    }
    render() {

>>>>>>> joseBranch
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
<<<<<<< HEAD
                <ContainerSpace />

=======
                {/* <Container fluid>
                    <Navbar
                        src={this.state.images[0].src}
                    />

                </Container> */}

                <ContainerSpace />

>>>>>>> joseBranch
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
<<<<<<< HEAD
                                    {/* <Input
                                    name="passwordCheck"
                                    type="password"
                                    placeholder="Verify Password"
                                    value={this.state.passwordCheck}
                                    onChange={this.handleInputChange}
                                /> */}
                                    <br />
                                    <FormBtn
                                        disabled={isInvalid}
                                        onClick={this.handleFormSubmit}
                                    >
                                        Submit
                                    </FormBtn>
=======
                                    <br />
                                    <FormBtn
                                        disabled={!(this.state.firstName && this.state.lastName && this.state.userName && this.state.email && this.state.password)}
                                        onClick={this.handleFormSubmit}
                                    >
                                        Submit
                                </FormBtn>

>>>>>>> joseBranch
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
<<<<<<< HEAD

const RegisterLink = () =>
    <p>
        Don't have an account?
        {' '}
        <Link to={'/register'}>Sign Up</Link>
    </p>

export default withRouter(RegisterPage);
export { Register, RegisterLink };
=======
const RegisterLink = () =>
    <p>
        Don't have an account?
    {' '}
        <Link to={'/register'}>Sign Up</Link>
    </p>
export default withRouter(RegisterPage);
export {Register,RegisterLink};
>>>>>>> joseBranch
