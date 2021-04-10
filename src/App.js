import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/header";
import PhotoGallery from "./components/photoGallery";
import AddPhotoModal from "./components/addPhotoModal";
import DeletePhotoModal from "./components/deletePhotoModal";

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredImages, setFilteredImages] = useState([]);
  const [selectedImageId, setSelectedImageId] = useState();

  useEffect(() => {
    axios
      .get("https://my-unsplash-be.herokuapp.com/images")
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    filterImages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const filterImages = () => {
    const filteredImages = images.filter((image) =>
      image.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredImages(filteredImages);
  };

  const addImage = (image) => {
    setImages([image, ...images]);
  };

  const removeImage = (id) => {
    const filteredImages = images.filter((image) => image._id !== id);
    setImages(filteredImages);
  };

  return (
    <div className="App">
      <Header setQuery={setQuery} />
      <PhotoGallery
        images={query === "" ? images : filteredImages}
        setSelectedImageId={setSelectedImageId}
      />
      <AddPhotoModal addImage={addImage} />
      <DeletePhotoModal
        selectedImageId={selectedImageId}
        removeImage={removeImage}
      />
    </div>
  );
}

export default App;
