import React from 'react' 
import { Image, Card } from 'semantic-ui-react'

class HomeInfo extends React.Component {


    render() {

        const { type, url } = this.props.home
         return (
             <Card>
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