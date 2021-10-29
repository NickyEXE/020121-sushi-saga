import React, { Fragment } from 'react'
import { eatSushi } from '../redux/actionCreators'
import { connect } from 'react-redux'

const Sushi = ({ name, price, img_url, id, eaten, eatSushi }) => {
  return (
    <div className="sushi">
      <div className="plate"
           onClick={() => eatSushi(id)}>
        { eaten ? null : <img src={img_url} width="100%" /> }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default connect(null, { eatSushi })(Sushi)
