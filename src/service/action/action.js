import { v4 as uuidv4 } from 'uuid';
import {  addUser, edite, editeCondition, handlechange, positiondata,removeUser, search, sortdata, updatedata } from "../constant/constant";




export let Change = (name,value)=>{
    return{
        type:handlechange,
        payload:{name,value}
    }
}

export let Add = (user)=>{
    let date = new Date()
    return{
        type:addUser,
        payload:{...user,id:uuidv4(),time:date.getDate()}
    }
}
export let Remove = (user)=>{
    return{
        type:removeUser,
        payload:user
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
