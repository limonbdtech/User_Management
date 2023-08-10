import { v4 as uuidv4 } from 'uuid';
import { addProduct, decriment, edite, editeCondition, handlechange, incriment, positiondata, removeProduct, reset, search, sortdata, updatedata } from "../constant/constant";


export let Incriment = ()=>{
    return{
        type:incriment
    }
}
export let Decriment = ()=>{
    return{
        type:decriment
    }
}
export let Reset = ()=>{
    return{
        type:reset
    }
}

export let Change = (name,value)=>{
    return{
        type:handlechange,
        payload:{name,value}
    }
}

export let Add = (product)=>{
    let date = new Date()
    return{
        type:addProduct,
        payload:{...product,id:uuidv4(),time:date.getDate()}
    }
}
export let Remove = (product)=>{
    return{
        type:removeProduct,
        payload:product
    }
}
export let Edite = (condition)=>{
    return{
        type:edite,
        payload:condition
        
    }
}
export let EditeCondition = (id)=>{
    return{
        type:editeCondition,
        payload:id
    }
}

export let Update = (data)=>{
    return{
        type:updatedata,
        payload:data
    }
}
export let Searchdata = (data)=>{
    return{
        type:search,
        payload:data
    }
}
export let Positionmethod = (data)=>{
    return{
        type:positiondata,
        payload:data
    }
}

export let SortMehtod = (shotstatus)=>{
  return{
    type:sortdata,
    payload:shotstatus
  }
}