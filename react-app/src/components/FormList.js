import React, { useState, useEffect } from "react";
import { connect }  from "react-redux";
import * as actions from "../actions/xForm"

const FormList = (props) => {
    //const [x, setX]= useState(0);
    //setX(5);

    useEffect(()=>{
        props.fetchAllFormList()
    }, [])//componentDidMount

    return (<div>from FormList</div>);
}

const mapStateToProps = state => ({
        xFormList: state.xForm.list
})

const mapActionToProps ={
    fetchAllFormList: actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(FormList);