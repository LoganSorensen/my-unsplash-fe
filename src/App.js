import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./components/header";
import PhotoGallery from './components/photoGallery'

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/images")
      .then((res) => {
        // console.log(res);
        setImages(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  // console.log(images);

  return (
    <div className="App">
      <Header />
      <PhotoGallery images={images} />
    </div>
  );
}

export default App;
