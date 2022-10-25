console.log("enter hua");
export const initialState = "";

export const reducer  = (state , action)=>{
        console.log("of inside = " + state );
        if(action.type === 'USER'){
              console.log("reducer of inside = " + state );  
           return action.payload;
        }

        return state;
} 