import axios from "axios";

const localhost = 'http://localhost:3000';
export const Http = {
    get: async function (path, params, cb = () => {}) {
        try {
            let res = await axios.get(localhost + path, {
                params
            });
            return res.data;
        } catch (error) {
            console.error(error);
        }
    } 
}