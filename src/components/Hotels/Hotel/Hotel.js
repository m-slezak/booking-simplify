import React from "react";
import hotelImg from "../../../assets/images/hotel1.jpeg";
import styles from "../Hotel/Hotel.module.css";

function Hotel(props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div>
          <img src={hotelImg} alt="Andalo, Italy" className=" object-cover " />
        </div>
        <div className="${styles.description} bg-teal-200 p-3 max-w-md">
          <div className="flex justify-between mb-3">
            <div className="font-semibold">
              <p>{props.name} </p>
              <p>{props.city}</p>
            </div>
            <div>
              <p className="font-bold">{props.rating}</p>
            </div>
          </div>

          <p className="text-left mb-36">{props.description}</p>
          <a
            href="#"
            className=" bg-teal-600 outline-2 p-2  text-white  hover:bg-teal-800"
          >
            show more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hotel;
