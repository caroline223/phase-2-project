import React from 'react'
import { Card } from 'semantic-ui-react'

class Home extends React.Component {

    render() {

        const cardOne = {
            url: "https://upload.wikimedia.org/wikipedia/commons/5/54/Achille_parmi_les_filles_du_roi_Lycom%C3%A8de_-_Mus%C3%A9e_du_Louvre_-_AGER_Ma_2120.jpg",
            option: "Heroes"
        }

        const CardTwo = {
            url: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Peter_van_Halen_-_Feast_of_the_Gods.jpg",
            option: "Gods"  
        }
        return (
            <Card>
                <Image src={ url } wrapped ui={false} />
                <Card.Content>
                    <Card.Description>
                        Gods                    
                        <br />
                    </Card.Description>
                </Card.Content>
            </Card>   
            
        )
    }

}

export default Home;