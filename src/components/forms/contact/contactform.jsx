import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { useForm, Form } from '../useForm';
import Controls from '../controls/Controls'
import { useParams } from "react-router-dom";

const initialFValues = {
  name: "",
  email: "",
  surname: "",
  message: "",
  phone_number: "",
};

const Contactus = () => {
  const { id } = useParams();

  const paperStyle = { padding: "0 15px 40px 15px", width: 250 };

  // axios

 
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


  const Submit = async (fields,) => {
      let url = `http://localhost:1337/api/general-enquiry/general-enquiry`
      const rawResponse = await fetch(url, {
          method: 'POST',
          body: JSON.stringify({
              FirstName: fields.firstName,
              LastName: fields.surname,
              Email: fields.email,
              PhoneNumber: fields.phone_number,
              Message: fields.message,
              NameOfOrganisation: fields.NameOfOrganisation,

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
    <Grid>
      
        <Grid align="center">
          <Typography variant="caption">Get in Touch With Us</Typography>
        </Grid>




<Typography variant="body2" color="textSecondary" component="p" gutterBottom>
    Fill up the form and our team will get back to you within 24 hours.
</Typography>
<Form onSubmit={handleSubmit} >
    <Grid container spacing={1}>
        <Grid >
            <Controls.Input
                name="FirstName"
                label="First Name"
                fullWidth
                value={values.firstName}
                onChange={handleInputChange}
                error={errors.firstName}
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
                name="NameOfOrganisation"
                label="Name Of Organisation"
                fullWidth
                value={values.NameOfOrganisation}
                onChange={handleInputChange}
                error={errors.NameOfOrganisation}
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
        </Grid>

    </Grid>
</Form>


     
    </Grid>
  );
};

export default Contactus;
