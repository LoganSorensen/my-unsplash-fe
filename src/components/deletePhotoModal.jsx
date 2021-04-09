import React, { useState } from "react";
import axios from "axios";

const DeletePhotoModal = (props) => {
  const [auth, setAuth] = useState({
    password: "",
  });

  const handleChange = (e) => {
    setAuth({ password: e.target.value });
  };

  const closeModal = () => {
    const blackout = document.querySelector(".body-blackout");
    const deletePhotoModal = document.querySelector(".delete-photo-modal");

    deletePhotoModal.style.display = "none";
    blackout.style.display = "none";
    document.body.classList.remove("no-scroll");
  };

  const deletePhoto = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/images/${props.selectedImageId}`, {
        data: auth,
      })
      .then((res) => {
        props.removeImage(props.selectedImageId);
        setAuth({ password: "" });
      })
      .catch((err) => console.log(err));
    closeModal();
  };

  return (
    <div className="modal delete-photo-modal">
      <h3>Are you sure?</h3>
      <form onSubmit={deletePhoto}>
        <label htmlFor="delete-pw">Password</label>
        <input
          type="password"
          name="password"
          id="delete-pw"
          placeholder="*********"
          value={auth.password}
          onChange={handleChange}
        />
        <div className="buttons">
          <button type="reset" className="cancel-btn" onClick={closeModal}>
            Cancel
          </button>
          <button type="submit" className="delete-btn">
            Delete
          </button>
        </div>
      </form>
    </div>
  );
};

export default DeletePhotoModal;
