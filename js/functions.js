const numbers = document.querySelector('#numbers')
const additionalNumbers = document.querySelector('#additional-numbers')

let lottoNumbers = []
let numbersLength = 0

while (numbersLength < 7) {
    const randomNumber = Math.floor(Math.random() * 37 + 1)
    if (!lottoNumbers.includes(randomNumber)) {
    lottoNumbers.push(randomNumber)
    numbersLength++
  }
}

lottoNumbers.sort((a, b) => a - b);
const row = numbers.insertRow()
for (let i = 0; i < lottoNumbers.length; i++) {
  const col = row.insertCell(i)
  col.innerHTML = lottoNumbers[i]
}

let additionalLottoNumbers = []
let additionalLottoNumbersLength = 0
while (additionalLottoNumbersLength < 2) {
  const randomNumber = Math.floor(Math.random() * 37 + 1)
  if (!lottoNumbers.includes(randomNumber) && !additionalLottoNumbers.includes(randomNumber)) {
    additionalLottoNumbers.push(randomNumber)
    additionalLottoNumbersLength++
  }
}

additionalLottoNumbers.sort((a, b) => a - b);
const additionalRow = additionalNumbers.insertRow()
for (let i = 0; i < additionalLottoNumbers.length; i++) {
  const col = additionalRow.insertCell(i)
  col.innerHTML = additionalLottoNumbers[i]
}