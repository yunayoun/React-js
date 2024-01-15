import React from 'react'

function Search() {
  return (
    <div id='search'>
      <div className="search_inner">
        <label htmlFor="searchInput">
          <span className='ir'>검색</span>
        </label>
        <input 
          type="text" 
          name='searchInput'
          id='searchInput'
          className="search_Input" 
          placeholder='검색어입력'
          autoComplete='off'
        />
      </div>
    </div>
  )
}

export default Search