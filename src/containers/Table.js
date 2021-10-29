import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { eatenSushis, amountSpent } from '../services/sushiServices'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={x.id} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.money } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eatenSushis)}
        </div>
      </div>
    </Fragment>
  )
}

function mapStateToProps(state){
  // moved logic to service for reuse
  return {
    money: state.initialCash - amountSpent(state.sushis),
    eatenSushis: eatenSushis(state.sushis)
  }
}

export default connect(mapStateToProps)(Table)
