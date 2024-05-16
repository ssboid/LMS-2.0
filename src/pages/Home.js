import React from "react";
import { Link, useNavigate } from "react-router-dom";
import coverbook from "../assets/brand/coverbook.png";
import b1984 from "../assets/bookimages/b1984.png";
import hhgg from "../assets/bookimages/hhgg.jpg";
import htwf from "../assets/bookimages/htwf.jpg";
import lm from "../assets/bookimages/lm.jpg";
const Home = () => {
  return (
    <div className="home">
      <div id="pagebanner">
        <div className="slg">
          <p id="king">
            Books are the windows to the world,
            <br />
            and a library is the gateway to endless possibilities.
          </p>
          <p id="ful">
            Expand your horizons and explore new worlds with just a few clicks.
            <br />
            The possibilities are endless, and the journey starts with a visit
            to our library website portal. Search for a title or simply click on
            the search button to begin your adventure.
          </p>
        </div>
      </div>
      <div className="introbody">
        {/* welcome box */}
        <div className="welc">
          <div className="welcbox">
            <div className="welchead">Welcome</div>
            <div className="welctxt">
              Discover new stories and explore different perspectives starting
              with just a few clicks on your device. Once you have found your
              desired titles, simply make a reservation and collect them from
              our library location at your convenience. Start your literary
              journey today with our online portal.
            </div>
          </div>
        </div>

        {/* "popular section" heading */}
        <div className="labels">
          <div className="labelheading">
            <span>Popular Books</span>
          </div>
          <div className="labelsubheading">
            <span>Browse our selection of popular books</span>
          </div>
        </div>
        {/* popular books images */}
        <div className="displaybox">
          <div className="hpbooks">
            <ul>
              <li>
                <div className="hpimage">
                  <div>
                    <img src={b1984} alt="1984" className="bimage" />
                  </div>
                  <div className="bname">1984</div>
                </div>
              </li>
              <li>
                <div className="hpimage">
                  <div>
                    <img src={hhgg} alt="Dummy Image" className="bimage" />
                  </div>
                  <div className="bname">
                    The Hitchhiker's Guide to the Galaxy
                  </div>
                </div>
              </li>
              <li>
                <div className="hpimage">
                  <div>
                    <img src={htwf} alt="Dummy Image" className="bimage" />
                  </div>
                  <div className="bname">
                    How to Win Friends and Influence People
                  </div>
                </div>
              </li>
              <li>
                <div className="hpimage">
                  <div>
                    <img src={lm} alt="Dummy Image" className="bimage" />
                  </div>
                  <div className="bname">Les Miserables</div>
                </div>
              </li>
            </ul>
          </div>
          <p>
            <a href="user?page=popular" className="seemore">
              See more...
            </a>
          </p>
        </div>

        {/* "new section" heading */}
        <div className="labels">
          <div className="labelheading">
            <span>New Books</span>
          </div>
          <div className="labelsubheading">
            <span>Browse our newest additions</span>
          </div>
        </div>
        {/* new books images */}
        <div className="displaybox">
          <div className="hpbooks">
            <ul>
              <li>
                <Link to="/book" className="link">
                  <div className="hpimage">
                    <div>
                      <img src={b1984} alt="1984" className="bimage" />
                    </div>
                    <div className="bname">1984</div>
                  </div>
                </Link>
              </li>
              <li>
                <div className="hpimage">
                  <div>
                    <img src={hhgg} alt="Dummy Image" className="bimage" />
                  </div>
                  <div className="bname">
                    The Hitchhiker's Guide to the Galaxy
                  </div>
                </div>
              </li>
              <li>
                <div className="hpimage">
                  <div>
                    <img src={htwf} alt="Dummy Image" className="bimage" />
                  </div>
                  <div className="bname">
                    How to Win Friends and Influence People
                  </div>
                </div>
              </li>
              <li>
                <div className="hpimage">
                  <div>
                    <img src={lm} alt="Dummy Image" className="bimage" />
                  </div>
                  <div className="bname">Les Miserables</div>
                </div>
              </li>
            </ul>
          </div>
          <p>
            <a href="user?page=popular" className="seemore">
              See more...
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
