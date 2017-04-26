export const TOGGLE_COMPANY = 'TOGGLE_COMPANY';
export const toggleCompany = (companyIndex) => ({
  type: TOGGLE_COMPANY,
  target: companyIndex
});

export const FETCH_FAILURE = 'FETCH_FAILURE';
export const fetchFailure = (error) => ({
    type: FETCH_FAILURE,
    error
});

export const FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS';
export const fetchUserSuccess = (data) => ({
    type: FETCH_USER_SUCCESS,
    userCompanies: data
});

export const SET_USERNAME = 'SET_USERNAME';
export const setUsername = (username) => ({
  type: SET_USERNAME,
  username: username
});

export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const addUserSuccess = (data) => ({
    type: ADD_USER_SUCCESS,
});

export const ADD_USER_COMPANIES_SUCCESS = 'ADD_USER_COMPANIES_SUCCESS';
export const addUserCompaniesSuccess = (data) => ({
    type: ADD_USER_COMPANIES_SUCCESS,
    //TODO Not currently doing anything with response from server
});

export const addUser = (formData) => dispatch => {
  return fetch(`/api/users`,
    {
      headers: new Headers({ 'Content-Type': 'application/json' }),
      method: "POST",
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
        dispatch(addUserSuccess(data.cards));
    })
    .catch(error => {
        dispatch(fetchFailure(error));
    })
}

export const fetchUser = () => dispatch => {
  const headers = Cookies.load('headers');
  return fetch(`/api/users/?token=${cookie.load('token')}`, {headers: headers})
  .then(response => {
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return response.json();
  })
  .then(data => {
    dispatch(fetchUserSuccess(data.companies));
  })
  .catch(error => {
    dispatch(fetchFailure(error));
  })
}

export const addUserCompanies = (formData) => dispatch => {
  return fetch(`/api/users`,
    {
      headers: new Headers({ 'Content-Type': 'application/json' }),
      method: "PUT",
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then(data => {
        dispatch(addUserCompaniesSuccess(data.companies));
    })
    .catch(error => {
        dispatch(fetchFailure(error));
    })
}
