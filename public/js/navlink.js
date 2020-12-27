const home = document.getElementById('home')
const about = document.getElementById('about')


switch (document.title) {
    case 'Home':
        about.classList.remove('active')
        home.classList.add('active')
        break;
    case 'About':
        about.classList.add('active')
        home.classList.remove('active')
        break;
    default:
        about.classList.remove('active')
        home.classList.remove('active')
        break;
}