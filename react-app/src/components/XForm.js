import React, { useState } from "react";
import { Grid, TextField, withStyles } from "@material-ui/core";
import useForm from "./useForm"

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            minWidth: 250
        }
    }
})

const initialFieldValues = {
    fullName: '',
    mobile: '',
    email: '',
    address: ''
}

const XForm = ({classes, ...props}) => {
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues)
 
    return (
        <form autoComplete="off" noValidate className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <TextField name="fullName" variant="outlined" 
                    label="Name" value={values.fullName}
                    onChange={handleInputChange}
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
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField name="address" variant="outlined" 
                        label="Address" value={values.address}
                        onChange={handleInputChange}
                    />
                </Grid>
            </Grid>
        </form>
    );
}

export default withStyles(styles) (XForm);