import React from 'react' 
import { Image, Card } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
//import GodContainer from '../../container/GodContainer'
//import HeroContainer from '../../container/HeroContainer'

class HomeInfo extends React.Component {
    

    render() {

        const { type, url } = this.props.home

        const handleClick = () => {
            console.log(this.props.home)

            if (this.props.home.type === "Gods") {
                  <Link to={'src/container/GodContainer.js'}/>
            }
            else if (this.props.home.type === "Heroes") {
                 <Link to={'src/container/HeroContainer.js'} />
            }
            
            //this.props.home.type === "Gods" ? <Link to={'src/container/GodContainer.js'} if /> : <Link to={'src/container/HeroContainer.js'} />
        }

         return (
             
             <Card onClick={handleClick}>
                    <Image src={ url } wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>
                            { type }                    
                            <br />
                        </Card.Header>
                    </Card.Content>
                 </Card>      
         )
     }

}

export default HomeInfo