import Navbar from "../navbar/Navbar copy";
import { navlinks } from "../../data/travigodata";
import React, { Fragment } from 'react'
import { Grid, Paper, Typography } from '@material-ui/core';
import './cont.css'
import { useForm, Form } from '../forms/useForm';
import Controls from '../forms/controls/Controls'

import HeadTitle from "../navbar/HeadTitle/HeadTitle";
import Footer from "../Pages/Home/Sections/Footer";

const initialFValues = {
    FirstName: "",
    email: "",
    surname: "",
    message: "",
    phone_number: "",
    NameOfOrganisation: '',
};



const Contact = () => {

    const paperStyle = { padding: "0 1px 40px 1px", };
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
        <main>
            <Navbar navlinks={navlinks} />
            <HeadTitle />
            <Fragment>
                <section className="contactss">
                    <div className='contactss-heading'>
                        <h2>Contact us</h2>
                    </div>

                    <div className='containerss'>
                        <div className='row1'>
                            <div className='columnss'>
                                <div className='contactss-widget'>
                                    <div className='contactss-widget-item'>
                                        <div className='iconssss'>
                                            <i class="fa-solid fa-location-dot"></i>
                                        </div>
                                        <div className='text'>
                                            <h5>Address</h5>
                                            <p>1 kenny close , Avondale ,Harare,Zimbabwe</p>
                                        </div>
                                    </div>

                                    <div className='contactss-widget-item'>
                                        <div className='iconssss'>
                                            <i class="fa-solid fa-phone"></i>
                                        </div>
                                        <div className='text'>
                                            <h5>Contact us</h5>
                                            <p>1123455666| 12132332</p>
                                        </div>
                                    </div>

                                    <div className='contactss-widget-item'>
                                        <div className='iconssss'>
                                            <i class="fa-regular fa-envelope"></i>
                                        </div>
                                        <div className='text'>
                                            <h5>Mail</h5>
                                            <p>enquiries@traverzetravel.co.zw</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="columnss">
                                <div className="contactss-form">
                                    <Paper elevation={0} style={paperStyle}>



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



                                    </Paper>
                                </div>
                            </div>
                        </div>


                    </div>
                    <div className="row1">
                        <div className="map-columnss">
                            <div className="contactss-map">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.7299965970283!2d31.03448961431497!3d-17.804382287829934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a50b22518931%3A0x1cf5436b93da8125!2sTraverze%20Travel!5e0!3m2!1sen!2szw!4v1673270260359!5m2!1sen!2szw"
                                    width="600"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowfullscreen=""
                                    loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
            <Footer />
        </main>
    )
}

export default Contact




