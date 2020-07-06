import axios from "axios";

const baseUrl = "http://localhost:60900/api/"

export default {
    xForm(url = baseUrl + 'forms/') {
        return {
            fetchAll : () => axios.get(url),
            fetById : id => axios.get(url + id),
            create : newRecord => axios.post(url, newRecord),
            update : (id, updateRecord) => axios.put(url + id, updateRecord),
            delete : id => axios.delete(url + id)
        }
    }
}