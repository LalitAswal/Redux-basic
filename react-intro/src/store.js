import {createStore} from "redux";


/* eslint-disable no-unused-vars */
// pure redux code 
const initialState = {
    balance: 0,
    loan: 0,
    loanPurpose: "",
};
 
// eslint-disable-next-line no-unused-vars
function reducer(state = initialState, action) {
    switch(action.type){
        case "account/deposit":
            return  { ...state, balance: state.balance + action.payload};
        case "account/withdraw":
            return { ...state, balance: state.balance - action.payload};
        case "account/requestLoan":
            if(state.loan > 0) return state;
            //later
            return { ...state, loan: action.payload.amount,

                loanPurpose: action.payload.purpose, 
                balance: state.balance - state.loan
            };
    case "account/payLoan":
        return {
            ...state,
            loan:0,
            loanPurpose: "",
            balance: state.balance - state.loan,
        };

        default:
            return state
            
    }
}


const store = createStore(reducer);

// store.dispatch({type: "account/deposit", payload: 500});

// console.log('Testing Redux')
// console.log(store.getState())
// store.dispatch({type: "account/withdraw", payload:200 })
// console.log(store.getState())
// store.dispatch({type: "account/requestLoan", payload: {
//     amount: 1000, purpose: "buy a car"
// }  })

// console.log(store.getState())

// store.dispatch({type:"account/payLoad"});
// console.log(store.getState());
 

// action creater

function deposit(amount) {
    return { type: "account/deposit", payload: amount}

}  

function withdraw(amount) {
    return { type: "account/withdraw", payload: amount}
}
function requestLoan(amount, purpose) {
    return {type: "account/requestLoan",
     payload: { amount, purpose}  }
}
function payLoan() {
    return { type: "account/payLoad"}
}

store.dispatch(deposit(500));
store.dispatch(withdraw(200));
console.log(store.getState())

store.dispatch(requestLoan(1000, "Buy a cheap car"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());
