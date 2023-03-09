import React from 'react'
import FlightenquiryForm from "./FligthenquiryForm";
import { makeStyles, CssBaseline, createTheme, ThemeProvider } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Flightsenquiry from './flightenq';
import Formflightbook from '../../../formsssss/formflight';

const useStyles = makeStyles(theme => ({
    pageContent: {
        margin: theme.spacing(5),
        padding: theme.spacing(3)
    },
    appMain: {
        paddingLeft: '20px',
        width: '100%'
      }
}))
const theme = createTheme({
    palette: {
      primary: {
        main: "#333996",
        light: '#3c44b126'
      },
      secondary: {
        main: "#f83245",
        light: '#f8324526'
      },
      background: {
        default: "#f4f5fd"
      },
    },
    overrides:{
      MuiAppBar:{
        root:{
          transform:'translateZ(0)'
        }
      }
    },
    props:{
      MuiIconButton:{
        disableRipple:true
      }
    }
  })
  

  

export default function Flightenquiry() {

    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
             <div className={classes.appMain}>
            
            <Paper className={classes.pageContent}  >
              <Formflightbook />
              {/*<Flightsenquiry />
              {/*<FlightenquiryForm />*/}
            </Paper>
            </div>
            <CssBaseline />
            </ThemeProvider>
    )
}
