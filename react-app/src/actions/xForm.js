import api from "./api";

export const ACTION_TYPES = {
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL'
}

const formatData = data => ({
    ...data,
    //age: parseInt(data.age ? data.age : 0) //convert string inputs to int for the webapi
})

export const fetchAll = () => dispatch => {
    api.xForm().fetchAll()
    .then(
        response => {
            console.log(response);

            dispatch({ //redux
                type:ACTION_TYPES.FETCH_ALL,
                payload: response.data
            })
        }
    )
    .catch(err => console.log(err))   
}

export const create = (data, onSuccess) => dispatch => {
    data = formatData(data)

    api.xForm().create(data)
    .then(
        response => {
            console.log(response);
            
            dispatch({
                type:ACTION_TYPES.CREATE,
                payload: response.data
            })

            onSuccess()
        }
    )
    .catch(err => console.log(err))   
}

export const update = (id, data, onSuccess) => dispatch => {
    data = formatData(data)

    api.xForm().update(id, data)
    .then(
        response => {
            console.log(response);
            
            dispatch({
                type:ACTION_TYPES.UPDATE,
                payload: { id, ...data }
            })

            onSuccess()
        }
    )
    .catch(err => console.log(err))   
}

export const deleteForm = (id, onSuccess) => dispatch => { //'there is already a keyword with the name 'delete'

    api.xForm().delete(id)
    .then(
        response => {
            console.log(response);
            
            dispatch({
                type:ACTION_TYPES.DELETE,
                payload: id
            })

            onSuccess()
        }
    )
    .catch(err => console.log(err))   
}