import React from "react";

const Button = () => {

  const top = () => {
    window.scrollTo(0, 0);
    
  }

  return (
    <button onClick={top} id="myBtn"  title="Go to top">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M12 4.4c-4.3 0-7.8 3.5-7.8 7.8s3.5 7.8 7.8 7.8 7.8-3.5 7.8-7.8-3.5-7.8-7.8-7.8zM16.3 12.9l-3.5-3.5v8.6h-1v-8.6l-3.5 3.5-1.4-1.4 5.2-5.2 5.2 5.2-1.5 1.4z" />
      </svg>
    </button>
  );
};

export default Button;
