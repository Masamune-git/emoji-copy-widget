async function emoji () {
  // var sample = await window.api.sample()
  const emojiTest = await window.api.emojiTest()
  const emojiFiltered = emojiTest.filter((el) => el.codes.match(/ /) == null)

  const sliceByNumber = (array, number) => {
    const length = Math.ceil(array.length / number)
    return new Array(length).fill().map((_, i) =>
      array.slice(i * number, (i + 1) * number)
    )
  }

  const emojiSlice = sliceByNumber(emojiFiltered, 10)

  emojiSlice.forEach(elementArray => {
    elementArray.forEach(element => {
      const dom = document.createElement('input')
      dom.setAttribute('id', element.name)
      dom.setAttribute('onclick', `copy("${element.char}")`)
      dom.setAttribute('type', 'button')
      dom.setAttribute('value', element.char)
      document.body.appendChild(dom)
    })
  })
}

function copy (copyEmoji) {
  // コピー対象をJavaScript上で変数として定義する
  const copyTarget = document.createElement('input')

  document.body.appendChild(copyTarget)
  copyTarget.id = 'emoji'
  // コピー対象のテキストを選択する
  copyTarget.value = copyEmoji
  copyTarget.select()
  // 選択しているテキストをクリップボードにコピーする
  document.execCommand('copy')
  document.body.removeChild(copyTarget)
  // コピーをお知らせする
  alert('I was able to copy it !! : ' + copyTarget.value)
}

emoji()
