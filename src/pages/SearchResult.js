import React from 'react'

const SearchResult = () => {
  const count = 20;
  const items = Array.from({ length: count }, (_, index) => index + 1);
  return (
    <div>
      <div className='pagebox'>
      <div className="browsing">
          {items.map((item, index) => (
            <div key={index}>
              <div className="browsingcell">Content to be repeated</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SearchResult