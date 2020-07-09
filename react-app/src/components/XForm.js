import React, { useState, useEffect } from "react";
import { Grid, TextField, withStyles, Button } from "@material-ui/core";
import useForm from "./useForm"
import { connect }  from "react-redux";
import * as actions from "../actions/xForm"

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
        let temp = {...errors}

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
        handleInputChange,
        resetForm
    } = useForm(initialFieldValues, validate, props.setCurrentId)

    const handleSubmit = e => {
        e.preventDefault()
        //console.log(values)
        if(validate())
        {
            //window.alert('Validation succeeded!')
            if(props.currentId == 0)
                props.createXForm(values, () => { window.alert('Inserted.')})
            else
                props.updateXForm(props.currentId, values, () => { window.alert('updated.')})
        }

        resetForm()
    }

    useEffect( () => {
        if(props.currentId != 0) {
            setValues({
                ...props.xFormList.find(x => x.id == props.currentId)
            })
            setErrors({})
        }
    }, [props.currentId])
 
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
                        <Button variant="contained" className={classes.smMargin}
                            onClick={resetForm} >Reset</Button>
                    </div>
                </Grid>
            </Grid>
        </form>
    );
}

const mapStateToProps = state => ({
    xFormList: state.xForm.list
})

const mapActionToProps = {
    createXForm: actions.create,
    updateXForm: actions.update
}

export default connect(mapStateToProps, mapActionToProps) (withStyles(styles) (XForm));