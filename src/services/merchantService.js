import axios from 'axios'
const BASE_URL = 'http://localhost:5000/api'

export const getMerchants = async () => {
    try {
        const request = await axios.get(BASE_URL + '/merchants')
        return request.data;
    } catch (error) {
        console.log("error fetching merchants", error)
    }
}

export const getMenuItems = async (merchantID) => {
    try {
        const request = await axios.get(BASE_URL + '/merchants/' + merchantID + '/menu')
        return request.data.menuItems;
    } catch (error) {
        console.log("error fetching menu", error)
    }
}