import React, { useState, useEffect } from "react";
import { connect }  from "react-redux";
import * as actions from "../actions/xForm"
import XForm from "./XForm";
import { Grid, Paper, Table, TableContainer, TableHead, TableCell, TableBody, TableRow, withStyles, ButtonGroup, Button } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useToasts } from "react-toast-notifications"
import IconButton from '@material-ui/core/IconButton';

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

    const [currentId, setCurrentId] = useState(0)

    useEffect(() => {
        props.fetchAllFormList()
    }, [])//componentDidMount

    const { addToast } = useToasts()

    const onDelete = recordId => {
        if(window.confirm('Are you sure to delete this record?'))
            props.deleteSelectedForm(recordId, () => addToast("Deleted successfully", { appearance: 'info' }))
    }

    return (
        <Paper className={classes.paper} elevation={3}>                    
            <Grid container>
                <Grid item xs={4}>
                    <XForm {...({ currentId, setCurrentId })} />
                </Grid>
                <Grid item xs={8}>
                    <TableContainer>
                        <Table>
                            <TableHead className={classes.root}>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Mobile</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.xFormList.map((record, index) => {
                                        return(<TableRow key={index} hover>
                                            <TableCell>{record.fullName}</TableCell>
                                            <TableCell>{record.mobile}</TableCell>
                                            <TableCell>{record.email}</TableCell>
                                            <TableCell>
                                                <ButtonGroup variant="text">
                                                    <Button><EditIcon color="primary" 
                                                        onClick={ () => {setCurrentId(record.id)} } />
                                                    </Button>
                                                    <Button><DeleteIcon color="secondary" 
                                                        onClick={ () => onDelete(record.id) } />
                                                    </Button>
                                                </ButtonGroup>
                                            </TableCell>
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
    fetchAllFormList: actions.fetchAll,
    deleteSelectedForm: actions.deleteForm,
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles) (FormList));