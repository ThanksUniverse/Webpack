import './styles.scss'

function titleComponent() {
   const elemH1 = document.createElement('h1')
   elemH1.innerHTML = "Hello World Yeh!"
   elemH1.classList.add('title')
   return elemH1
}

document.body.appendChild(titleComponent())