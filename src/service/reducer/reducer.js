

import { addProduct, decriment, edite, editeCondition, handlechange, incriment, positiondata, removeProduct, reset,  search,  updatedata ,sortdata} from "../constant/constant"



let initialState = {
    count:10,
    edite:null,
    editecondition:null,
    search:"",  //filtering data
    position:"all", //filtering position
    sort:"normal",
    onchange:{
        fname:"",
        email:"",
        position:"",
    
    },
    user:[
        {
            fname:"limon",
            email:"limonbdtech2020@gmail.com",
            position:"fresher",
            id:"aekadl2323ae3"
        },
        {
            fname:"rakib",
            email:"rimon@gmail.com",
            position:"fresher",
            id:"asdfaskllkasdf2343"
        },
        {
            fname:"sumon",
            email:"limonbdtech2020@gmail.com",
            position:"fresher",
            id:"aekadl2323ae3asdasf3434"
        },
        {
            fname:"limon",
            email:"loulook2020@gmail.com",
            position:"backend developer",
            id:"aekadl2323ae3asdf3452"
        },
        {
            fname:"ryad",
            email:"xyz.outlook.com",
            position:"senior softwer enginner",
            id:"aekadl2323ae3456435sas"
        },
        {
            fname:"refat",
            email:"sakibhotmail.org",
            position:"fresher",
            id:"343gffaekadl2323ae3"
        },
        {
            fname:"tsnim ahmed",
            email:"hp@gmail.com",
            position:"fresher",
            id:"764534sdfaekadl2323ae3"
        },
        {
            fname:"rimon",
            email:"abc@gmail.com",
            position:"softwear arcitech",
            id:"asdfkj43493aekadl2323ae3"
        },
    ]
}

export let Counter =(state=initialState,action)=>{
    switch (action.type) {
      case incriment:
          return {
              ...state,
              count:state.count + 1
          }
          
      case decriment:
          return {
              ...state,
              count:state.count - 1
          }
          
      case reset:
          return {
              ...state,
              count:state.count  = 0
          }


      case handlechange :
          return {
              ...state,
              onchange:{
            ...state.onchange,
             [action.payload.name]:action.payload.value
              }
          }
      case addProduct:
          return {
              ...state,
              product:[...state.product,action.payload]
          }

      case removeProduct:
          return {
              ...state,
              product: state.product.filter((item)=> item.id !== action.payload)
          }

    
          case edite:
            return{
                ...state,
                edite:action.payload
            }
          
          case editeCondition:
            return{
                ...state,
                editecondition:action.payload
            }

        
          
          case updatedata:
             return{
                ...state,
                product:state.product.map((item)=>{
       if(item.id === action.payload.id){
              return action.payload
       }else{
        return item
       }}),
            }
          
        case search:
            return{
                 ...state,
                 search:action.payload
            }

            case positiondata :
                return {
                    ...state,
                    position:action.payload
        }
          
        case sortdata :
            return{
                ...state,
                sort:action.payload
            }
        
          
    
      default:
          return state
    }
}