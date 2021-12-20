import axios from "axios";
const apiGetEmpl="http://localhost:3001/api/employees";


export async function getEmplApi() {
    try{
        var json= await axios.get(apiGetEmpl);
        console.log(json.data);
        return json.data;
       }catch(error){
         console.log(error);
       }
}