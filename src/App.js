import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/header";
import PhotoGallery from "./components/photoGallery";
import AddPhotoModal from "./components/addPhotoModal";
import DeletePhotoModal from "./components/deletePhotoModal";

function App() {
  const [images, setImages] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/images")
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const setImage = (id) => {
    setSelectedImageId(id);
  };

  const addImage = (image) => {
    setImages([image, ...images])
  }

  const removeImage = (id) => {
    const filteredImages = images.filter((image) => image._id !== id);
    setImages(filteredImages);
  };

  return (
    <div className="App">
      <Header />
      <PhotoGallery images={images} setImage={setImage} />
      <AddPhotoModal addImage={addImage}/>
      <DeletePhotoModal
        selectedImageId={selectedImageId}
        removeImage={removeImage}
      />
    </div>
  );
}

export default App;
