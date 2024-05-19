import React from "react";

const Browse = () => {
  const count = 20;
  const items = Array.from({ length: count }, (_, index) => index + 1);

  return (
    <div>
      <div className="pagebox">
        <div className="filterbox">
          <div className="filtercrit">
            <label>Genre</label>
            <select name="Genre" id="genre" className="custom-dropdown" >
            <option value="" disabled selected hidden>All</option>
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <div className="filtercrit">
          <label>Language</label>
            <select name="Language" id="language" className="custom-dropdown">
            <option value="" disabled selected hidden>All</option>
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <div className="filtercrit">
          <label>Rating</label>
            <select name="Rating" id="rating" className="custom-dropdown">
            <option value="" disabled selected hidden>All</option>
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <div className="filtercrit">
          <label>Franchise</label>
            <select name="Franchise" id="Franchise" className="custom-dropdown">
            <option value="" disabled selected hidden>All</option>
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <div className="filtercrit">
          <label>Audience</label>
            <select name="Audience" id="Audience" className="custom-dropdown">
            <option value="" disabled selected hidden>All</option>
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <div className="filtercrit">
          <label>Availabilty</label>
            <select name="availability" id="availability" className="custom-dropdown">
            <option value="" disabled selected hidden>All</option>
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <div className="filtercrit">
          <label>Publisher</label>
            <select name="Publisher" id="publisher" className="custom-dropdown">
            <option value="" disabled selected hidden>All</option>
              <option value="volvo">1</option>
              <option value="saab">2</option>
              <option value="mercedes">3</option>
              <option value="audi">4</option>
            </select>
          </div>
          <div className="filtercrit">
            <label>Search</label>
            <input
              type="search"
              name="query"
              className="search-input"
              placeholder="Search..."
            />
            <button type="" className="search-button">
              <i className="sear fas fa-search sear"></i>
            </button>
          </div>
        </div>
        <div className="browsing">
          {items.map((item, index) => (
            <div key={index}>
              <div className="browsingcell">
                <div>
                  <img
                    className="browsedimage"
                    src="https://via.placeholder.com/210x270"
                    alt="Dummy Image"
                  />
                </div>
                <div className="browsedtext">name</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Browse;
