const form = document.querySelector('#memeGenerator')
const inputUrl = document.querySelector('input[name="getUrl"]')
const inputTextTop = document.querySelector('input[name="textTop"]')
const inputTextBottom = document.querySelector('input[name="textBottom"]')
const results = document.querySelector('#results')

form.addEventListener('submit',function(evt){

    evt.preventDefault()
    newDiv = document.createElement('div')
    newImage = document.createElement('img')
    newTopText = document.createElement('p')
    newBottomText = document.createElement('p')
    newButtonText = document.createElement('button')

    newTopText.innerText = inputTextTop.value
    newBottomText.innerText = inputTextBottom.value
    newImage.src = inputUrl.value
    newButtonText.innerText = 'Delete'

    results.append(newDiv)
    newDiv.classList.add('box')
    newImage.classList.add('img')
    newTopText.classList.add('top')
    newBottomText.classList.add('bottom')
    newButtonText.classList.add('btn')


    newDiv.append(newImage,newTopText,newBottomText,newButtonText)

    inputUrl.value = ''
    inputTextTop.value = ''
    inputTextBottom.value = ''
})

results.addEventListener('click',function(e){
    if(e.target.tagName === 'BUTTON'){
        e.target.parentElement.remove()
    }
})
