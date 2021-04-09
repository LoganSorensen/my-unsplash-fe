import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/header";
import PhotoGallery from "./components/photoGallery";
import AddPhotoModal from './components/addPhotoModal'

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/images")
      .then((res) => {
        setImages(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Header />
      <PhotoGallery images={images} />
      <AddPhotoModal />
    </div>
  );
}

export default App;
