import React from 'react'

const ResidenceSearch = (props) => {

    return (
        <div className = "ui search searchBar">
            <div className="ui icon input">
                <input onChange={props.handleSearchInput} placeholder="Gods" className="prompt" />
                <i className="search icon" />
            </div>
        </div>
    )

}

export default ResidenceSearch;