const  init_state ={
  language:""
}
export default function Reduceru(state = init_state,action){
      switch(action.type){
        case "languag" :
          return{
       language:action.payload}
            default: return state;
    }
    }
   

    
