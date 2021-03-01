const textDisplay = document.getElementById('text')
const phrases = ['my name is Abdulrahman Shaibi.', 'Im a web developer.', 'also a web designer.']

let i = 0
let j = 0
let currentPhrase = []
let deletPhrase = false
let isEnd = false

function loop () {
  isEnd = false
  if(i < phrases.lenght) {
    textDisplay.innerHTML = currentPhrase.join('')

    if(!deletePhrase && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j])
      j++
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if(deletePhrase && j <= phrases[i].length) {
      currentPhrase.pop(phrases[i][j])
      j--
      textDisplay.innerHTML = currentPhrase.join('')
    }

    if (j == phrases[i].length){
      deletePhrase = true
      isEnd = true
    }

    if(deletePhrase && j == 0){
      currentPhrase = []
      deletePhrase  = false
      i++

      if(i == phrases.length) {
        i = 0
      }
    }
  }
  const fastText = Math.random() * (80 - 50) +50
  const normalText = Math.random() * (300 - 200) +200
  const time = isEnd ? 2000 : deletePhrase ? fastText : normalText
  setTimeout(loop, time)
}

loop.call()
