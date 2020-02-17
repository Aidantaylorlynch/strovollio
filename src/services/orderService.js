import axios from 'axios'
const BASE_URL = process.env['REACT_APP_BASE_URL'];

export const createOrder = async (order) => {
    console.log(order)
    const payload = {
        MerchantID: order.merchantID,
        MenuItemIDs: order.menuItemIDs
    }
    try {
        const request = await axios.post(BASE_URL + '/orders/' + order.merchantID, payload, { headers: { 'Accept': '*/*'}})
    } catch (error) {
        console.log("error posting order", error)
    }
}