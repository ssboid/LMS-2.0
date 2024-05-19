import React from "react";
import MultiSelect from "../MultiSelect";
const Browse = () => {
  const count = 20;
  const items = Array.from({ length: count }, (_, index) => index + 1);
  
  const genreOptions = ['Action', 'Comedy', 'Drama', 'Horror'];
  const languageOptions = ['English', 'Nepali', 'Hindi', 'Japanese'];
  const ratingOptions = ['G', 'PG', 'PG-13', 'R'];
  const franchiseOptions = ['Marvel', 'DC', 'Star Wars', 'Harry Potter'];
  const audienceOptions = ['Kids', 'Teens', 'Adults', 'Family'];
  const availabilityOptions = ['In Stock', 'Out of Stock', 'Pre-order', 'Discontinued'];
  const publisherOptions = ['Penguin', 'HarperCollins', 'Simon & Schuster', 'Macmillan'];

  return (
    <div>
      <div className="pagebox">
        <div className="filterbox">
          <div className="filtercrit">
            <MultiSelect label="Genre" options={genreOptions} />
          </div>
          <div className="filtercrit">
            <MultiSelect label="Language" options={languageOptions} />
          </div>
          <div className="filtercrit">
            <MultiSelect label="Rating" options={ratingOptions} />
          </div>
          <div className="filtercrit">
            <MultiSelect label="Franchise" options={franchiseOptions} />
          </div>
          <div className="filtercrit">
            <MultiSelect label="Audience" options={audienceOptions} />
          </div>
          <div className="filtercrit">
          <label>Availabilty</label>
            <MultiSelect label="Availability" options={availabilityOptions} />
          </div>
          <div className="filtercrit">
            <MultiSelect label="Publisher" options={publisherOptions} />
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