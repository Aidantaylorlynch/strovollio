export const getMerchants = () => {
    console.log("running getMerchants")
    return [
        {
            name: "Bills Bar",
            merchantID: 1,
        },
        {
            name: "Freds Eatery",
            merchantID: 2,
        },
        {
            name: "The Tuck Shop",
            merchantID: 3,
        },
    ]
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