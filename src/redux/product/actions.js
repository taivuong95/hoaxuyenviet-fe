import axios from "axios";
import { endPoints } from "../../services/config";
import { clearAuthUser } from "../../utilities/fnUtil";

const GET_PRODUCT_LIST = "GET_PRODUCT_LIST";
const ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT";
const UPDATE_PRODUCT_BY_ID = "UPDATE_PRODUCT_BY_ID";
const DELETE_PRODUCT_BY_ID = "DELETE_PRODUCT_BY_ID";
// get product list
const getProductList = res => {
  return {
    type: GET_PRODUCT_LIST,
    payload: res
  };
};

// get product list from server
const getProductListFromSV = () => {
  return dispatch => {
    axios.get(endPoints.GET_PRODUCT_LIST).then(data => {
      dispatch(getProductList(data));
    });
  };
};

// add new product to store
const addNewProduct = res => {
  return {
    type: ADD_NEW_PRODUCT,
    payload: res
  };
};

// create new product
const createNewProduct = data => {
  return dispatch => {
    axios
      .post(endPoints.CREATE_PRODUCT_BY_ADMIN, data)
      .then(() => {
        dispatch(addNewProduct(data));
      })
      .catch(err =>
        err.response.data.code === "002"
          ? clearAuthUser()
          : alert(
              "Mã Sản Phẩm Đã Tồn Tại Hoặc Gặp Lỗi Trong Quá Trình Tạo! Vui Lòng Tạo Lại!"
            )
      );
  };
};

// update product to store

const updateProductById = (id, data) => {
  return {
    type: UPDATE_PRODUCT_BY_ID,
    payload: {
      id,
      data
    }
  };
};

// update product to server
const updateProductToSV = (id, data) => {
  return dispatch => {
    axios
      .patch(endPoints.UPDATE_PRODUCT_BY_ADMIN + id, data)
      .then(() => {
        dispatch(updateProductById(id, data));
      })
      .catch(err => {
        err.response.data.code === "002"
          ? clearAuthUser()
          : alert(
              "Lỗi Cập Nhật Sản Phẩm Hoặc Sản Phẩm Chưa Có! Vui Lòng Cập Nhật Lại!"
            );
      });
  };
};

// delete product to store
const deleteProductById = id => {
  return {
    type: DELETE_PRODUCT_BY_ID,
    payload: id
  };
};

// delete product to server
const deleteProductToSV = id => {
  return dispatch => {
    axios
      .delete(endPoints.DELETE_PRODUCT_BY_ADMIN + id)
      .then(() => dispatch(deleteProductById(id)))
      .catch(err =>
        err.response.data.code === "002"
          ? clearAuthUser()
          : alert("Lỗi Xóa Sản Phẩm Hoặc Server Lỗi! Vui Lòng Kiểm Tra Lại!")
      );
  };
};

const actions = {
  GET_PRODUCT_LIST,
  ADD_NEW_PRODUCT,
  UPDATE_PRODUCT_BY_ID,
  DELETE_PRODUCT_BY_ID,
  getProductListFromSV,
  createNewProduct,
  updateProductToSV,
  deleteProductToSV
};

export default actions;
