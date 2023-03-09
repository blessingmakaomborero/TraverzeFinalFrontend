import React, { useState, useMemo } from 'react'
import { FormControl, FormLabel, RadioGroup as MuiRadioGroup, FormControlLabel, Radio } from '@material-ui/core';

export default function RadioGroup(props) {

    const { name, label, value, onChange, items } = props;

    const [myTripType, setmyTripType] = useState('One Way');
    const [active, setActive] = useState(1);
   
  
    
    const selectType = useMemo(() => myTripType === 'One Way' ,[myTripType]);
    const myTripTypeChange = (ev) => {
        setmyTripType(ev.target.value);
      };
    

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}>
                {
                   items.map((item,index )=>(
                            <FormControlLabel 
                            className={active === index + 1 ? "active" : ""}
                            onClick={() => {
                              { setActive(index + 1) };
                              { setmyTripType(item) } }}
                            key={item.id} value={item.id} control={<Radio />} label={item.title} checked={myTripType === item.id} onChange={myTripTypeChange} />
                        )
                    )
                }
            </MuiRadioGroup>
        </FormControl>
    )
}
