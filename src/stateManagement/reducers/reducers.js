const initialState = {
    shopData: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SHOP_DATA":{
            return{
                shopData:action.payload
            }
        }
        default: return state;
    };
}

export default reducer;