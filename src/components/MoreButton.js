import React from 'react'
import { connect } from 'react-redux'
import { moreSushi } from '../redux/actionCreators'

const MoreButton = (props) => {
    return <button onClick={props.moreSushi}>
            More sushi!
          </button>
}

export default connect(null, {moreSushi})(MoreButton)
