import axios from "axios";

require("dotenv").config();
var keys = require("../index");
export default {
    //job, type, country, city
    getJobsAuthenticJobs : () => {
        // if(!job && !country && !city && !type){
           return axios.get("https://cors-anywhere.herokuapp.com/https://authenticjobs.com/api/?api_key=" + keys.default.apikey + "&method=aj.jobs.search&format=json")
        // }
    }
}