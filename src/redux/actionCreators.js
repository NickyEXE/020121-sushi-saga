export const moreSushi = () => ({type: "MORE_SUSHI"})
export const getSushis = () => {
  return dispatch => fetch("http://localhost:3000/sushis")
  .then(res => res.json())
  .then(sushis => dispatch({
    type: "GET_SUSHIS",
    payload: sushis.map(sushi => ({...sushi, eaten: false}))
    })
  )
}
export const eatSushi = (id) => ({type: "EAT_SUSHI", payload: id})
