const button = document.querySelector('button');
const h2E1 = document.querySelector('h2');
const bge1 = document.querySelector('section');

button.addEventListener('click', ()=>{
    let color = '#';
    color += Math.random().toString(16).slice(2,8);
    bge1.style.backgroundColor = color;
    h2E1.textContent = color ;
})
