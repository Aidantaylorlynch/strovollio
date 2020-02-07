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

export const getMenuItems = (merchantID) => {
    return [
        {
            menuItemID: 1,
            name: "coke",
            description: "250 ml can",
            price: 1.00
        },
        {
            menuItemID: 2,
            name: "chicken and rice",
            description: "boiled rice and roasted chicken",
            price: 11.00
        },
        {
            menuItemID: 3,
            name: "corona",
            description: "bottle of corona beer",
            price: 6.00
        },
        {
            menuItemID: 4,
            name: "spaghetti",
            description: "red sauce and pasta",
            price: 1.00
        },
        {
            menuItemID: 5,
            name: "icecream",
            description: "your choice of 3 flavours - chocolate, strawberry and vanilla",
            price: 5.00
        },
    ]
}