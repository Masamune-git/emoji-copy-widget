const emoji = require('emoji.json')
const emojiFiltered = emoji.filter((el) => el.codes.match(/ /) == null)

const sliceByNumber = (array, number) => {
  const length = Math.ceil(array.length / number)
  return new Array(length).fill().map((_, i) =>
    array.slice(i * number, (i + 1) * number)
  )
}

const emojiSlice = sliceByNumber(emojiFiltered, 10)

emojiSlice.forEach(elementArray => {
  elementArray.forEach(element => {
    process.stdout.write(element.char)
  })
  process.stdout.write('\n')
})
