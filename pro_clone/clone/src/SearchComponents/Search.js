// CombinedSearch.js
import React, { useState } from 'react';
import './Search.css';

const Search = () => {
  const data = [
    {
      "quote": "quote1",
      "author": "aut1",
      "image": "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      "quote": "quote2",
      "author": "aut2",
      "image": "https://images.pexels.com/photos/1767434/pexels-photo-1767434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    // ... (additional data entries)
  ];

  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const searchItem = (searchItem) => {
    setValue(searchItem);
    data.forEach(item => {
      if (item.quote === searchItem) {
        console.log('Search item found:', searchItem, item.quote, item.author, item.image);
        // Perform actions you need when a match is found
      }
    });
  };

  return (
    <div className='CombinedSearchContainerMain'>
      <div className='CombinedSearch-Container'>
        <div className='CombinedSearch_inner'>
          <input type='text' placeholder='Search...' value={value} onChange={onChange} />
          <button onClick={() => searchItem(value)}>Search</button>
        </div>
        <div className='CombinedSearch-drop-item'>
          {data
            .filter(item => {
              const searchItem = value.toLowerCase();
              const name = item.quote.toLowerCase();

              return searchItem && name.startsWith(searchItem) && name !== searchItem;
            })
            .slice(0, 10)
            .map(item => (
              <div onClick={() => searchItem(item.quote)} className='CombinedSearch-drop-row' key={item.quote}>
                <img src={item.image} alt='icon' className='CombinedSearch-icon' />
                <span>{item.quote}</span>
              </div>
            ))}
        </div>
      </div>
      {/* Additional content can be added here */}
    </div>
  );
};

export default Search;
