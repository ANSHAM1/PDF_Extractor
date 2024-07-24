import styles from "../all.module.css";

const Images = ({ Images }) => {
  return (
    <>
      <div className={styles.Images}>
        {Images.map((val, index) => (
          <img
            key={index}
            src={`http://localhost:4000/static/Images/${val}`}
            className={styles.image}
          ></img>
        ))}
      </div>
    </>
  );
};

export default Images;
