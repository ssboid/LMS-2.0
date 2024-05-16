import React, { useState } from "react";
import b1984 from "../assets/bookimages/b1984.png";

const Book = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);

  const showNotification = () => {
    setNotificationVisible(true);
  };

  const hideNotification = () => {
    setNotificationVisible(false);
  };

  return (
    <div>
      <div className="pagebox">
        <div className="book-info-box">
          <div className="book-info-form">
            <div className="book-image-reservation">
              <div className="book-image-container">
                <img src={b1984} alt="1984" className="book-image" />
              </div>
              <div className="rating-stars">
                <input type="radio" name="rating" id="rs0" defaultChecked />
                <label htmlFor="rs0"></label>
                <input type="radio" name="rating" id="rs1" />
                <label htmlFor="rs1"></label>
                <input type="radio" name="rating" id="rs2" />
                <label htmlFor="rs2"></label>
                <input type="radio" name="rating" id="rs3" />
                <label htmlFor="rs3"></label>
                <input type="radio" name="rating" id="rs4" />
                <label htmlFor="rs4"></label>
                <input type="radio" name="rating" id="rs5" />
                <label htmlFor="rs5"></label>
              </div>
              <a
                href="#"
                className="reservation-button"
                onClick={showNotification}
              >
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

          {notificationVisible && (
            <div className="container" id="notification">
              <div className="notifcard" id="registercard">
                <br />
                <a className="signup">Book Added to the wishlist!</a>
                <button className="enter" onClick={hideNotification}>
                  OK
                </button>
              </div>
              <div id="shadowlayern" onClick={hideNotification}></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Book;
