import React from "react";
import { Modal } from "antd";
import Form from "../Form/Form";

const CustomModal = props => {
  return (
    <Modal {...props}>
      <Form
        idForm={props.idForm}
        nameForm={props.nameForm}
        originalForm={props.originalForm}
        setState={props.setStateForm}
        btnName={props.btnName}
        editForm={props.editForm}
      />
    </Modal>
  );
};

export default CustomModal;
