import React from "react";
import styles from "../styles/Home.module.scss";
import { useDispatch } from "react-redux";
import { deleteList } from "../components/formSlice";

const List = (props) => {
  const dispatch = useDispatch();

  const { list, handleEdit } = props;

  return (
    <div>
      <div className={styles.list}>
        <div className={styles.p_list}>
          <p className={styles.list_title}>{list.title} </p>
          <p>{list.quantity} </p>
          <p>{list.price}</p>
        </div>
        <div className={styles.button_list}>
          <button
            onClick={() => handleEdit(list)}
            className={styles.button_edit}
          >
            Edit
          </button>
          <button
            onClick={() =>
              dispatch(
                deleteList({ id: list.id }),
                alert("Anda Menghapus " + list.title)
              )
            }
            className={styles.button_delete}
          >
            Delete
          </button>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default List;
