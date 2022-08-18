export const initialState = {
    fav: []
}

export const actionTypes = {
    ADD_TO_FAV: "ADD_TO_FAV"
}

const reducer = (state, action)=>{
    console.log(action)

    switch(action.type){
        case "ADD_TO_FAV":
            return{
                ...state,
                fav: [...state.fav, action.item],
            }
            default: state;
    }
}

export default reducer