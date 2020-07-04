module.exports = (amount, id) => {
  const list = []
  for (let i = 1; i <= amount; i++) {
    list.push({ id_order: id, numberTickets: i })
  }
  return list
}
