import React from 'react'

const SearchBox = ({searchfeild, searchChange}) => {
    return (
        <div >
        <input 
        className='pa3 ba b--green bg-lightest-blue' 
        type="serch" 
        placeholder="search robots"
        onChange={searchChange}
        
        />
        </div>
    )
}

export default SearchBox;