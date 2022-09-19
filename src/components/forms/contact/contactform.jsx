import React from "react";
import { Grid, Paper, Button, Typography } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import MuiPhoneNumber from "material-ui-phone-number";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import { PACKAGE } from "../../../utils/Queries";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { CREATEENQUIRY } from "../../../utils/Mutation";



const Contactus = () => {
  const { id } = useParams();
  const { loading, data, error } = useQuery(PACKAGE, { variables: { id: id } });
  const paperStyle = { padding: "0 15px 40px 15px", width: 250 };
  const btnStyle = { marginTop: 10 };
  const [Enquiry ,{data1}] = useMutation(CREATEENQUIRY);
  
  console.log(data)
  // axios

 
  const initialValues = {
    name: "",
    email: "",
    surname: "",
    message: "",
    phone_number: "",
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, "It's too short").required("Required"),
    email: Yup.string().email("Enter valid email").required("Required"),
    // phoneNumber: Yup.number().typeError("Enter valid Phone number").required("Required"),
  });
  const onSubmit = (fields , props) => {
     Enquiry({
      variables: {
        name: fields.name,
        surname: fields.surname,
        email: fields.email,
        phone_number: fields.phone_number,
        message: fields.message
      
      }
    })
    alert(JSON.stringify(fields), null, 2);
    props.resetForm();
  };
  
  return (
    <Grid>
      <Paper elevation={0} style={paperStyle}>
        <Grid align="center">
          <Typography variant="caption">Get in Touch With Us</Typography>
        </Grid>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {(props) => (
            <Form noValidate>
              {/* <TextField label='Name' name="name" fullWidth value={props.values.name}
                    onChange={props.handleChange} /> */}

              <Field
                as={TextField}
                name="name"
                label="Name"
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

              {/* <TextField label='Email' name='email' type='Email' fullWidth 
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

              <Button
                type="submit"
                style={btnStyle}
                variant="contained"
                color="primary"
              >
                Enquire
              </Button>
            </Form>
          )}
        </Formik>
      </Paper>
    </Grid>
  );
};

export default Contactus;
