const API_URL = "https://reqres.in/api/users";
export const GET_USER_DETAILS_REQUESTED = "GET_USER_DETAILS_REQUESTED";
export const GET_USER_DETAILS_LOADED = "GET_USER_DETAILS_LOADED";
export const GET_USER_DETAILS_FAILED = "GET_USER_DETAILS_FAILED";
export const GET_USER_DETAILS_LOADING = "GET_USER_DETAILS_LOADING";
export const CLEAR_USER_DETAILS_REQUESTED = "CLEAR_USER_DETAILS_REQUESTED";

export const getUserDetails = id => dispatch => {
  dispatch({
    type: GET_USER_DETAILS_REQUESTED
  });
  fetch(`${API_URL}/${id}`)
    .then(data => data.json())
    .then(jsonData =>
      dispatch({
        type: GET_USER_DETAILS_LOADED,
        data: jsonData.data
      })
    )
    .catch(error =>
      dispatch({
        type: GET_USER_DETAILS_FAILED,
        data: error
      })
    );
  dispatch({
    type: GET_USER_DETAILS_LOADING
  });
};

export const clearUserDetails = data => ({
  type: CLEAR_USER_DETAILS_REQUESTED,
  data
});
