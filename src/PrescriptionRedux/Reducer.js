const initialstate = {
    drugs:[]
}

const reducer = (state = initialstate, action)=>{
    switch(action.type){
        case "add to favourite":
            return {
                ...state,
                drugs: [...state.drugs ,action.payload],
                
        }
        case "remove from favourite":
            return {
                ...state,
                movies: state.drugs.filter((item)=> item !== action.drugid) ,
            }  
        default: 
            return state
    }

}


export default reducer