import axios from 'axios';
export const GET_USERS_LIST = 'GET_USERS_LIST';
export const GET_USERS_DETAIL = 'GET_USERS_DETAIL';
export const POST_USER_CREATE = 'POST_USER_CREATE';
export const PUT_USER_EDIT = 'PUT_USER_EDIT';

export const getUsersList = () => {
  return (dispatch) => {
    axios
      .get(
        'https://my-json-server.typicode.com/dimasrifalta/generasi-terburuk-api/users'
      )
      .then(function (response) {
        console.log(response);
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_LIST,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const getUsersDetail = (id) => {
  return (dispatch) => {
    axios
      .get(
        'https://my-json-server.typicode.com/dimasrifalta/generasi-terburuk-api/users/' +
          id
      )
      .then(function (response) {
        console.log(response);
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postUserCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        'https://my-json-server.typicode.com/dimasrifalta/generasi-terburuk-api/users',
        data
      )
      .then(function (response) {
        console.log(response);
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const puUserUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        'https://my-json-server.typicode.com/dimasrifalta/generasi-terburuk-api/users/' +
          id,
        data
      )
      .then(function (response) {
        console.log(response);
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(
        'http://my-json-server.typicode.com/afifbasya/reactjs-redux/users/' + id
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteUsersDetail = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};

export const deleteData = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USERS_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });

    dispatch({
      type: POST_USER_CREATE,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
