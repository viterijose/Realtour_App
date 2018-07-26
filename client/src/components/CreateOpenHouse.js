import React from "react";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { FormBtn, Input } from "../components/Form";
import Navbar from "../components/Navbar";
import ContainerSpace from "../components/Containers";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

class CreateOpenHouse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startDate: moment(),
            endDate: moment(),
        };
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
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

                <Container fluid >
                    <Row>
                        <Col size='lg-4'>
                            From:
                            <DatePicker
                                selected={this.state.startDate}
                                selectsStart
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeStart}
                            />
                            To:
                            <DatePicker
                                selected={this.state.endDate}
                                selectsEnd
                                startDate={this.state.startDate}
                                endDate={this.state.endDate}
                                onChange={this.handleChangeEnd}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default CreateOpenHouse;
