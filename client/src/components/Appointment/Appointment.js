import React from "react";
import PropTypes from "prop-types";
import SetBtn from "./SetBtn";
import OpenHouse from "./OpenHouse";
import { Container } from "../Grid";
import moment from 'moment';
import DatePicker from 'react-datepicker';
import API from "../../utils/API"
import 'react-datepicker/dist/react-datepicker.css';
import './Appointment.css';

class Appointment extends React.Component {
    // const { isSet, listingId } = this.props;
    constructor(props) {
        super(props);
        this.state = {
            isSet: false,
            startDate: moment(),
            endDate: moment(),
            listing: {},
            userId: "",
        };
        this.createAppointment = this.createAppointment.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
    }
    componentDidMount() {
        const { listingId, userId } = this.props

        API.getAppt(listingId)
            .then(res => {
                res.data.forEach(element => {
                    if(element.visitors.includes(userId)){this.setState({isSet:true});return} 
                });
            })
            .catch(err => console.log(err))

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
    createAppointment(listingId, userId, owner) {
        // console.log("USERID:" + userId)
        API.createAppointment({
            date: this.state.startDate,
            listing: listingId,
            host: owner,
            visitors: [userId]
        })
            .then(res => {
                this.setState({ isSet: true })
                //--------------------- CHANGE API ROUTE ----------------------
                // API.patchListing(listingId, { hasAppointments: true })
                //     .then(res => res.data)
                //     .catch(err => console.log(err))
                // console.log(res.data)
            })
            .catch(err => console.log(err));
        // this.setState({isSet:true})
    }
    setAppointment = (listingId, userId, owner) => (
        <Container>
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
            <br />
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
            <SetBtn onClick={() => (this.createAppointment(listingId, userId, owner))} />
        </Container>

    );

    viewOpenHouse = (listingId) => (
        <Container>
            <OpenHouse listingId={listingId} />
        </Container>
    );

    render() {
        const { listingId, userId, owner } = this.props
        // console.log(userId)
        if (this.state.isSet) return this.viewOpenHouse(listingId);
        else return this.setAppointment(listingId, userId, owner);
    }
}
Appointment.props = {
    isAppointmentSet: PropTypes.bool, //variable from mongo schema "hasAppointment"
    listingId: PropTypes.string,
    userId: PropTypes.string,
    owner: PropTypes.string
}

export default Appointment;