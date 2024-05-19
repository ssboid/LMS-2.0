import React from "react";

const Browse = () => {
  const count = 20;
  const items = Array.from({ length: count }, (_, index) => index + 1);

  return (
    <div>
      <div className="pagebox">
        <div className="filterbox">
          <div className="filtercrit">
            a
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
