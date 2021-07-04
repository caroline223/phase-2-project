import React from 'react' 
import { Image, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class HomeInfo extends React.Component {
    

    render() {

        const { type, url } = this.props.home

         return (
            
            <Link to={`/${this.props.home.type}`} >
                <Card>
                    <Image src={ url } className="cardImage"  />
                        <Card.Content>
                            <Card.Header>
                                { type }                    
                                <br />
                            </Card.Header>
                        </Card.Content>   
                 </Card>  
            </Link>    
         )
     }

}

export default HomeInfo