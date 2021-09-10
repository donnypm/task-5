import React from "react";
import List from "./list";
import { useSelector } from "react-redux";

const FormList = (props) => {
  const { handleEdit } = props;
  const formList = useSelector((state) => state.formList);
  return (
    <div>
      {formList.map((list) => {
        return <List list={list} key={list.id} handleEdit={handleEdit} />;
      })}
    </div>
  );
};

export default FormList;
