export const LOAD_ACCOUNTS = 'LOAD_ACCOUNTS';


export const loadAccounts = (accounts) => ({
  type: LOAD_ACCOUNTS,
  accounts
});

export const fetchUserAccounts = () => dispatch => {
  fetch('http://localhost:8000/auth')
  .then(res => res.json())
  .then(data => {
    if (data.error) throw new Error(data.error.msg)
    else dispatch(loadAccounts(data.accounts));
  })
  .catch(err => console.warn(err))
}


const BankAccountsReducer = (accounts = [], action) => {
  switch (action.type) {
    case LOAD_ACCOUNTS:
      return action.accounts;
    default:
      return accounts;
  }
}

export default BankAccountsReducer;
