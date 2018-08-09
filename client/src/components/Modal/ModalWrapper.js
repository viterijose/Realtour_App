import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
// import ModalSignIn from "./ModalSignIn"
import { Col, Row, Container } from "../Grid";
import SignOutButton from '../SignOutButton';


// import React from "react";
import { FormBtn, Input } from "../Form"
// import { withRouter } from 'react-router-dom';
// import { RegisterLink } from "../../pages/Register";
import { auth } from '../../firebase';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
ReactModal.setAppElement(document.getElementById('.modal'));

class ModalWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      email: "",
      password: "",
      error: null,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this)
  }

  handleInputChange = event => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }
  handleLoginSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    // const { history } = this.props;
    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        // history.push('/register');
        this.close();
      })
      .catch(error => this.setState({ error: error }))
      this.handleCloseModal()

  }


  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const { email, password, error } = this.state;
    const isInvalid = password === "" || email === "";

    return (
      <div id="modal">
        {this.props.auth === false && <button onClick={this.handleOpenModal} className="btn btn-primary">Sign In</button>}
        {/* {this.props.auth === true && <SignOutButton />} */}
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={customStyles}
          ariaHideApp={false}
        >
          <Container fluid>
            <Row style={{ width: "80%", height: "50%" }}>
              <Col size="lg-9">
                <h5>RealTour</h5>
              </Col>
              <Col size="lg-3">
                <button onClick={this.handleCloseModal} className="btn btn-dark">x</button>
              </Col>
            </Row>
            <br />
            <Row>
              <form>

                <Input
                  value={this.state.username}
                  onChange={this.handleInputChange}
                  name="email"
                  placeholder="Email"
                />
                <hr />
                <Input
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                <hr />
                <FormBtn
                  className="btn btn-success"
                  disabled={isInvalid}
                  onClick={this.handleLoginSubmit}
                >
                  Login
                </FormBtn>
                {error && <p>{error.message}</p>}
              </form>
              {/* <ModalSignIn /> */} 
            </Row>
          </Container>
        </ReactModal>
      </div>
    );
  }
}

ModalWrapper.props = {
  children: PropTypes.node,
  disable: PropTypes.bool
}

export default ModalWrapper;
