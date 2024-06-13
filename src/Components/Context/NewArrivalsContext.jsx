import { createContext, useState } from "react";
import { AllProductsDatas } from "../AllProductsDatas/AllProductsDatas";

export const ArrivalContext = createContext(null);

// default cart function
const getdefaultCart = () => {
    let cart = {};
    for (let index = 0; index < AllProductsDatas.length; index++) {
        cart[AllProductsDatas[index].id] = 0;
    }
    return cart;
};

const ArrivalContextProvider = (props) => {
    const [cartItem, setCartItem] = useState(getdefaultCart());

    // add to cart item function
    const addToCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }

    // remove cart item function
    const removeFromCart = (itemId) => {
        setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }

    // total item function
    const getTotalAmount = () => {
        let TotalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = AllProductsDatas.find((product) => product.id === Number(item));
                TotalAmount += itemInfo.price * Number(cartItem[item]);
            }
            
        } 
        return TotalAmount;
    }


    const gettotalcartitem = () => {
        let total = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0){
                total += cartItem[item];
            }
        }
        return total;
    }


    // set the search term
    const updateSearchTerm = (term) => {
        setSearchTerm(term.toLowerCase());
    }


    const contextValue = { gettotalcartitem, getTotalAmount, AllProductsDatas, cartItem, addToCart, removeFromCart, updateSearchTerm };

    return (
        <ArrivalContext.Provider value={contextValue}>
            {props.children}
        </ArrivalContext.Provider>
    );
};

export default ArrivalContextProvider;
