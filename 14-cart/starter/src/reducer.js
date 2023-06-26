import { 
    CLEAR_CART, 
    REMOVE, 
    INCREASE,
    DECREASE,
    LOADING,
    DISPLAY_ITEM 
} from "./action";

const reducer =(state,action)=>{

    if(action.type == CLEAR_CART){
        return {...state,cart:new Map()}
    }
    
    if(action.type == REMOVE){
        const newCart = new Map(state.cart)
        newCart.delete(action.id.id)
        return {...state,cart:newCart}
    }

    if(action.type == INCREASE){
        const newCart = new Map(state.cart)
        const itemId = action.id.id
        const item = newCart.get(itemId)
        const newItem = {...item,amount:item.amount++}
        newCart.set(itemId,newItem)
        return {...state,cart:newCart}
    }

    if(action.type == DECREASE){
        const newCart = new Map(state.cart)
        const itemId = action.id.id
        const item = newCart.get(itemId)
        if(item.amount > 0){
            const newItem = {...item,amount:item.amount--}
            newCart.set(itemId,newItem)
            return {...state,cart:newCart}
        }else{
            newCart.delete(itemId)
            return {...state,cart:newCart}
        }
       
    }

    if(action.type == LOADING){
        return{...state,loading: true}
    }

    if(action.type == DISPLAY_ITEM){
        const newCart = new Map(action.payload.cart.map((item)=>[item.id,item]))
        return {...state,loading:false,cart:newCart}
        // return {...state,loading:false,cart:action.payload.cart}
    }
    throw new Error('no matching type')

}

export default reducer;