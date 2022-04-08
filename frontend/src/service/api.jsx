import axios from "axios";

const Api = axios.create({
    baseURL: "https://grandbluetravels.herokuapp.com/"
})

export default Api;