import React, { useState } from "react";
import List from "./list";
import { useSelector } from "react-redux";
import styles from "/styles/Home.module.scss";

const FormList = (props) => {
  const { handleEdit } = props;
  const formList = useSelector((state) => state.formList);

  const [inputSearch, setInputSearch] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setInputSearch(e.target.value);
  };

  return (
    <div>
      <div className={styles.search}>
        <input
          name={inputSearch}
          type="text"
          placeholder="Search Title or Quantity or Price Here..."
          onChange={handleChange}
          value={inputSearch}
          className={styles.searchTerm}
        />
      </div>
      {formList
        .filter((list) => {
          if (inputSearch === "") {
            return list;
          } else if (
            (list.title.toLowerCase().includes(inputSearch.toLocaleLowerCase()),
            list.quantity
              .toLowerCase()
              .includes(inputSearch.toLocaleLowerCase()),
            list.price.toLowerCase().includes(inputSearch.toLocaleLowerCase()))
          ) {
            return list;
          }
        })
        .map((list) => {
          return <List list={list} key={list.id} handleEdit={handleEdit} />;
        })}
    </div>
  );
};

export default FormList;
