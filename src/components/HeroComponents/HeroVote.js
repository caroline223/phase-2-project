import React from 'react'


class HeroVote extends React.Component{

    /*state = {
        count:0
    }

    increaseVote = () => {
        this.setState(({count}) => ({
            count: count + 1
        }))
    }
    */
    
    render(){
        return(
            <div>
                {this.props.count < 1 ? <button onClick={this.props.increaseVote}>+</button> : this.props.count}
               
            </div>
        )
    }

}

export default HeroVote;