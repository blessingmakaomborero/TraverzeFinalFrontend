import React from 'react'
import MuiPhoneNumber from "material-ui-phone-number";

export default function InputPhonenumber(props) {


    const { name, label, value,error, onChange } = props;
    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })
    

    return (
        <MuiPhoneNumber
            data-cy="phoneNumbers"
            variant="filled"
            defaultCountry={"zw"}
            label={label}
            name={name}
            value={value}
            onChange={number =>onChange(convertToDefEventPara(name,number))}
            {...(error && {error:true,helperText:error})}
           
            
            
        />

    )
}
