
import { Grid, TextField } from '@material-ui/core';
import Controls from "../../controls/Controls";
import React, { useState, useMemo } from 'react'
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio, Typography } from '@material-ui/core';
import { useForm, Form } from '../../useForm';
import * as collections from "../../services/collections";
import { useParams } from "react-router-dom";
import './flight.css'
import hero from "./3.svg";



const tripTypeItems = [
    { id: 'One Way', title: 'One Way' },
    { id: 'Two Way', title: 'Two Way' },
    { id: 'Multicity', title: 'Multicity' },
]

const initialFValues = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: '',
    Children: '',
    Adults: '',
    departure: '',
    arrival: '',
    secondarrival: '',
    othercities: '',
    seconddeparture: '',
    firstDepartureDate: new Date(),
    secondDepartureDate: new Date(),
    tripType: 'One Way',
    flightclass: '',
    secondflightclass: '',
    departureDate: new Date(),
    returnDate: new Date(),
    termsconditions: false,
}

export default function FlightBookingForm() {

    const { id } = useParams();
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('firstName' in fieldValues)
            temp.firstName = fieldValues.firstName ? "" : "This field is required."
        if ('lastName' in fieldValues)
            temp.lastName = fieldValues.lastName ? "" : "This field is required."
        if ('email' in fieldValues)
            temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        if ('mobile' in fieldValues)
            temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
        if ('flightclass' in fieldValues)
            temp.flightclass = fieldValues.flightclass.length != 0 ? "" : "This field is required."
        setErrors({
            ...temp
        })
        if (fieldValues == values) {
            Object.keys(values).forEach(key => {
                if (values[key] === '' || values[key] == null) {
                    delete values[key];
                }
            });
        }

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }



    const [myTripType, setmyTripType] = useState('One Way');
    const [active, setActive] = useState(1);
    const selectType = useMemo(() => myTripType === 'One Way', [myTripType]);
    const myTripTypeChange = (ev) => {
        setmyTripType(ev.target.value);
    };

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialFValues, true, validate);

    const Submit = async (fields,) => {
        let url = `http://localhost:1337/api/enquiries-about-flight/enquiries-about-flight`
        const rawResponse = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                FirstName: fields.firstName,
                LastName: fields.lastName,
                Email: fields.email,
                PhoneNumber: fields.mobile,
                Message: fields.message,
                Children: fields.Children,
                DepartureAirport: fields.departure,
                ArrivalAirport: fields.arrival,
                SecondDepartureAirport: fields.seconddeparture,
                SecondArrival: fields.secondarrival,
                DepartureDate: fields.departureDate,
                ReturnDate: fields.returnDate,
                SecondDepartureDate: fields.secondDepartureDate,
                Terms_Conditions: fields.termsconditions,
                TripType: fields.tripType,
                FlightClass: fields.flightclass,
                SecondFilghtClass: fields.secondflightclass,
                OtherCities: fields.OtherCities,

                ...Form
            })
        });
        const content = await rawResponse.json();
        console.log(content)

        alert(JSON.stringify(fields), null, 2);
        resetForm();
    };
    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            Submit(values)
            resetForm()
        }
    }

    return (
        <div className="box">
            <div className="box-primary">
                <img src={hero} height="100%" alt="" />
            </div>
            <div className="box-secondary">


                <Form onSubmit={handleSubmit} >
                    <Grid container>

                        <Grid item xs={12} sm={6}>
                            <Typography variant='body2' align='left' gutterBottom>Personal Information</Typography>

                            <Grid item >
                                <Controls.Input
                                    name="firstName"
                                    label="First Name"
                                    required
                                    value={values.firstName}
                                    onChange={handleInputChange}
                                    error={errors.firstName}
                                />
                                <Controls.Input
                                    name="lastName"
                                    label="Last Name"
                                    required
                                    value={values.lastName}
                                    onChange={handleInputChange}
                                    error={errors.lastName}
                                />
                                <Controls.Input
                                    label="Email"
                                    name="email"
                                    required
                                    value={values.email}
                                    onChange={handleInputChange}
                                    error={errors.email}
                                />
                                <Controls.InputPhonenumber
                                    label="Mobile"
                                    name="mobile"
                                    value={values.mobile}
                                    onChange={handleInputChange}
                                    error={errors.mobile}
                                />

                                <Controls.Select
                                    name="Children"
                                    label="Number Of Children"
                                    value={values.Children}
                                    onChange={handleInputChange}
                                    options={collections.getChildrenCollection()}
                                    error={errors.Children}
                                />
                                <Controls.Select
                                    name="Adults"
                                    label="Adults"
                                    value={values.Adults}
                                    onChange={handleInputChange}
                                    options={collections.getAdultsCollection()}
                                    error={errors.Adults}
                                />
                                <Controls.Messagebox
                                    label="Additional Information"
                                    name='message'
                                    multiline minRows={4}
                                    placeholder="Type other details of travelers"
                                    value={values.message}
                                    onChange={handleInputChange}

                                />



                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Typography variant='body2' align='left' gutterBottom>Trip Information</Typography>
                            <FormControl>
                                <FormLabel>Trip Type</FormLabel>
                                <MuiRadioGroup row
                                    name="tripType"
                                    label="Trip Type"
                                    value={values.tripType}
                                    onChange={handleInputChange}
                                    items={tripTypeItems}
                                >
                                    {
                                        tripTypeItems.map((item, index) => (
                                            <FormControlLabel
                                                className={active === index + 1 ? "active" : ""}
                                                onClick={() => {
                                                    { setActive(index + 1) };
                                                    { setmyTripType(item) }
                                                }}
                                                key={item.id} value={item.id} control={<Radio />} label={item.title} checked={myTripType === item.id} onChange={myTripTypeChange} />
                                        )
                                        )
                                    }
                                </MuiRadioGroup>
                            </FormControl>
                            {myTripType === "One Way" && (
                                <Grid item>
                                    <Controls.Input
                                        label="Flying From"
                                        name="departure"
                                        required
                                        value={values.departure}
                                        onChange={handleInputChange}
                                    />

                                    <Controls.Input
                                        label="Flying To"
                                        name="arrival"
                                        required
                                        value={values.arrival}
                                        onChange={handleInputChange}
                                    />

                                    <Controls.DatePickers
                                        name="departureDate"
                                        required
                                        label="departure Date"
                                        value={values.departureDate}
                                        onChange={handleInputChange}
                                    />
                                    <Controls.Select
                                        name="flightclass"
                                        label="Choose Your Flight Class"
                                        required
                                        value={values.flightclass}
                                        onChange={handleInputChange}
                                        options={collections.getFlightclassCollection()}
                                        error={errors.flightclass}
                                    />


                                </Grid>

                            )}
                            {myTripType === 'Two Way' && (
                                <Grid item>

                                    <Controls.Input
                                        label="Flying From"
                                        name="departure"
                                        required
                                        value={values.departure}
                                        onChange={handleInputChange}
                                    />
                                    <Controls.Input
                                        label="Flying To"
                                        name="arrival"
                                        required
                                        value={values.arrival}
                                        onChange={handleInputChange}
                                    />
                                    <Controls.DatePickers
                                        name="departureDate"
                                        label="departure Date"
                                        required
                                        value={values.departureDate}
                                        onChange={handleInputChange}
                                    />
                                    <Controls.DatePickers
                                        name="returnDate"
                                        label="Return Date"
                                        required
                                        value={values.returnDate}
                                        onChange={handleInputChange}
                                    />
                                    <Controls.Select
                                        name="flightclass"
                                        label="Choose Your Flight Class"
                                        required
                                        value={values.flightclass}
                                        onChange={handleInputChange}
                                        options={collections.getFlightclassCollection()}
                                        error={errors.flightclass}
                                    />

                                </Grid>
                            )}
                            {myTripType === 'Multicity' && (
                                <Grid item>


                                    <Grid item >
                                        <Typography
                                            color="textPrimary"
                                            gutterBottom

                                            align="left"
                                        >
                                            Flight 1
                                        </Typography>
                                        <Controls.Input
                                            label="Flying From"
                                            name="departure"
                                            value={values.departure}
                                            required
                                            onChange={handleInputChange}
                                        />
                                        <Controls.Input
                                            label="Flying To"
                                            name="arrival"
                                            value={values.arrival}
                                            required
                                            onChange={handleInputChange}
                                        />
                                        <Controls.DatePickers
                                            name="firstdepartureDate"
                                            label="departure Date"
                                            value={values.departureDate}
                                            required
                                            onChange={handleInputChange}
                                        />
                                        <Controls.Select
                                            name="flightclass"
                                            label="Choose Your Flight Class"
                                            value={values.flightclass}
                                            onChange={handleInputChange}
                                            options={collections.getFlightclassCollection()}
                                            error={errors.flightclass}
                                        />


                                    </Grid>
                                    <Grid item >
                                        <Typography
                                            color="textPrimary"
                                            gutterBottom

                                            align="left"
                                        >
                                            Flight 2
                                        </Typography>
                                        <Controls.Input
                                            label="Flying From"
                                            name="seconddeparture"
                                            value={values.seconddeparture}
                                            onChange={handleInputChange}
                                        />
                                        <Controls.Input
                                            label="Flying To"
                                            name="secondarrival"
                                            value={values.secondarrival}
                                            onChange={handleInputChange}
                                        />
                                        <Controls.DatePickers
                                            name="seconddepartureDate"
                                            label="departure Date"
                                            value={values.secondDepartureDate}
                                            onChange={handleInputChange}
                                        />
                                         <Controls.DatePickers
                                        name="returnDate"
                                        required
                                        label="Return Date"
                                        value={values.returnDate}
                                        onChange={handleInputChange}
                                    />
                                        <Controls.Select
                                            name="secondflightclass"
                                            label="Choose Your Flight Class"
                                            value={values.secondflightclass}
                                            onChange={handleInputChange}
                                            options={collections.getFlightclassCollection()}
                                            error={errors.secondflightclass}
                                        />
                                        <Controls.Messagebox
                                            label="Other Cities"
                                            name='othercities'
                                            multiline minRows={4}
                                            placeholder="Type other cities if more any"
                                            value={values.othercities}
                                            onChange={handleInputChange}
                                            fullWidth required
                                        />


                                    </Grid>

                                </Grid>
                            )}

                            <Controls.Checkbox
                                name="termsconditions"
                                label="Accept Terms And Conditions"
                                value={values.termsconditions}
                                onChange={handleInputChange}
                            />

                            <div>
                                <Controls.Button
                                    type="submit"
                                    text="Submit" />
                                <Controls.Button
                                    text="Reset"
                                    color="default"
                                    onClick={resetForm} />
                            </div>
                        </Grid>
                    </Grid>
                </Form>
            </div>
        </div>



    )
}
