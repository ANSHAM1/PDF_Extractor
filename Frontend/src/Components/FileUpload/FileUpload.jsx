import styles from "../all.module.css";

import { useRef } from "react";

const FileUpload = ({ handleFileUpload ,ShowData}) => {
  const fileInputRef = useRef(null);

  const handleBtnClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    handleFileUpload(file);
  };

  return (
    <>
      <div className={styles.Fileupload}>
        <h1>PDF EXTRACTOR</h1>
        <input
          type="file"
          ref={fileInputRef}
          className={styles.input}
          style={{ display: 'none' }}
          onChange={handleFileChange}
        ></input>
        <button className={styles.btn} onClick={handleBtnClick}>
          Upload PDF File
        </button>
        <button className={styles.btn} onClick={ShowData}>
          Show Data
        </button>
      </div>
    </>
  );
};

export default FileUpload;
