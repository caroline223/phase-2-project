import React from 'react'

const LocationSearch = (props) => {

    return (
        <div className = "ui search">
            <div className="ui icon input">
                <input onChange={props.handleSearchInput} placeholder="Gods" className="prompt" />
                <i className="search icon" />
            </div>
        </div>
    )

}

export default LocationSearch;