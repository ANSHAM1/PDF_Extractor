import styles from "./App.module.css";
import Content from "./Components/Content/Content.jsx";
import Images from "./Components/Images/Images.jsx";
import FileUpload from "./Components/FileUpload/FileUpload.jsx";

import { useState, useEffect } from "react";

function App() {
  const [images, setImages] = useState([]);
  const [content, setContent] = useState("");

  const handleFileUpload = async (file) => {
    const formdata = new FormData();
    formdata.append("file", file);
    try {
      const response = await fetch("http://localhost:4000/api/upload", {
        method: "POST",
        body: formdata,
      });

      if (response.ok) {
        const data = await response.json();
        setContent(data["content"]);
        setImages(data["images"]);
      }
    } catch (error) {
      alert("error connecting to server");
    }
  };

  const ShowData = async () => {
    await fetch("http://localhost:4000/api/show_text")
      .then((response) => response.json())
      .then((data) => setContent(data))
      .catch((error) => console.error("Error fetching file list:", error));

    await fetch("http://localhost:4000/api/Images")
      .then((response) => response.json())
      .then((data) => {setImages(data);
        console.log(data)
      })
      .catch((error) => console.error("Error fetching file list:", error));
  };

  return (
    <>
      <div className={styles.background}>
        <FileUpload handleFileUpload={handleFileUpload} ShowData={ShowData} />
        <Images Images={images} />
        <Content Content={content} />
      </div>
    </>
  );
}

export default App;
