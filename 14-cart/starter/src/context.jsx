import { createContext } from "react";
import { useContext,useReducer, useEffect } from "react";
import reducer from './reducer'
import data from './data'

const AppContext = createContext()
import { 
    CLEAR_CART, 
    REMOVE, 
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEM } from "./action";
import { getTotal } from "./utils";
const url = 'https://www.course-api.com/react-useReducer-cart-project';

const carItems = data.map((item)=>[item.id,item])


const initialState = {
    loading:false,
    cart:new Map()
}

export const AppProvider=({children})=>{
    const [state,dispatch] = useReducer(reducer,initialState)
    const {totalAmount,totalCost} = getTotal(state.cart)
    const clearCart =()=>{
        dispatch({type:CLEAR_CART})
    }

    const removeCart =(id)=>{
        dispatch({type:REMOVE,id:{id}})
    }
    const addCart =(id)=>{
        dispatch({type:INCREASE,id:{id}})
    }

    const decreaseCart =(id)=>{
        dispatch({type:DECREASE,id:{id}})
    }
    const fetchData = async()=>{
        dispatch({type:LOADING})
        const res = await fetch(url)
        const cart = await res.json()
        dispatch({type:DISPLAY_ITEM, payload:{cart}})
    }
    useEffect(()=>{
        fetchData();
    },[])

    return(
        <AppContext.Provider value={{...state,
        clearCart,
        removeCart,
        addCart,
        decreaseCart,
        totalAmount,
        totalCost}} >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}