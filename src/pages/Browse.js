import React from "react";
import MultiSelect from "../MultiSelect";
import { FaFilter } from "react-icons/fa6";
const Browse = () => {
  const count = 20;
  const items = Array.from({ length: count }, (_, index) => index + 1);

  const genreOptions = ["Action", "Comedy", "Drama", "Horror"];
  const languageOptions = ["English", "Nepali", "Hindi", "Japanese"];
  const ratingOptions = ["0", "1+", "2+", "3+", "4+", "5"];
  const franchiseOptions = ["Stand Alone", "Series"];
  const audienceOptions = ["Kids", "Teens", "Adults", "Family"];
  const availabilityOptions = ["In Stock", "Out of Stock"];
  const publisherOptions = [
    "Penguin",
    "HarperCollins",
    "Simon & Schuster",
    "Macmillan",
  ];

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
            <div className="browsesearchbox">
            <label>Keyword</label>
            <form>
            <input
              type="search"
              name="query"
              className="search-input"
              placeholder="Search..."
            />
            </form>
            </div>
          </div>
          <div className="filtercrit">
            <MultiSelect label="Franchise" options={franchiseOptions} />
          </div>
          <div className="filtercrit">
            <MultiSelect label="Audience" options={audienceOptions} />
          </div>
          <div className="filtercrit">
            <MultiSelect label="Availability" options={availabilityOptions} />
          </div>
          <div className="filtercrit">
            <button className="filter"><div className="fbutton"><FaFilter /></div>Filter</button>
          </div>
          {/* <div className="filtercrit">
            <MultiSelect label="Publisher" options={publisherOptions} />
          </div> */}
          
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
