import React from 'react' 
import { Image, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


class HomeInfo extends React.Component {


    render() {

        const layout = {
            card : {
                backgroundColor: "white", 
                opacity: "0.8",
                borderRadius: "40px",
                margin: "45px"
            }
        }

        const { type, url } = this.props.home

         return (
            
            <Link to={`/${this.props.home.type}`} >
                <Card style={layout.card}>
                    <Image src={ url } className="cardImage"  />
                        <Card.Content>
                            <header>
                                { type }                    
                                <br />
                            </header>
                        </Card.Content>   
                 </Card>  
            </Link>    
         )
     }

}

export default HomeInfo