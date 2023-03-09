import React, { useState, useMemo } from 'react'
import './flight.css'
import dayjs from 'dayjs';
import hero from "./3.svg";
import DateFnsUtils from "@date-io/date-fns";
import { useForm, Form } from '../../useForm';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import LocationIcon from '@material-ui/icons/LocationOnOutlined';
import * as flightService from "../../services/flightService";
import {
  Grid,
  TextField,
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormControl,
  RadioGroup,
  Radio,
  InputLabel,
  Switch,
  Select,
  MenuItem,
  Button,
  Typography,

} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";



const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    margin: theme.spacing(1, 0),
  },
}));


const initialFValues = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  message: '',
  Flyingfrom: '',
  Flyingto: '',
  departure: '',
  arrival: '',
  triptype: 'One Way',
  flightclass: '',
  departureDate: new Date(),
  returnDate: new Date(),
  termsconditions: false,
}

export default function FlightenquiryForm(props) {

  const [departureDateValue, setdepartureDateValue] = useState(dayjs(new Date()));
  const [returnDateValue, setreturnDateValue] = useState(dayjs(new Date()));

  const classes = useStyles();
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


  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('firstName' in fieldValues)
      temp.firstName = fieldValues.firstName ? "" : "This field is required."
    if ('lastNam' in fieldValues)
      temp.lastName = fieldValues.lastName ? "" : "This field is required."
    if ('email' in fieldValues)
      temp.email = (/$^|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
    if ('mobile' in fieldValues)
      temp.mobile = fieldValues.mobile.length > 9 ? "" : "Minimum 10 numbers required."
    if ('flightclass' in fieldValues)
      temp.flightclass = fieldValues.flightclass.length !== 0 ? "" : "This field is required."
    setErrors({
      ...temp
    })

    if (fieldValues === values)
      return Object.values(temp).every(x => x === "")
  }

  const convertToDefEventPara = (name, value) => ({
    target: {
      name, value
    }
  })

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);

  const onSubmit = (data) => alert(JSON.stringify(data));

  const handleSubmit = e => {
    e.preventDefault()

    if (validate(onSubmit)) {
      window.alert(values)
      resetForm()
    }
  }

  return (
    <div className="box">
      <div className="box-primary">
        <img src={hero} height="100%" alt="" />
      </div>
      <div className="box-secondary">

        <Form onSubmit={handleSubmit}>
          <Grid container spacing={1}>

            <Grid item xs={12} sm={6}>
              <Typography variant='body2' align='left' gutterBottom>Personal Information</Typography>
              <TextField
                placeholder="Enter Your First Name"
                label="First Name"
                variant='filled'
                name='firstName'
                value={values.firstName}
                onChange={handleInputChange}
                // error={errors.firstName}
                fullWidth
              //className={classes.inputField}
              />

              {/* 2) TextField */}
              <TextField
                placeholder="Enter Your Last Name"
                label="Last Name"
                name='LastName'
                variant="filled"
                fullWidth
              //className={classes.inputField}
              />

              {/* 3) TextField */}
              <TextField
                placeholder="Enter Your E-mail Address"
                label="E-mail"
                variant="filled"
                name='email'
                value={values.email}
                onChange={handleInputChange}
                error={errors.email}
                fullWidth
              //className={classes.inputField}
              />

              {/* 4) TextField */}
              <TextField
                placeholder="Enter Your Phone Number"
                label="Phone"
                variant="filled"
                name='mobile'
                value={values.mobile}
                onChange={handleInputChange}
                error={errors.mobile}
                fullWidth
              //className={classes.inputField}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <Typography variant='body2' align='left' gutterBottom>Trip Information</Typography>
              <FormControl>
                <FormLabel>Trip Type</FormLabel>
                <MuiRadioGroup row
                  name='triptype'

                  value={values.triptype}
                  onChange={handleInputChange}
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


                    <TextField
                      placeholder="Flying From"
                      label="FLYING FROM"
                      name='departure'
                      variant="filled"
                      value={values.departure}
                      onChange={handleInputChange}
                      fullWidth
                    //className={classes.inputField}
                    />
                    <TextField
                      placeholder="Flying To"
                      label="FLYING TO"
                      name='arrival'
                      variant="filled"
                      value={values.arrival}
                      onChange={handleInputChange}
                      fullWidth
                    //className={classes.inputField}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="DEPARTURE DATE"
                        // value={values.departureDate}
                        name='Departuredate'
                        value={departureDateValue}
                        onChange={(newValue) => setdepartureDateValue(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                      />

                    </LocalizationProvider>

                  </Grid>
                )}
                {myTripType === 'Two Way' && (
                  <Grid item >

                    <TextField
                      placeholder="Flying From"
                      label="FLYING FROM"
                      name='Flyingfrom'
                      variant="filled"
                      value={values.departure}
                      onChange={handleInputChange}
                      fullWidth
                    //className={classes.inputField}
                    />
                    <TextField
                      placeholder="Flying To"
                      label="FLYING TO"
                      name='Flyingto'
                      variant="filled"
                      value={values.arrival}
                      onChange={handleInputChange}
                      fullWidth
                    //className={classes.inputField}
                    />

                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DatePicker
                        label="DEPARTURE DATE"
                        name='Departuredate'

                        value={departureDateValue}
                        onChange={(newValue) => setdepartureDateValue(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                      <DatePicker
                        label="RETURN DATE"
                        name='Returndate'

                        value={returnDateValue}
                        onChange={(newValue) => setreturnDateValue(newValue)}
                        renderInput={(params) => <TextField {...params} />}

                      />
                    </LocalizationProvider>



                  </Grid>
                )}
                {myTripType === 'Multicity' && (

                  <Grid item >


                    <TextField
                      placeholder="Flying From"
                      label="FLYING FROM"
                      name='departure'
                      variant="filled"
                      value={values.departure}
                      onChange={handleInputChange}
                      fullWidth
                    //className={classes.inputField}
                    />
                    <TextField
                      placeholder="Flying To"
                      label="FLYING TO"
                      name='arrival'
                      variant="filled"
                      value={values.arrival}
                      onChange={handleInputChange}
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
                        renderInput={(params) => <TextField {...params} />}
                      />
                      <DatePicker
                        label="RETURN DATE"
                        name='Returndate'
                        select={selectType}
                        value={returnDateValue}
                        onChange={(newValue) => setreturnDateValue(newValue)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </LocalizationProvider>
                    <Grid item xs={12}>
                      <TextField label="Other Cities" name='Othercities' multiline minRows={4} placeholder="Type other cities you would like to travel to here" variant="filled" fullWidth required />
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
                      name="flightclass"
                      label="Class"
                      value={values.flightclass}
                      onChange={handleInputChange}
                      error={errors.flightclass}
                    >
                      <MenuItem value="">Choose your preferred class</MenuItem>
                      <MenuItem value="Firstclass">First Class</MenuItem>
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

                    <Select>
                      <MenuItem value="">Choose Number of Adults Travelling</MenuItem>
                      <MenuItem value="1">1</MenuItem>
                      <MenuItem value="2">2</MenuItem>
                      <MenuItem value="3">3</MenuItem>
                      <MenuItem value="4">4</MenuItem>
                      <MenuItem value="5">5</MenuItem>
                      <MenuItem value="6">6</MenuItem>
                      <MenuItem value="7">7</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth
                  //className={classes.inputField}
                  >
                    <InputLabel id="demo-simple-select-label">
                      CHILDREN(0 - 17)
                    </InputLabel>

                    <Select>
                      <MenuItem value="">Choose Number of Children that will be travelling</MenuItem>
                      <MenuItem value="1">1</MenuItem>
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
                    value={values.termsconditions}
                    onChange={handleInputChange}
                  />

                  <Button variant="contained" color="primary" type="submit" >
                    Request For Quotation
                  </Button>



                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Form>
      </div>
    </div>

  )
}
