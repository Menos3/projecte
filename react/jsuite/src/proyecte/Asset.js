import React from 'react'
import PropTypes from 'prop-types'
import * as data from './BaseDatos.json'


function Asset({ id}) {
    const assets = (JSON.parse(JSON.stringify(data))).assets;
    
    const asset = assets.filter(element => {return element.id===id })[0];

    
    return (
      
        <p>
            {asset.model}
        </p>
        
  )
}

Asset.propTypes = {
    model: PropTypes.string
}

export default Asset
