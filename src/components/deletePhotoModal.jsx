import React from "react";
import axios from "axios";

const DeletePhotoModal = (props) => {
  const handleChange = (e) => {};

  const closeModal = () => {
    const blackout = document.querySelector(".body-blackout");
    const deletePhotoModal = document.querySelector(".delete-photo-modal");

    deletePhotoModal.style.display = "none";
    blackout.style.display = "none";
    document.body.classList.remove("no-scroll");
  };

  const deletePhoto = (e) => {
    e.preventDefault();
    console.log(props.selectedImageId);
    axios
      .delete(`http://localhost:5000/images/${props.selectedImageId}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    props.removeImage(props.selectedImageId);
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
