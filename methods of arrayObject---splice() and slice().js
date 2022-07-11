function threeInOne(arr) {
  let splitted = [];
  let res = [];
  for (let i = 0; i < arr.length; i += 3) {
    splitted.push(arr.slice(i, i + 3));
  }
  for (let i = 0; i < splitted.length; i++) {
    res.push(splitted[i].reduce((a, c) => a + c, 0));
  }
  return res;
}

function threeInOne(arr) {
  let splitted = [];

  for (let i = 0; i < arr.length; i += 3) {
    splitted.push(arr.slice(i, i + 3));
  }

  let res = splitted.map((arr) => arr.reduce((a, c) => a + c, 0));

  return res;
}

function threeInOne(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i += 3) {
    let sliced = arr.slice(i, i + 3);
    res.push(sliced.reduce((a, c) => a + c, 0));
  }
  return res;
}
