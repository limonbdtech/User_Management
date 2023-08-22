

import { addUser,edite, editeCondition, handlechange,  positiondata, removeUser,search,  updatedata ,sortdata} from "../constant/constant"



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
            fname:"Limon",
            email:"limonbdtech2020@gmail.com",
            position:"frontend developer",
            id:"aekadl2323ae3"
        },
        {
            fname:"rakib",
            email:"rimon@gmail.com",
            position:"backend developer",
            id:"asdfaskllkasdf2343"
        },
        {
            fname:"sumon",
            email:"sumon2015@gmail.com",
            position:"frontend developer",
            id:"aekadl2323ae3asdasf3434"
        },
        {
            fname:"Limon Hosen",
            email:"limon2020@outlook.com",
            position:"backend developer",
            id:"aekadl2323ae3asdf3452"
        },
        {
            fname:"Ryad Hasan",
            email:"xyz.outlook.com",
            position:"senior softwer enginner",
            id:"aekadl2323ae3456435sas"
        },
        {
            fname:"Refat Ahmed",
            email:"sakib34334@hotmail.com",
            position:"frontend developer",
            id:"343gffaekadl2323ae3"
        },
        {
            fname:"Tasnim Ahmed",
            email:"hp230@gmail.com",
            position:"backend developer",
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

export let User =(state=initialState,action)=>{
    switch (action.type) {
    
  case handlechange :
          return {
              ...state,
              onchange:{
            ...state.onchange,
             [action.payload.name]:action.payload.value
              }
          }
      case addUser:
          return {
              ...state,
              user:[...state.user,action.payload]
          }

      case removeUser:
          return {
              ...state,
              user: state.user.filter((item)=> item.id !== action.payload)
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
                user:state.user.map((item)=>{
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