import axios from 'axios';


export default axios.create({
    baseURL: "https://traverzetravel.herokuapp.com/",
    headers: {
        "Content-type" : "application/json",
    },
});