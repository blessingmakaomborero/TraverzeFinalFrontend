import React from 'react'
import { Paper,makeStyles } from '@material-ui/core';
import FlightBookingForm from './FlightBookingForm';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    }
}))

export default function Flightsbooking() {

    const classes = useStyles();

    return (
        <>
            
            <Paper className={classes.pageContent}>
                <FlightBookingForm />
            </Paper>
        </>
    )
}
