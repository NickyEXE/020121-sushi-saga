import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'
import { connect } from 'react-redux'

const SushiContainer = ({sushis}) => {
  return (
    <Fragment>
      <div className="belt">
        {sushis.map(sushi => <Sushi {...sushi} key={sushi.id} />)}
        <MoreButton />
      </div>
    </Fragment>
  )
}

const mapStateToProps = (state) => {
  const slicedSushis = state.sushis.slice(state.offset, state.offset + 4)
  return {
    sushis: slicedSushis
  }
}

export default connect(mapStateToProps)(SushiContainer)
