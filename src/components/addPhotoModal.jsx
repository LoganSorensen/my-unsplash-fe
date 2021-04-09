import React, { useState } from "react";
import axios from "axios";

const AddPhotoModal = (props) => {
  const [newPhoto, setNewPhoto] = useState({
    name: "",
    url: "",
  });

  const closeModal = () => {
    const blackout = document.querySelector(".body-blackout");
    const addPhotoModal = document.querySelector(".add-photo-modal");

    addPhotoModal.style.display = "none";
    blackout.style.display = "none";
    document.body.classList.remove("no-scroll");
  };

  const addPhoto = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/images", newPhoto)
      .then((res) => {
        props.addImage(res.data.image);
        setNewPhoto({ name: "", url: "" });
      })
      .catch((err) => console.log(err));
    closeModal();
  };

  const handleChange = (e) => {
    setNewPhoto({ ...newPhoto, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal add-photo-modal">
      <h3>Add a new photo</h3>
      <form onSubmit={addPhoto}>
        <label htmlFor="photo-label">Label</label>
        <input
          type="text"
          name="name"
          id="photo-label"
          value={newPhoto.name}
          placeholder="Photo Name"
          onChange={handleChange}
        />
        <label htmlFor="photo-url">Photo URL</label>
        <input
          type="text"
          name="url"
          id="photo-url"
          value={newPhoto.url}
          placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r..."
          onChange={handleChange}
        />
        <div className="buttons">
          <button type="reset" className="cancel-btn" onClick={closeModal}>
            Cancel
          </button>
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPhotoModal;
