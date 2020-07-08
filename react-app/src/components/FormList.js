import React, { useState, useEffect } from "react";
import { connect }  from "react-redux";
import * as actions from "../actions/xForm"
import XForm from "./XForm";
import { Grid, Paper, Table, TableContainer, TableHead, TableCell, TableBody, TableRow, withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        "& .MuiTableCell-head": {
            fontSize: "1.25rem"
        }
    },
    paper: {
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})
//props.classes
//const [classes, ...props] = props
const FormList = ({classes,...props}) => {
    //const [x, setX]= useState(0);
    //setX(5);

    useEffect(() => {
        props.fetchAllFormList()
    }, [])//componentDidMount

    return (
        <Paper className={classes.paper} elevation={3}> 
            <Grid container>
                <Grid item xs={4}>
                    <XForm/>
                </Grid>
                <Grid item xs={8}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Email</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.xFormList.map((record, index) => {
                                        return(<TableRow key={index} hover>
                                            <TableCell>{record.fullName}</TableCell>
                                            <TableCell>{record.mobile}</TableCell>
                                            <TableCell>{record.email}</TableCell>
                                        </TableRow>)
                                    })
                                }
                                <TableRow>

                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Paper>
    );
}

const mapStateToProps = state => ({
    xFormList: state.xForm.list
})

const mapActionToProps = {
    fetchAllFormList: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles) (FormList));