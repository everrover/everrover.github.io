module.exports = (JSON) => {
  for (let prop in JSON) {
    if (JSON[prop] === null || JSON[prop] === undefined) {
      // if (!JSON[prop] || JSON[prop] === null || JSON[prop] === undefined) {
        delete JSON[prop]
    }
  }
  return JSON
}