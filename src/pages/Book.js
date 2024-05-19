import React, { useState, useEffect } from "react";
import b1984 from "../assets/bookimages/b1984.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Book = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);
  const notify = () => toast("Wow so easy!");
  useEffect(() => {
    // Append Facebook SDK script
    const script = document.createElement("script");
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    script.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0";
    script.nonce = "EWSc9Spy";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <div id="fb-root"></div>
      <script
        async
        defer
        crossorigin="anonymous"
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v19.0"
        nonce="logKe7bG"
      ></script>
      <div className="pagebox">
        <div className="book-info-box">
          <div className="book-info-form">
            <div className="book-image-reservation">
              <div className="book-image-container">
                <img src={b1984} alt="1984" className="book-image" />
              </div>
              <div className="rating-stars">
                <input
                  type="radio"
                  name="rating"
                  id="rs0"
                  defaultChecked
                  className="inputstar"
                />
                <label htmlFor="rs0" className="labelstar"></label>
                <input
                  type="radio"
                  name="rating"
                  id="rs1"
                  className="inputstar"
                />
                <label htmlFor="rs1" className="labelstar"></label>
                <input
                  type="radio"
                  name="rating"
                  id="rs2"
                  className="inputstar"
                />
                <label htmlFor="rs2" className="labelstar"></label>
                <input
                  type="radio"
                  name="rating"
                  id="rs3"
                  className="inputstar"
                />
                <label htmlFor="rs3" className="labelstar"></label>
                <input
                  type="radio"
                  name="rating"
                  id="rs4"
                  className="inputstar"
                />
                <label htmlFor="rs4" className="labelstar"></label>
                <input
                  type="radio"
                  name="rating"
                  id="rs5"
                  className="inputstar"
                />
                <label htmlFor="rs5" className="labelstar"></label>
              </div>

              <a href="" className="reservation-button" onClick={notify}>
                Add to wish list
              </a>
            </div>
            <div className="book-details">
              <div>
                <h2>Title</h2>
                <p>Dummy Book Title</p>
              </div>
              <div>
                <h2>Author</h2>
                <p>Dummy Author</p>
              </div>
              <div>
                <h2>ISBN</h2>
                <p>1234567890</p>
              </div>
              <div>
                <h2>Publisher</h2>
                <p>Dummy Publisher</p>
              </div>
              <div>
                <h2>Publication Year</h2>
                <p>2023</p>
              </div>
              <div>
                <h2>Genre</h2>
                <p>Fiction</p>
              </div>
              <div>
                <h2>Language</h2>
                <p>English</p>
              </div>
              <div>
                <h2>Location</h2>
                <p>Library Section A</p>
              </div>
              <div>
                <h2>Synopsis</h2>
                <p>
                  This is a dummy synopsis of the book. It provides a brief
                  description of the book's content.
                </p>
              </div>
            </div>
          </div>

          <div className="comment-box">
            <div
              class="fb-comments"
              data-href="http://localhost:3000/book"
              data-width="100%"
              data-numposts="5"
              data-colorscheme="dark"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
