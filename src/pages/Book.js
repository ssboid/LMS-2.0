import React, { useState, useEffect } from "react";
import b1984 from "../assets/bookimages/b1984.png";
import Swal from 'sweetalert2';

const Book = () => {
  const [notificationVisible, setNotificationVisible] = useState(false);

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

  const notify = () => Swal.fire({
    title: "Added to Wishlist!",
    text: "Added to Wishlist!",
    icon: "success",
    confirmButtonColor: "#e36a00"
  });

  const handleClick = (event) => {
    event.preventDefault();
    notify();
  };

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

              <a href="#" onClick={handleClick} className="reservation-button">
                Add to wish list
              </a>
            </div>
            <div className="book-details">
              <div>
                <h2>Title</h2>
                <p>1984</p>
              </div>
              <div>
                <h2>Author</h2>
                <p>George Orwell</p>
              </div>
              <div>
                <h2>ISBN</h2>
                <p>1234567890</p>
              </div>
              <div>
                <h2>Publisher</h2>
                <p>Secker & Warburg</p>
              </div>
              <div>
                <h2>Publication Year</h2>
                <p>1949</p>
              </div>
              <div>
                <h2>Genre</h2>
                <p>Dystopian, political fiction, social science, fiction</p>
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
                  Nineteen Eighty-Four also published as 1984 is a dystopian
                  novel and cautionary tale by English writer George Orwell. It
                  was published on 8 June 1949 by Secker & Warburg as Orwell's
                  ninth and final book completed in his lifetime. Thematically,
                  it centres on the consequences of totalitarianism, mass
                  surveillance, and repressive regimentation of people and
                  behaviours within society. Orwell, a staunch believer in
                  democratic socialism and member of the anti-Stalinist Left,
                  modelled the Britain under authoritarian socialism in the
                  novel on the Soviet Union in the era of Stalinism and on the
                  very similar practices of both censorship and propaganda in
                  Nazi Germany.More broadly, the novel examines the role of
                  truth and facts within societies and the ways in which they
                  can be manipulated.
                </p>
              </div>
            </div>
          </div>

          <div className="comment-box">
            <h1>Comments</h1><hr></hr>
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
