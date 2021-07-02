import React from 'react'

const HeroSearch = (props) => {

    return (
        <div className = "ui search searchBar">
            <div className="ui icon input">
                <input onChange={props.handleSearchInput} placeholder="Hero" className="prompt" />
                <i className="search icon" />
            </div>
        </div>
    )

}

export default HeroSearch;