import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
//import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio, Typography } from '@material-ui/core';
import { useForm, Form } from '../forms/useForm';
import Controls from '../forms/controls/Controls'
//import { Formik, Form, Field, ErrorMessage } from "formik";s
import { useMutation, useQuery } from "@apollo/client";
import { CREATEENQUIRY } from "../../utils/Mutation";
import { PACKAGE } from "../../utils/Queries";
import { useParams } from "react-router-dom";
import { BACKEND_URL } from "../../customHooks/helper";

const initialFValues = {
  name: "",
  email: "",
  surname: "",
  message: "",
  phone_number: "",
  dateoftravel: new Date(),
};

const RegistrationForm = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(PACKAGE, { variables: { id: id } });
  const paperStyle = { padding: "0 1px 40px 1px", width: 300 };
  const btnStyle = { marginTop: 10 };
  const [Enquiry, { data1 }] = useMutation(CREATEENQUIRY);
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
  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm
  } = useForm(initialFValues, true, validate);

  if (loading) return <h1>loading please wait</h1>;
  if (error) console.log(error);
  if (data1) console.log(data1);
  if (data) console.log(data);
  const {
    title,
    cost,
    includes,

  } = data.package.data.attributes;

  const datass = [cost, title, includes];
  //console.log(datass)



  const Package = { data };
  //console.log(Package);

  const Submit = async (fields,) => {
    let url = `${BACKEND_URL}/api/holiday-packages-enquiry/holiday-packages-enquiry`
    const rawResponse = await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        FirstName: fields.name,
        LastName: fields.surname,
        Email: fields.email,
        Enquired_Package: datass,
        PhoneNumber: fields.phone_number,
        Message: fields.message,
        DateOfTravel: fields.dateoftravel,

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
    if (validate()){
        Submit(values)
        resetForm()
    }
}



  return (

    <Grid item>

      <Paper elevation={0} style={paperStyle}>
        <Grid align="center">
          <Typography variant="caption">Visit {title} For Just ${cost}</Typography>
        </Grid>



        <Form onSubmit={handleSubmit} >
          <Controls.Input
            name="name"
            label="Name"
            fullWidth
            value={values.name}
            onChange={handleInputChange}
            error={errors.name}
            required
          />


          <Controls.Input
            name="surname"
            label="Surname"
            fullWidth
            value={values.surname}
            onChange={handleInputChange}
            error={errors.surname}
            required
          />


          <Controls.Input
            name="email"
            label="Email"
            fullWidth
            value={values.email}
            onChange={handleInputChange}
            error={errors.email}
            required
          />

          <Controls.InputPhonenumber
            data-cy="phoneNumbers"
            defaultCountry={"zw"}
            name="phone_number"
            label="Phone Numbers"
            value={values.phone_number}
            onChange={handleInputChange}
            error={errors.phone_number}
            fullWidth
            required

          />
          <Controls.DatePickers
            name="dateoftravel"
            required
           
            value={values.dateoftravel}
            onChange={handleInputChange}
          />

          <Controls.Messagebox
            label="Message"
            name="message"
            onChange={handleInputChange}
            error={errors.message}
            fullWidth
            value={values.message}
            multiline
            minRows="5"
          />

          <div>
            <Controls.Button
              type="submit"
              text="Enquire" />
            <Controls.Button
              text="Reset"
              color="default"
              onClick={resetForm} />
          </div>
        </Form>

      </Paper>
    </Grid>
  );
};

export default RegistrationForm;
