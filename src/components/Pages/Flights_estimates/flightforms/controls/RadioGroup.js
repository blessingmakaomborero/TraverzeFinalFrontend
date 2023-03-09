import React, { useState, useMemo } from 'react'
//import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core';
import LocationIcon from '@material-ui/icons/LocationOnOutlined';
import {
  Grid, 
  RadioGroup as MuiRadioGroup,
  FormControlLabel,
  FormLabel,
  FormControl,
  Radio,

} from "@material-ui/core";
import Textfield from '../../formsssss/FormsUI/Textfield';
import DateTimePicker from '../../formsssss/FormsUI/DataTimePicker';
import { useField, useFormikContext } from 'formik';

const RadioGroup =({
  name,
  value, onChange, items,label,legend,
  ...otherProps
}) => {
    


    const [myTripType, setmyTripType] = useState('One Way');
    const [active, setActive] = useState(1);
    const TripTypes = [
      { id: 'One Way', title: 'One Way' },
      { id: 'Two Way', title: 'Two Way' },
      { id: 'Multicity', title: 'Multicity' },
  
    ];
    const selectType = useMemo(() => myTripType === 'One Way' ,[myTripType]);
    const myTripTypeChange = (ev) => {
        setmyTripType(ev.target.value);
      };
    
    const { setFieldValue } = useFormikContext();
    const [field, meta] = useField(name);
  
    const handleChange = evt => {
      const { checked } = evt.target;
      setFieldValue(name, checked);
    };
  
    const configRadiobutton = {
      ...field,
      onChange: handleChange
    };
  
    const configFormControl = {};
    if (meta && meta.touched && meta.error) {
      configFormControl.error = true;
    }

    return (

      <div>
        <FormControl    component="fieldset">
            <FormLabel component="legend">{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}

             
              
               
                >
                {
                    items.map((item,index )=> {
                        return (
                            <FormControlLabel
                            className={active === index + 1 ? "active" : ""}
                            onClick={() => {
                              { setActive(index + 1) };
                              { setmyTripType(item) } }}
                            key={item.id} value={item.id} control={<Radio {...configFormControl}/>} label={item.title} checked={myTripType === item.id} onChange={myTripTypeChange} />
                            )
                        })
                        }
                         

               
            </MuiRadioGroup>
        </FormControl>
        {myTripType === "One Way" && (
                <Grid item>
                <Grid item>
                  <Textfield
                    placeholder="Flying From"
                    label="FLYING FROM"
                    name='departure'
                    variant="filled"
                    fullWidth
                  />
                  </Grid>
                  <Grid item>
                  <Textfield
                    placeholder="Flying To"
                    label="FLYING TO"
                    name='arrival'
                    variant="filled"
                    fullWidth
                  />
                  </Grid>
                  <Grid item>
                  <DateTimePicker
                    name="departureDate"
                    label="Departure Date"
                  />
                  </Grid>

               
                </Grid>

              )}
              {myTripType === 'Two Way' && (
                <Grid item>
                <Grid item >
                  <Textfield
                    placeholder="Flying From"
                    label="FLYING FROM"
                    name='departure'
                    variant="filled"
                    fullWidth
                  />
                  </Grid>
                  <Grid item>
                  <Textfield
                    placeholder="Flying To"
                    label="FLYING TO"
                    name='arrival'
                    variant="filled"
                    fullWidth
                  />
                  </Grid>
                  <Grid item>
                  <DateTimePicker
                    name="departureDate"
                    label="Departure Date"
                  />
                  </Grid>
                  <Grid item>
                  <DateTimePicker
                    name="arrivealDate"
                    label="arrivealDate"
                  />
                  </Grid>
                  </Grid>
              )}
              {myTripType === 'Multicity' && (

<Grid item >
  <Grid item>

  <Textfield
    placeholder="Flying From"
    label="FLYING FROM"
    name='departure'
    variant="filled"

    fullWidth
  //className={classes.inputField}
  />
  </Grid>
  <Grid item>
  <Textfield
    placeholder="Flying To"
    label="FLYING TO"
    name='arrival'
    variant="filled"

    fullWidth
  
  //className={classes.inputField}
  />
  </Grid>
    <Grid item>

  <DateTimePicker
    name="departureDate"
    label="Departure Date"
  />
  </Grid>
  <Grid item>
  <DateTimePicker
    name="arrivealDate"
    label="arrivealDate"
  />
  </Grid>

  <Grid item xs={12}>
    <Textfield label="Other Cities" name='Othercities' multiline minRows={4} placeholder="Type other cities you would like to travel to here" variant="filled" fullWidth required />
  </Grid>

</Grid>
)}
        

        </div>
        
    )
}
export default RadioGroup