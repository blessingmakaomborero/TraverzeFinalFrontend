
import React from 'react'
import { TextField } from '@material-ui/core';

export default function Messagebox(props) {

    const { name, label, value,error=null, onChange } = props;
    return (
        <TextField
            variant="filled"
            label={label}
            name={name}
            value={value}
            multiline minRows={4} 
            onChange={onChange}
            fullWidth
            required 
            {...(error && {error:true,helperText:error})}
        />
    )
}