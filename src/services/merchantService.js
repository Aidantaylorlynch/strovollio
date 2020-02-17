import axios from 'axios'
const BASE_URL = process.env['REACT_APP_BASE_URL'];

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
        const request = await axios.get(BASE_URL + '/merchants/' + merchantID + '/menuitems')
        return request.data.menuItems;
    } catch (error) {
        console.log("error fetching menu", error)
    }
}