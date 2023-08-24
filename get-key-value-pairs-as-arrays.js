function keysAndValues(data) {
  return [Object.keys(data), Object.values(data)]
}

function keysAndValues(data) {
  let output = [[], []]
  for (let key in data) {
    output[0].push(key)
    output[1].push(data[key])
  }
  return output
}
