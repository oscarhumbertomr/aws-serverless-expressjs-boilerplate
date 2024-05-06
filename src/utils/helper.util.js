function chunkArray (arr, stride = 25) {
  const newArr = []
  for (let i = 0; i < arr.length; i += stride) {
    newArr.push(arr.slice(i, Math.min(i + stride, arr.length)))
  }
  return newArr
}

module.exports = {
  chunkArray
}
