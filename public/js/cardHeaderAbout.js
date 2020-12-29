const header01 = document.getElementById('header01')
const header02 = document.getElementById('header02')
const header03 = document.getElementById('header03')
// const header04 = document.getElementById('header04')
const header05 = document.getElementById('header05')


header01.addEventListener('click', ()=>{
    if(header01.classList.contains('selected')){
        header01.classList.remove('selected')
    }else{
        header01.classList.add('selected')
    }
    header02.classList.remove('selected')
    header03.classList.remove('selected')
    // header04.classList.remove('selected')
    header05.classList.remove('selected')
})

header02.addEventListener('click', ()=>{
    if(header02.classList.contains('selected')){
        header02.classList.remove('selected')
    }else{
        header02.classList.add('selected')
    }
    header01.classList.remove('selected')
    header03.classList.remove('selected')
    // header04.classList.remove('selected')
    header05.classList.remove('selected')
})

header03.addEventListener('click', ()=>{
    if(header03.classList.contains('selected')){
        header03.classList.remove('selected')
    }else{
        header03.classList.add('selected')
    }
    header01.classList.remove('selected')
    header02.classList.remove('selected')
    // header04.classList.remove('selected')
    header05.classList.remove('selected')
})

// header04.addEventListener('click', ()=>{
//     if(header04.classList.contains('selected')){
//         header04.classList.remove('selected')
//     }else{
//         header04.classList.add('selected')
//     }
//     header01.classList.remove('selected')
//     header02.classList.remove('selected')
//     header03.classList.remove('selected')
//     header05.classList.remove('selected')
// })

header05.addEventListener('click', ()=>{
    if(header05.classList.contains('selected')){
        header05.classList.remove('selected')
    }else{
        header05.classList.add('selected')
    }
    header01.classList.remove('selected')
    header02.classList.remove('selected')
    header03.classList.remove('selected')
    // header04.classList.remove('selected')
})