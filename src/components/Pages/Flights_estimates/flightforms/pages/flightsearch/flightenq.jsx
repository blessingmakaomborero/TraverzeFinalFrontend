import React, { useState, useMemo } from 'react'
import './flight.css'
import dayjs from 'dayjs';
import hero from "./3.svg";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import LocationIcon from '@material-ui/icons/LocationOnOutlined';
import {
    Grid,
    TextField,
    RadioGroup as MuiRadioGroup,
    FormControlLabel,
    Checkbox,
    FormLabel,
    FormControl,
    Radio,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Typography,
} from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MuiPhoneNumber from "material-ui-phone-number";
import * as Yup from "yup";
import { useMutation } from "@apollo/client";
import { CREATEENQUIRY } from '../../../../../../utils/Mutation';



const Flightsenquiry = () => {
    const [departureDateValue, setdepartureDateValue] = useState(dayjs(new Date()));
    const [returnDateValue, setreturnDateValue] = useState(dayjs(new Date()));

    
    const [myTripType, setmyTripType] = useState('One Way');
    const [active, setActive] = useState(1);
    const TripTypes = [
        { id: 'One Way', title: 'One Way' },
        { id: 'Two Way', title: 'Two Way' },
        { id: 'Multicity', title: 'Multicity' },

    ];
    const selectType = useMemo(() => myTripType === 'One Way' ? 'date' : 'range', [myTripType]);
    const myTripTypeChange = (ev) => {
        setmyTripType(ev.target.value);
    };



    const [Enquiry, { data1 }] = useMutation(CREATEENQUIRY);

   
   
    if (data1) console.log(data1);
   



    const initialValues = {
        firstName: '',
        surname: '',
        email: '',
        phone_number: '',
        message: '',
        Flyingfrom: '',
        Flyingto: '',
        departure: '',
        arrival: '',
        TripType: 'One Way',
        flightclass: '',
        children:'',
        Adults:'',
        Othercities:'',
        departuredate: new Date(),
        returnDate: new Date(),
        termsconditions: false,
    };
    const validationSchema = Yup.object().shape({
        firstName: Yup.string().min(3, "It's too short").required("Required"),
        email: Yup.string().email("Enter valid email").required("Required"),
        // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
    });

    const onSubmit = async (fields, props,) => {
        console.log(fields)
     { /*  let url = `http://localhost:1337/api/enquiry/enquiry`
        const rawResponse = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                name: fields.name,
                surname: fields.surname,
                email: fields.email,
                
                phone_number: fields.phone_number,
                message: fields.message,
                ...Form
            })
        });
        const content = await rawResponse.json();
        console.log(content)

        alert(JSON.stringify(fields), null, 2);
    props.resetForm(); */}
    };

    return (
        <div className="box">
            <div className="box-primary">
                <img src={hero} height="100%" alt="" />
            </div>
            <div className="box-secondary">




                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {(props) => (
                        <Form noValidate>

                            <Grid container spacing={1}>

                                <Grid item xs={12} sm={6}>
                                    <Typography variant='body2' align='left' gutterBottom>Personal Information</Typography>
                                    <Field
                                        as={TextField}
                                        name="firstName"
                                        label="First Name"
                                        fullWidth
                                        error={props.errors.name && props.touched.name}
                                        helperText={<ErrorMessage name="name" />}
                                        required
                                    />

                                    <Field
                                        as={TextField}
                                        name="surname"
                                        label="Surname"
                                        fullWidth
                                        error={props.errors.surname && props.touched.surname}
                                        helperText={<ErrorMessage name="surname" />}
                                        required
                                    />

                                    {/*  <Field
                as={TextField} label='Email' name='email' type='Email' fullWidth 
                    {...props.getFieldProps('email')}/> */}

                                    <Field
                                        as={TextField}
                                        name="email"
                                        label="Email"
                                        fullWidth
                                        error={props.errors.email && props.touched.email}
                                        helperText={<ErrorMessage name="email" />}
                                        required
                                    />

                                    <MuiPhoneNumber
                                        data-cy="phoneNumbers"
                                        defaultCountry={"zw"}
                                        name="phone_number"
                                        label="Phone Numbers"
                                        fullWidth
                                        required

                                        onChange={(value) => props.setFieldValue("phone_number", value)}
                                        error={props.touched.phone_number && Boolean(props.errors.phone_number)}
                                        helperText={props.touched.phone_number && props.errors.phone_number}
                                    />

                                    <Field
                                        as={TextField}
                                        label="Message"
                                        name="message"
                                        fullWidth
                                        multiline
                                        minRows="5"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <Typography variant='body2' align='left' gutterBottom>Trip Information</Typography>
                                    <FormControl component='fieldset' name='TripType'>
                                        <FormLabel>Trip Type</FormLabel>
                                        <MuiRadioGroup row
                                            name='TripType'


                                            items={TripTypes}

                                        >
                                            {TripTypes.map((TripType, index,) => {
                                                return (

                                                    <FormControlLabel
                                                    
                                                        className={active === index + 1 ? "active" : ""}
                                                        onClick={() => {
                                                            { setActive(index + 1) };
                                                            { setmyTripType(TripType) }
                                                        }} TripType={TripTypes} key={TripType.id} value={TripType.id} control={<Radio />} label={TripType.title} checked={myTripType === TripType.id} onChange={myTripTypeChange} />

                                                );
                                            })}


                                        </MuiRadioGroup>
                                    </FormControl>

                                    <Grid item xs={12}>
                                        {myTripType === "One Way" && (
                                            <Grid item >


                                                <Field
                                                    as={TextField}
                                                    placeholder="Flying From"
                                                    label="FLYING FROM"
                                                    name='departure'
                                                    variant="filled"

                                                    fullWidth
                                                //className={classes.inputField}
                                                />
                                                <Field
                                                    as={TextField}
                                                    placeholder="Flying To"
                                                    label="FLYING TO"
                                                    name='arrival'
                                                    variant="filled"

                                                    fullWidth
                                                //className={classes.inputField}
                                                />

                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        label="DEPARTURE DATE"
                                                        // value={values.departureDate}
                                                        name='Departuredate'
                                                        // value={departureDateValue}
                                                        onChange={(newValue) => setdepartureDateValue(newValue)}
                                                        renderInput={(params) => <Field
                                                            as={TextField} {...params} />}
                                                    />

                                                </LocalizationProvider>

                                            </Grid>
                                        )}
                                        {myTripType === 'Two Way' && (
                                            <Grid item >

                                                <Field
                                                    as={TextField}
                                                    placeholder="Flying From"
                                                    label="FLYING FROM"
                                                    name='Flyingfrom'
                                                    variant="filled"

                                                    fullWidth
                                                //className={classes.inputField}
                                                />
                                                <Field
                                                    as={TextField}
                                                    placeholder="Flying To"
                                                    label="FLYING TO"
                                                    name='Flyingto'
                                                    variant="filled"

                                                    fullWidth
                                                //className={classes.inputField}
                                                />

                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        label="DEPARTURE DATE"
                                                        name='Departuredate'

                                                        // value={departureDateValue}
                                                        onChange={(newValue) => setdepartureDateValue(newValue)}
                                                        renderInput={(params) => <Field
                                                            as={TextField} {...params} />}
                                                    />
                                                    <DatePicker
                                                        label="RETURN DATE"
                                                        name='Returndate'

                                                        value={returnDateValue}
                                                        onChange={(newValue) => setreturnDateValue(newValue)}
                                                        renderInput={(params) => <Field
                                                            as={TextField} {...params} />}

                                                    />
                                                </LocalizationProvider>



                                            </Grid>
                                        )}
                                        {myTripType === 'Multicity' && (

                                            <Grid item >


                                                <Field
                                                    as={TextField}
                                                    placeholder="Flying From"
                                                    label="FLYING FROM"
                                                    name='departure'
                                                    variant="filled"

                                                    fullWidth
                                                //className={classes.inputField}
                                                />
                                                <Field
                                                    as={TextField}
                                                    placeholder="Flying To"
                                                    label="FLYING TO"
                                                    name='arrival'
                                                    variant="filled"

                                                    fullWidth
                                                    icon={<LocationIcon />}
                                                //className={classes.inputField}
                                                />

                                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                    <DatePicker
                                                        label="DEPARTURE DATE"
                                                        name='Departuredate'
                                                        value={departureDateValue}
                                                        onChange={(newValue) => setdepartureDateValue(newValue)}
                                                        renderInput={(params) => <Field
                                                            as={TextField} {...params} />}
                                                    />
                                                    <DatePicker
                                                        label="RETURN DATE"
                                                        name='Returndate'
                                                        select={selectType}
                                                        value={returnDateValue}
                                                        onChange={(newValue) => setreturnDateValue(newValue)}
                                                        renderInput={(params) => <Field
                                                            as={TextField} {...params} />}
                                                    />
                                                </LocalizationProvider>
                                                <Grid item xs={12}>
                                                    <Field
                                                        as={TextField} label="Other Cities" name='Othercities' multiline minRows={4} placeholder="Type other cities you would like to travel to here" variant="filled" fullWidth required />
                                                </Grid>

                                            </Grid>
                                        )}
                                        <Grid item >
                                            {/* Select */}
                                            <FormControl fullWidth
                                            //className={classes.inputField}
                                            >
                                                <InputLabel id="demo-simple-select-label">
                                                    Flight Class
                                                </InputLabel>

                                                <Select
                                                value={localStorage.getItem("flightclass")}
                                                
                                                    name="flightclass"
                                                    label="Class"

                                                >
                                                    <MenuItem disabled value="">Choose your preferred class</MenuItem>
                                                    <MenuItem value="flightclass">First Class</MenuItem>
                                                    <MenuItem value="Business">Business Class</MenuItem>
                                                    <MenuItem value="Economy">Economy Class</MenuItem>
                                                </Select>
                                            </FormControl>

                                            <FormControl fullWidth
                                            //className={classes.inputField}
                                            >
                                                <InputLabel id="demo-simple-select-label">
                                                    Adults(18+)
                                                </InputLabel>

                                                <Select
                                                 name="Adults"
                                                 label="Adults"
                                                >
                                                    <MenuItem value="Adults">Choose Number of Adults Travelling</MenuItem>
                                                    <MenuItem value="Adults">1</MenuItem>
                                                    <MenuItem value="2">2</MenuItem>
                                                    <MenuItem value="3">3</MenuItem>
                                                    <MenuItem value="4">4</MenuItem>
                                                    <MenuItem value="5">5</MenuItem>
                                                    <MenuItem value="6">6</MenuItem>
                                                    <MenuItem value="7">7</MenuItem>
                                                </Select>
                                            </FormControl>
                                            <FormControl fullWidth
                                            name="children"
                                            //className={classes.inputField}
                                            >
                                                <InputLabel id="demo-simple-select-label">
                                                    CHILDREN(0 - 17)
                                                </InputLabel>

                                                <Select
                                                 name="children"
                                                 label="Class"
                                                >
                                                    <MenuItem value="children">Choose Number of Children that will be travelling</MenuItem>
                                                    <MenuItem value="children">1</MenuItem>
                                                    <MenuItem value="2">2</MenuItem>
                                                    <MenuItem value="3">3</MenuItem>
                                                    <MenuItem value="4">4</MenuItem>
                                                    <MenuItem value="5">5</MenuItem>
                                                    <MenuItem value="6">6</MenuItem>
                                                    <MenuItem value="7">7</MenuItem>
                                                </Select>
                                            </FormControl>
                                            {/* Checkbox */}
                                            <FormControlLabel
                                                style={{ display: "block", marginBottom: 15 }}
                                                control={<Checkbox />}
                                                label="I aggree all terms and conditions"
                                                name="termsconditions"

                                            />

                                            <Button variant="contained" color="primary" type="submit" >
                                                Request For Quotation
                                            </Button>



                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Form>
                    )}
                </Formik>


            </div>
        </div>

    );
};

export default Flightsenquiry;
