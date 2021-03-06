import React from "react";
import "./nav.css";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="nav_wrapper">
        <div className="nav_box1">
          <div className="ham" style={{ cursor: "pointer" }}></div>
          <p>Dashboard</p>
        </div>
        <div className="nav_box2">
          <div className="search_box_container">
            <input
              type="text"
              name=""
              id=""
              className="nav__search_box"
              placeholder="Search here..."
            />
            <svg
              width="32"
              height="28"
              viewBox="0 0 32 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="btn_search"
            >
              <path
                d="M31.444 25.5205L20.7664 17.6031C21.8164 15.9062 22.423 13.9102 22.423 11.7758C22.423 10.4399 22.1876 9.13281 21.7233 7.89062C21.4574 7.17931 20.6651 6.81813 19.9539 7.08406C19.2426 7.34994 18.8815 8.14213 19.1474 8.85344C19.4961 9.78662 19.673 10.7699 19.673 11.7758C19.673 16.408 15.8772 20.1766 11.2115 20.1766C6.54581 20.1766 2.75 16.408 2.75 11.7758C2.75 7.14356 6.54581 3.375 11.2115 3.375C12.5029 3.375 13.7418 3.65588 14.8939 4.20975C15.5784 4.53881 16.3999 4.25069 16.7289 3.56637C17.058 2.882 16.7699 2.06044 16.0856 1.73138C14.5586 0.99725 12.9187 0.625 11.2115 0.625C5.02944 0.625 0 5.62725 0 11.7758C0 17.9244 5.02944 22.9266 11.2115 22.9266C14.2556 22.9266 17.0196 21.7132 19.0419 19.7479L29.8061 27.7295C30.0522 27.9121 30.3393 28.0001 30.6239 28.0001C31.0445 28.0001 31.4597 27.8078 31.7295 27.444C32.1818 26.834 32.0539 25.9728 31.444 25.5205Z"
                fill="#717579"
              />
            </svg>
          </div>
          <svg
            width="28"
            height="22"
            viewBox="0 0 28 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="btn_notification"
          >
            <path
              d="M27.1093 19.9271L24.6667 16.2632V11.3334C24.6667 8.50444 23.5429 5.79133 21.5425 3.79094C19.5421 1.79055 16.829 0.666748 14 0.666748C11.171 0.666748 8.45793 1.79055 6.45754 3.79094C4.45715 5.79133 3.33335 8.50444 3.33335 11.3334V16.2632L0.89068 19.9271C0.757243 20.128 0.680735 20.3613 0.66929 20.6022C0.657844 20.8431 0.711889 21.0826 0.825679 21.2952C0.939469 21.5079 1.10875 21.6857 1.31553 21.8098C1.52231 21.9339 1.75885 21.9997 2.00001 22.0001H26C26.2412 21.9997 26.4777 21.9339 26.6845 21.8098C26.8913 21.6857 27.0606 21.5079 27.1743 21.2952C27.2881 21.0826 27.3422 20.8431 27.3307 20.6022C27.3193 20.3613 27.2428 20.128 27.1093 19.9271Z"
              fill="#717579"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Nav;
