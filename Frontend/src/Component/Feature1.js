import React, { useState } from 'react';

function Feature1() {
  const [images, setImages] = useState([]);
  const [text, setText] = useState("");

  window.addEventListener("beforeunload", async function (event) {
    event.preventDefault();
    event.returnValue = "";
    const response = await fetch("http://localhost:8000/api/logout", {
      method: "DELETE",
    });
  });

  const handleUploadSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const response = await fetch("http://localhost:8000/api/upload", {
      method: "POST",
      body: formData,
    });
    // Update images state if needed
  };

  const handleDownloadSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/show");
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      const imagesData = await response.json();
      setImages(imagesData);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  const handleTextSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/show_text");
      if (!response.ok) {
        throw new Error('Failed to fetch text');
      }
      const { text } = await response.json();
      setText(text);
    } catch (error) {
      console.error('Error fetching text:', error);
    }
  };

  return (
    <div id="pdf-text" className="feature">
      <form onSubmit={handleUploadSubmit} encType="multipart/form-data" className="forms">
        <h1>Use PDF-Text</h1><br></br>
        <input type="file" name="pdfFile" className="field"></input><br></br>
        <input type="submit" className="button"></input>
      </form>
      <form onSubmit={handleTextSubmit}>
        <button type="submit" className="button">Show Text</button>
      </form>
      <div className="output" id="output_text">
        {text !== "" ? (
          <div dangerouslySetInnerHTML={{__html: text}} />
        ) : (
          <p>Your Text Here</p>
        )}
      </div>
      <form className="featureform" onSubmit={handleUploadSubmit} encType="multipart/form-data" className="forms">
        <h1>Use PDF-Image</h1><br></br>
        <input type="file" name="pdfFile" className="field"></input><br></br>
        <input type="submit" className="button"></input>
      </form>
      <form onSubmit={handleDownloadSubmit}>
        <button type="submit" className="button">Show Images</button>
      </form>
      <div className="output" id="output_image">
        {images.length > 0 ? (
          images.map((image, index) => (
            <img key={index} src={`http://localhost:8000/static/images/${image}`} alt={`Image ${index}`} />
          ))
        ) : (
          <p>Your Images Here</p>
        )}
      </div>
    </div>
  );
}

export default Feature1;
