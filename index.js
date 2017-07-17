function pigLatinize(input) {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  var sliceIndex = 0
  while(!vowels.includes(input[sliceIndex])) {
        sliceIndex++
      }
    return input.slice(sliceIndex) + input.slice(0, sliceIndex) + 'ay';
  }

var button = document.querySelector('button');

button.addEventListener('click', function(){
  var input = document.querySelector('input').value
  var resultContainer = document.getElementById('result-container')
  var result = document.getElementById('result')
  
  result.innerText = pigLatinize(input)
  resultContainer.classList.remove('hidden')
});