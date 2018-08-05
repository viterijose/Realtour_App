import React from "react";
import ReactModal from "react-modal";
import PropTypes from "prop-types";
import ModalSignIn from "./ModalSignIn"
import { Col, Row, Container } from "../Grid"

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
class ModalWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleOpenModal} className="btn btn-primary">Sign In</button>
        <ReactModal
          isOpen={this.state.showModal}
          contentLabel="Minimal Modal Example"
          style={customStyles}
        >
          <Container fluid>
            <Row style = {{width:"80%",height:"50%"}}>
              <Col size="lg-9">
              <h5>RealTour</h5>
              </Col>
              <Col size="lg-3">
                <button onClick={this.handleCloseModal} className="btn btn-dark">x</button>
              </Col>
            </Row>
            <br/>
            <Row>
              <ModalSignIn />
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
