export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      return{
        ...state,
        transactions: state.transactions.filter((trans) => parseInt(trans.id) !== parseInt(action.payload) )
      } 
      
    case 'ADD_TRANSACTION':
      return{
        ...state,
        transactions: [action.payload, ...state.transactions]
      } 
      
    default:
        return state;

  }
}
