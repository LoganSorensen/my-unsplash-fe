import React from "react";

const Photo = ({ image }) => {
    const openModal = () => {
        const blackout = document.querySelector(".body-blackout");
        const deletePhotoModal = document.querySelector('.delete-photo-modal');
    
        document.body.classList.add("no-scroll");
        blackout.style.display = "block";
        deletePhotoModal.style.display = 'block';
    }
  return (
    <div className="photo">
      <div className="img-overlay">
        <div className="delete-btn-cont">
          <button onClick={openModal}>delete</button>
        </div>
        <p>{image.name}</p>
      </div>
      <img src={image.url} alt={image.name} />
    </div>
  );
};

export default Photo;
