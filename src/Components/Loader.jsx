import React from "react";
import loader from "../assets/images/Loading.gif";

const Loader = () => {
  return (
    <div className='d-flex justify-content-center align-items-center w-100 mt-5'>
      <div className='loading-bg'>
        <img src={loader} alt='Loader' height={80} width={80} />
      </div>
    </div>
  );
};

export default Loader;
