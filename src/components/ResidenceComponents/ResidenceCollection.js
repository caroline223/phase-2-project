import React from 'react';
import ResidenceInfo from '../ResidenceComponents/ResidenceInfo'
import { Card } from 'semantic-ui-react'

function ResidenceCollection() {
    
        return (
            <Card.Group itemsPerRow={3}>
                {this.props.residences.map((residencesObj, index) => <ResidenceInfo key={index} residences={ residencesObj } />)}
            </Card.Group>
        )

}

export default ResidenceCollection;