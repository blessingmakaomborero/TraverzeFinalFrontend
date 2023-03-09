import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import React, { useState, useEffect } from 'react'
import { useForm, Form } from '../../useForm';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { makeStyles } from "@material-ui/core/styles";
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
  
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    inputField: {
      width: "100%",
      margin: theme.spacing(1, 0),
    },
  }));

  const initialFValues = {
    id: 0,
    fullName: '',
    email: '',
    mobile: '',
    message: '',
    departure: '',
    arrival: '',
    tripType: 'One Way',
    flightclass: '',
    departureDate: new Date(),
    returnDate: new Date(),
    termsconditions: false,
  }
  
  
export default function Multicity(props) {
    const classes = useStyles();
    const { name, label, value, onChange } = props


  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);

  const handleSubmit = e => {
    e.preventDefault()
    if (validate()) {
      
      resetForm()
    }
  }


    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('fullName' in fieldValues)
          temp.fullName = fieldValues.fullName ? "" : "This field is required."
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

    return(
        <Grid xs={12} sm={6} item >
        <TextField
          placeholder="Enter Your First Name"
          label="First Name"
          variant="filled"
          fullWidth
         // className={classes.inputField}
        />

        {/* 2) TextField */}
        <TextField
          placeholder="Enter Your Last Name"
          label="Last Name"
          variant="outlined"
          fullWidth
         // className={classes.inputField}
        />

        {/* 3) TextField */}
        <TextField
          placeholder="Enter Your E-mail Address"
          label="E-mail"
          variant="outlined"
          fullWidth
          //  className={classes.inputField}
        />

        {/* 4) TextField */}
        <TextField
          placeholder="Enter Your Phone Number"
          label="Phone"
          variant="outlined"
          fullWidth
          //  className={classes.inputField}
        />

<TextField
          placeholder="Flying From"
          label="FLYING FROM"
          variant="outlined"
          fullWidth
         // className={classes.inputField}
        />
        <TextField
          placeholder="Flying To"
          label="FLYING TO"
          variant="outlined"
          fullWidth
         // className={classes.inputField}
        />

       <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="DEPARTURE DATE"
        value={value}
        onChange={(newValue) => {
         // setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
      <DatePicker
        label="RETURN DATE"
        value={value}
        onChange={(newValue) => {
         // setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>

        {/* Radio Buttons */}
      

        {/* Select */}
        <FormControl fullWidth 
        className={classes.inputField}
        >
          <InputLabel id="demo-simple-select-label">
            Flight Class
          </InputLabel>

          <Select>
            <MenuItem value="">Choose your preferred class</MenuItem>
            <MenuItem value="Web Development">First Class</MenuItem>
            <MenuItem value="App Development">Business Class</MenuItem>
            <MenuItem value="UI/UX">Economy Class</MenuItem>
          </Select>
        </FormControl>

        {/*  Switch */}
        <FormControlLabel
          //  className={classes.inputField}
          control={<Switch />}
          label="Send me regular updates"
        />

        {/* Checkbox */}
        <FormControlLabel
          style={{ display: "block", marginBottom: 15 }}
          control={<Checkbox />}
          label="I aggree all terms and conditions"
        />

        <Button variant="contained" color="primary" type="submit">
          Request For Qoutes
        </Button>

                        </Grid>
    )
}