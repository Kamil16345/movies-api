import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-type":"application/json"
        //"Access-Control-Allow-Origin":"*",
    },
    //methods: "GET,PUT,POST,DELETE,OPTIONS"
})