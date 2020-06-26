import  x from './x.js'
import png from  './assets/1.png'

console.log(x)
console.log('hi')
console.log(png)

const div = document.querySelector('#app')
div.innerHTML = `
<img src= "${png}">
`
const btn = document.createElement('button')
btn.innerText = '懒加载'
btn.onclick =()=>{
  const lazy = import('./lazy')
  lazy.then((module)=>{
    module.default()},()=>{})
}
document.body.appendChild(btn)