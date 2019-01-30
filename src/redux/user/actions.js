import axios from "axios";
import { endPoints } from "../../services/config";
import { clearAuthUser } from "../../utilities/fnUtil";

const GET_USER_LIST = "GET_USER_LIST";
// const ADD_NEW_USER = "ADD_NEW_User";
// const UPDATE_User_BY_ID = "UPDATE_USER_BY_ID";
const DELETE_USER_BY_ID = "DELETE_USER_BY_ID";
// get User list
const getUserList = res => {
  return {
    type: GET_USER_LIST,
    payload: res
  };
};

// get User list from server
const getUserListFromSV = () => {
  return dispatch => {
    axios.get(endPoints.GET_USER_LIST).then(data => {
      dispatch(getUserList(data));
    });
  };
};

// add new User to store
// const addNewUser = res => {
//   return {
//     type: ADD_NEW_USER,
//     payload: res
//   };
// };

// create new User
// const createNewUser = data => {
//   return dispatch => {
//     axios
//       .post(endPoints.CREATE_USER_BY_ADMIN, data)
//       .then(() => {
//         dispatch(addNewUser(data));
//       })
//       .catch(err =>
//         err.response.data.code === "002"
//           ? clearAuthUser()
//           : alert(
//               "Mã Sản Phẩm Đã Tồn Tại Hoặc Gặp Lỗi Trong Quá Trình Tạo! Vui Lòng Tạo Lại!"
//             )
//       );
//   };
// };

// update User to store

// const updateUserById = (id, data) => {
//   return {
//     type: UPDATE_USER_BY_ID,
//     payload: {
//       id,
//       data
//     }
//   };
// };

// update User to server
// const updateUserToSV = (id, data) => {
//   return dispatch => {
//     axios
//       .patch(endPoints.UPDATE_USER_BY_ADMIN + id, data)
//       .then(() => {
//         dispatch(updateUserById(id, data));
//       })
//       .catch(err => {
//         err.response.data.code === "002"
//           ? clearAuthUser()
//           : alert(
//               "Lỗi Cập Nhật Sản Phẩm Hoặc Sản Phẩm Chưa Có! Vui Lòng Cập Nhật Lại!"
//             );
//       });
//   };
// };

// delete User to store
const deleteUserById = id => {
  return {
    type: DELETE_USER_BY_ID,
    payload: id
  };
};

// delete User to server
const deleteUserToSV = id => {
  return dispatch => {
    axios
      .delete(endPoints.DELETE_USER_BY_ADMIN + id)
      .then(() => dispatch(deleteUserById(id)))
      .catch(err =>
        err.response.data.code === "002"
          ? clearAuthUser()
          : alert("Lỗi Xóa Sản Phẩm Hoặc Server Lỗi! Vui Lòng Kiểm Tra Lại!")
      );
  };
};

const actions = {
  GET_USER_LIST,
  DELETE_USER_BY_ID,
  getUserListFromSV,
  deleteUserToSV
};

export default actions;
