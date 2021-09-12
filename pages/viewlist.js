import Head from "next/head";
import React, { useState } from "react";
import FormList from "../components/formlist";
import Header from "../components/header";
import data from "../data-dummy/data.json";
import formList from "../components/formlist";
import styles from "../styles/Home.module.scss";
import { useDispatch } from "react-redux";
import { addList, updateList } from "../components/formSlice";

function ViewList(list) {
  const dispatch = useDispatch();

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [userInput, setUserInput] = useState({
    title: "",
    quantity: "",
    price: "",
  });

  const handleChange = (e) => {
    let data = { ...userInput };
    data[e.target.name] = e.target.value;
    setUserInput(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      (userInput.title === "",
      userInput.quantity === "",
      userInput.price === "")
    ) {
      return false;
    }

    if (isUpdate.status) {
      dispatch(
        updateList({
          id: list.id,
          title: userInput.title,
          quantity: userInput.quantity,
          price: userInput.price,
        })
      );
      alert("Berhasil EDIT Data");
    } else {
      dispatch(
        addList({
          title: userInput.title,
          quantity: userInput.quantity,
          price: userInput.price,
        })
      );
      alert("Berhasil TAMBAH Data");
    }

    setUserInput({ title: "", quantity: "", price: "" });
    setIsUpdate({ id: null, status: false });
  };

  const handleEdit = (list) => {
    setUserInput({
      title: list.title,
      quantity: list.quantity,
      price: list.price,
    });
    setIsUpdate({ id: list.id, status: true });
  };

  return (
    <div className={styles.content}>
      <div>
        <div className={styles.content}>
          <Head>
            <title>List</title>
            <meta name="keywords" content="brands"></meta>
          </Head>

          <h2 className={styles.bgh1}>List Form</h2>

          <div className={styles.formcontainer}>
            <form id="form" className={styles.form}>
              <p>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className={styles.input}
                  value={userInput.title}
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  type="number"
                  name="quantity"
                  placeholder="Quantity"
                  className={styles.input}
                  value={userInput.quantity}
                  onChange={handleChange}
                />
              </p>
              <p>
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  className={styles.input}
                  value={userInput.price}
                  onChange={handleChange}
                />
              </p>
              <button
                type="button"
                onClick={handleSubmit}
                className={styles.button}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Header />
      <FormList formList={formList} handleEdit={handleEdit} />
    </div>
  );
}

export default ViewList;
