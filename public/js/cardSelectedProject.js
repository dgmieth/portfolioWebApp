const screenshots = document.getElementById('collapseG3ABtn')
const summary = document.getElementById('collapseG2ABtn')
const description =  document.getElementById('collapseG1Btn')

screenshots.addEventListener('click',()=>{
    const text = document.getElementById('collapseG3AH1')
    if(text.classList.contains('selected')){
        text.classList.remove('selected')
    }else{
        text.classList.add('selected')
    }
})

summary.addEventListener('click',()=>{
    const text = document.getElementById('collapseG2AH1')
    const text1 = document.getElementById('collapseG1H1')
    if(text.classList.contains('selected')){
        text.classList.remove('selected')
    }else{
        text.classList.add('selected')
    }
    text1.classList.remove('selected')
})

description.addEventListener('click',()=>{
    const text = document.getElementById('collapseG2AH1')
    const text1 = document.getElementById('collapseG1H1')
    if(text1.classList.contains('selected')){
        text1.classList.remove('selected')
    }else{
        text1.classList.add('selected')
    }
    text.classList.remove('selected')
})