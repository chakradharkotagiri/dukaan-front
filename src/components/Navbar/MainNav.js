import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import "./MainNav.css";
import { useFormik } from "formik";
import SideDrawer from "./SideDrawer";
import Backdrop from "../../Shared/Modal/Backdrop";

const MainNav = () => {
  const navigate = useNavigate();

  const searchSubmitHandler = (event) => {
    navigate("/search", { state: { query: event.search } });
  };

  const initialValues = {
    search: "",
  };

  const { values, handleBlur, handleChange, handleSubmit } = useFormik({
    initialValues,
    onSubmit: searchSubmitHandler,
  });

  const closeDrawer = () => {
    setShowSideMenu(false);
  };

  const [showSideMenu, setShowSideMenu] = useState(false);

  return (
    <>
      {showSideMenu && <Backdrop onClick={closeDrawer} />}

      <SideDrawer show={showSideMenu}>
        <div
          className="side-logo"
          onClick={() => {
            navigate("/");
            console.log("Hello");
          }}
        >
          <svg
            width="133"
            height="27"
            viewBox="0 0 133 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.16 23.6C9.16 23.28 9.18667 23.04 9.24 22.88C9.32 22.6933 9.49333 22.6 9.76 22.6C10 22.6 10.2667 22.6533 10.56 22.76C10.88 22.8667 11.1867 22.9867 11.48 23.12C12.2267 23.44 12.8933 23.68 13.48 23.84C14.0933 24 14.8533 24.08 15.76 24.08C19.0667 24.08 21.5467 23.2933 23.2 21.72C24.88 20.1467 25.72 18.0933 25.72 15.56C25.72 13.2933 25.08 11.3067 23.8 9.6C22.52 7.86667 20.8933 6.50667 18.92 5.52C16.9733 4.53333 14.9867 3.94667 12.96 3.76L15.24 20.68C15.24 21.1333 15.1733 21.5067 15.04 21.8C14.9333 22.0933 14.6667 22.24 14.24 22.24C14.1333 22.2933 13.9333 21.5733 13.64 20.08C13.3467 18.5867 12.9467 16.3867 12.44 13.48C11.8533 10.0933 11.4 7.58667 11.08 5.96C10.76 4.30667 10.5067 3.36 10.32 3.12C8.10667 3.12 6.29333 3.24 4.88 3.48C3.46667 3.69333 2.38667 3.94667 1.64 4.24C0.893333 4.53333 0.586667 4.68 0.72 4.68C0.586667 4.62667 0.493333 4.54667 0.44 4.44C0.386667 4.30667 0.346667 4.12 0.32 3.88C0.266667 3.64 0.226667 3.46667 0.2 3.36C0.2 2.72 0.773333 2.21333 1.92 1.84C3.06667 1.46667 4.26667 1.21333 5.52 1.08C6.8 0.946666 7.65333 0.879999 8.08 0.879999C10.9333 0.879999 13.9067 1.46667 17 2.64C20.0933 3.78667 22.6933 5.48 24.8 7.72C26.9067 9.96 27.96 12.6133 27.96 15.68C27.96 17.9733 27.3867 19.9333 26.24 21.56C25.0933 23.16 23.5867 24.3733 21.72 25.2C19.88 26.0267 17.9067 26.44 15.8 26.44C14.0933 26.44 12.56 26.1733 11.2 25.64C9.84 25.1067 9.16 24.4267 9.16 23.6ZM50.375 25.8C49.895 25.8 49.5083 25.6 49.215 25.2C48.9483 24.7733 48.7083 24.1333 48.495 23.28C48.2817 22.4 47.9483 20.88 47.495 18.72C47.0417 20.5067 46.1883 21.9333 44.935 23C43.6817 24.04 42.1483 24.56 40.335 24.56C38.6817 24.56 37.2817 23.9867 36.135 22.84C35.015 21.6667 34.175 20.1333 33.615 18.24C33.055 16.32 32.775 14.2533 32.775 12.04C32.775 11.0267 32.8683 10.16 33.055 9.44C33.2683 8.69333 33.5217 8.13333 33.815 7.76C34.135 7.38667 34.4417 7.21333 34.735 7.24C35.055 7.24 35.215 7.45333 35.215 7.88C35.215 8.22667 35.1217 8.77333 34.935 9.52C34.7483 10.3467 34.655 11.2933 34.655 12.36C34.655 13.96 34.8817 15.52 35.335 17.04C35.815 18.56 36.5083 19.8133 37.415 20.8C38.3483 21.76 39.4417 22.24 40.695 22.24C41.735 22.24 42.6817 21.9333 43.535 21.32C44.3883 20.7067 45.055 19.9333 45.535 19C46.0417 18.0667 46.295 17.1467 46.295 16.24V9.88C46.5883 9.32 46.9883 9.04 47.495 9.04C47.9483 9.04 48.255 9.42667 48.415 10.2C48.575 10.9733 48.655 12.0667 48.655 13.48C48.655 14.68 48.6417 15.6 48.615 16.24C48.775 17.12 49.015 18.0133 49.335 18.92C49.6817 19.8267 50.1083 20.8533 50.615 22C51.2283 23.4133 51.535 24.28 51.535 24.6C51.535 25.4 51.1483 25.8 50.375 25.8ZM57.7484 26.04C57.0818 26.04 56.7484 25.6533 56.7484 24.88C56.7484 24.72 56.8018 24.3867 56.9084 23.88C57.0418 23.3733 57.1084 22.8133 57.1084 22.2V20.24V17.36C56.9751 15.4667 56.6418 13.16 56.1084 10.44C55.5218 7.45333 55.0684 4.68 54.7484 2.12C54.8284 1.66667 55.0418 1.44 55.3884 1.44C55.8418 1.44 56.3884 2.64 57.0284 5.04C57.6684 7.41333 58.3218 11.3467 58.9884 16.84C59.5218 15.5067 60.2551 14.16 61.1884 12.8C62.1218 11.4133 63.1084 10.2667 64.1484 9.36C65.1884 8.45333 66.0951 8 66.8684 8C67.1884 8 67.3884 8.09333 67.4684 8.28C67.5751 8.46667 67.6151 8.73333 67.5884 9.08C66.0151 10.4667 64.4284 12.08 62.8284 13.92C61.2284 15.76 60.4284 17.1867 60.4284 18.2C60.4284 18.8133 60.9351 19.52 61.9484 20.32C62.9618 21.0933 64.2151 21.7867 65.7084 22.4C67.2018 22.9867 68.6018 23.32 69.9084 23.4C70.4151 23.48 70.6684 23.7867 70.6684 24.32C70.6684 25.2267 69.8151 25.68 68.1084 25.68C66.7484 25.68 65.2551 25.1333 63.6284 24.04C62.0284 22.9467 60.6418 21.8 59.4684 20.6C59.3884 21.0533 59.3351 21.4533 59.3084 21.8C59.2818 22.12 59.2551 22.4 59.2284 22.64C59.1218 23.8133 58.9751 24.68 58.7884 25.24C58.6284 25.7733 58.2818 26.04 57.7484 26.04ZM82.5675 26C79.7942 26 77.3808 25.52 75.3275 24.56C73.3008 23.5733 72.2875 21.8533 72.2875 19.4C72.2875 18.52 72.5542 17.6667 73.0875 16.84C73.6208 16.0133 74.4075 15.3467 75.4475 14.84C76.4875 14.3067 77.7542 14.04 79.2475 14.04C80.3942 14.04 81.3675 14.0933 82.1675 14.2C82.9675 14.3067 83.8875 14.6 84.9275 15.08C85.9675 15.56 87.0475 16.32 88.1675 17.36C87.7408 15.52 87.1008 13.9067 86.2475 12.52C85.3942 11.1333 84.4342 10.0667 83.3675 9.32C82.3275 8.54667 81.3008 8.16 80.2875 8.16C79.8075 8.16 79.3542 8.25333 78.9275 8.44C78.5275 8.6 78.0342 8.84 77.4475 9.16C76.7808 9.58667 76.2875 9.8 75.9675 9.8C75.8342 9.8 75.7142 9.76 75.6075 9.68C75.5275 9.57333 75.4875 9.45333 75.4875 9.32C75.4875 8.25333 75.9542 7.42667 76.8875 6.84C77.8475 6.25333 79.0075 5.98667 80.3675 6.04C82.2342 6.14667 83.9408 6.94667 85.4875 8.44C87.0342 9.90667 88.2475 11.7333 89.1275 13.92C90.0342 16.1067 90.4875 18.2533 90.4875 20.36C90.4875 20.7067 90.4608 21.2 90.4075 21.84L89.1275 21.76C88.1142 19.7067 86.8075 18.2533 85.2075 17.4C83.6342 16.52 82.0475 16.08 80.4475 16.08C78.3942 16.08 76.9275 16.3867 76.0475 17C75.1675 17.6133 74.7275 18.5067 74.7275 19.68C74.7275 20.9067 75.3408 21.8933 76.5675 22.64C77.7942 23.3867 79.3675 23.76 81.2875 23.76C82.3542 23.76 83.2075 23.7067 83.8475 23.6C84.4875 23.4667 85.1542 23.2933 85.8475 23.08C86.4075 22.8933 86.9008 22.76 87.3275 22.68C87.7542 22.6 88.3008 22.56 88.9675 22.56C89.7142 22.56 90.1808 22.6133 90.3675 22.72C90.5808 22.8267 90.6875 23.0667 90.6875 23.44C90.6875 23.7067 90.1408 24.04 89.0475 24.44C87.9542 24.84 86.7275 25.2 85.3675 25.52C84.0075 25.84 83.0742 26 82.5675 26ZM104.169 26C101.396 26 98.9824 25.52 96.9291 24.56C94.9024 23.5733 93.8891 21.8533 93.8891 19.4C93.8891 18.52 94.1557 17.6667 94.6891 16.84C95.2224 16.0133 96.0091 15.3467 97.0491 14.84C98.0891 14.3067 99.3557 14.04 100.849 14.04C101.996 14.04 102.969 14.0933 103.769 14.2C104.569 14.3067 105.489 14.6 106.529 15.08C107.569 15.56 108.649 16.32 109.769 17.36C109.342 15.52 108.702 13.9067 107.849 12.52C106.996 11.1333 106.036 10.0667 104.969 9.32C103.929 8.54667 102.902 8.16 101.889 8.16C101.409 8.16 100.956 8.25333 100.529 8.44C100.129 8.6 99.6357 8.84 99.0491 9.16C98.3824 9.58667 97.8891 9.8 97.5691 9.8C97.4357 9.8 97.3157 9.76 97.2091 9.68C97.1291 9.57333 97.0891 9.45333 97.0891 9.32C97.0891 8.25333 97.5557 7.42667 98.4891 6.84C99.4491 6.25333 100.609 5.98667 101.969 6.04C103.836 6.14667 105.542 6.94667 107.089 8.44C108.636 9.90667 109.849 11.7333 110.729 13.92C111.636 16.1067 112.089 18.2533 112.089 20.36C112.089 20.7067 112.062 21.2 112.009 21.84L110.729 21.76C109.716 19.7067 108.409 18.2533 106.809 17.4C105.236 16.52 103.649 16.08 102.049 16.08C99.9957 16.08 98.5291 16.3867 97.6491 17C96.7691 17.6133 96.3291 18.5067 96.3291 19.68C96.3291 20.9067 96.9424 21.8933 98.1691 22.64C99.3957 23.3867 100.969 23.76 102.889 23.76C103.956 23.76 104.809 23.7067 105.449 23.6C106.089 23.4667 106.756 23.2933 107.449 23.08C108.009 22.8933 108.502 22.76 108.929 22.68C109.356 22.6 109.902 22.56 110.569 22.56C111.316 22.56 111.782 22.6133 111.969 22.72C112.182 22.8267 112.289 23.0667 112.289 23.44C112.289 23.7067 111.742 24.04 110.649 24.44C109.556 24.84 108.329 25.2 106.969 25.52C105.609 25.84 104.676 26 104.169 26ZM119.291 26.16C118.917 26.2667 118.704 26.32 118.651 26.32C118.437 26.32 118.211 26.2133 117.971 26C117.091 24.6933 116.451 22.4133 116.051 19.16C115.677 15.9067 115.491 13.1067 115.491 10.76C115.491 10.3867 115.757 10.2 116.291 10.2C117.091 10.2 117.491 10.64 117.491 11.52C117.491 11.76 117.477 11.96 117.451 12.12C117.691 11.56 118.144 10.9867 118.811 10.4C119.477 9.81333 120.251 9.32 121.131 8.92C122.011 8.52 122.904 8.32 123.811 8.32C126.664 8.32 128.744 9.58667 130.051 12.12C131.357 14.6267 132.011 17.7467 132.011 21.48C132.011 22.76 131.877 23.7867 131.611 24.56C131.344 25.3067 130.984 25.68 130.531 25.68C130.051 25.68 129.811 25.5333 129.811 25.24C129.997 23.8267 130.091 22.44 130.091 21.08C130.091 17.64 129.491 15.04 128.291 13.28C127.091 11.4933 125.504 10.6 123.531 10.6C122.571 10.6 121.637 10.84 120.731 11.32C119.851 11.8 119.131 12.4667 118.571 13.32C118.037 14.1733 117.771 15.1467 117.771 16.24C117.771 17.4667 117.837 18.5333 117.971 19.44C118.104 20.3467 118.317 21.44 118.611 22.72C118.931 23.9733 119.157 25.12 119.291 26.16Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="side-search-bar">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              className="search-field"
              value={values.search}
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            <button className="search-btn" type="submit">
              <svg
                className="search-icon"
                width="39"
                height="37"
                viewBox="0 0 39 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="17.5" cy="12.5" r="9.5" fill="#040000" />
                <circle cx="17.5" cy="12.5" r="7.5" fill="#D9D9D9" />
                <rect
                  x="23.9284"
                  y="17"
                  width="15.3893"
                  height="3"
                  rx="1.5"
                  transform="rotate(40 23.9284 17)"
                  fill="black"
                />
              </svg>
            </button>
          </form>
        </div>
        <NavLinks />
      </SideDrawer>

      <nav className="main-nav">
        {!showSideMenu && (
          <>
            <div
              className="logo"
              onClick={() => {
                navigate("/");
                console.log("Hello");
              }}
            >
              <h1>Dukaan</h1>
            </div>
            <div className="search-bar">
              <form className="search-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="search"
                  className="search-field"
                  value={values.search}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  required
                />
                <button className="search-btn" type="submit">
                  <svg
                    className="search-icon"
                    width="39"
                    height="37"
                    viewBox="0 0 39 37"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="17.5" cy="12.5" r="9.5" fill="#040000" />
                    <circle cx="17.5" cy="12.5" r="7.5" fill="#D9D9D9" />
                    <rect
                      x="23.9284"
                      y="17"
                      width="15.3893"
                      height="3"
                      rx="1.5"
                      transform="rotate(40 23.9284 17)"
                      fill="black"
                    />
                  </svg>
                </button>
              </form>
            </div>
            <div className="navigation-frame">
              <NavLinks />
            </div>
            <div className="side-nav">
              <svg
                width="106"
                height="72"
                viewBox="0 0 106 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setShowSideMenu(true);
                }}
              >
                <rect width="106" height="72" fill="#121212" />
                <rect
                  x="12"
                  y="12"
                  width="83"
                  height="10"
                  rx="5"
                  fill="#D9D9D9"
                />
                <rect
                  x="12"
                  y="31"
                  width="83"
                  height="10"
                  rx="5"
                  fill="#D9D9D9"
                />
                <rect
                  x="12"
                  y="50"
                  width="83"
                  height="10"
                  rx="5"
                  fill="#D9D9D9"
                />
              </svg>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default MainNav;