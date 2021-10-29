export const eatenSushis = (sushis) => sushis.filter(sushi => sushi.eaten)
export const amountSpent = (sushis) => eatenSushis(sushis).reduce(
  (previousVal, sushi) => previousVal + sushi.price,
  0
)
