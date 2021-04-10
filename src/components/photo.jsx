import React from "react";

const Photo = ({ setSelectedImageId, image }) => {
  const openModal = () => {
    const blackout = document.querySelector(".body-blackout");
    const deletePhotoModal = document.querySelector(".delete-photo-modal");

    document.body.classList.add("no-scroll");

    blackout.style.display = "block";
    blackout.style.top = `${window.scrollY}px`;

    deletePhotoModal.style.display = "block";
    deletePhotoModal.style.top = `${window.scrollY + window.innerHeight / 3}px`;
  };

  return (
    <div className="photo">
      <div className="img-overlay">
        <div className="delete-btn-cont">
          <button
            onClick={() => {
              openModal();
              setSelectedImageId(image._id);
            }}
          >
            delete
          </button>
        </div>
        <p>{image.name}</p>
      </div>
      <img src={image.url} alt={image.name} />
    </div>
  );
};

export default Photo;
