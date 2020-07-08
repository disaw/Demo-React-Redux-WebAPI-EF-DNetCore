import React, { useState } from "react";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm"

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 250
        }
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 250
    },
    smMargin: {
        margin: theme.spacing(1)
    }
})

const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: ''
}

const XForm = ({classes, ...props}) => {

    //validate()
    //validate({fullName: 'Sam'})
    const validate = (fieldValues = values) => {
        let temp = {}

        if('fullName' in fieldValues) //Realtime field validation
            temp.fullName = fieldValues.fullName ? "" : "This field is required."

        if('email' in fieldValues)
        {
            //temp.email = fieldValues.email ? "" : "This field is required."
            temp.email = (/^$|.+@.+..+/).test(fieldValues.email) ? "" : "Email is not valid."
        }

        setErrors({
            ...temp
        })

        if(fieldValues == values)
            return Object.values(temp).every(x => x=="") 
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(initialFieldValues, validate)

    const handleSubmit = e => {
        e.preventDefault()
        //console.log(values)
        if(validate())
        {
            window.alert('Validation succeeded!')
        }
    }
 
    return (
        <form autoComplete="off" noValidate className={classes.root} onSubmit={handleSubmit}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField name="fullName" variant="outlined" 
                    label="Name" value={values.fullName}
                    onChange={handleInputChange}
                    //error={true}
                    //helperText={errors.fullName}
                    {...(errors.fullName && { error: true, helperText: errors.fullName })}
                    />
                </Grid>
                <Grid item xs={12}>
                <TextField name="mobile" variant="outlined" 
                    label="Mobile" value={values.mobile}
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField name="email" variant="outlined" 
                    label="Email" value={values.email}
                    onChange={handleInputChange}
                    //error={true}
                    //helperText={errors.email}
                    {...(errors.email && { error: true, helperText: errors.email })}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField name="address" variant="outlined" 
                        label="Address" value={values.address}
                        onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <Button variant="contained" color="primary" 
                            type="submit" className={classes.smMargin}>Submit</Button>
                        <Button variant="contained" className={classes.smMargin}>Reset</Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}

export default withStyles(styles) (XForm);