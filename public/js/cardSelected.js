const mobile = document.getElementById('mobile')
const web = document.getElementById('web')
const desktop = document.getElementById('desktop')
const graphic = document.getElementById('graphic')


mobile.addEventListener('click',()=>{
    if(mobile.classList.contains('selected')){
        mobile.classList.remove('selected')
    }else{
        mobile.classList.add('selected')
    }
})

web.addEventListener('click',()=>{
    if(web.classList.contains('selected')){
        web.classList.remove('selected')
    }else{
        web.classList.add('selected')
    }
})

desktop.addEventListener('click',()=>{
    if(desktop.classList.contains('selected')){
        desktop.classList.remove('selected')
    }else{
        desktop.classList.add('selected')
    }
})

graphic.addEventListener('click',()=>{
    if(graphic.classList.contains('selected')){
        graphic.classList.remove('selected')
    }else{
        graphic.classList.add('selected')
    }
})