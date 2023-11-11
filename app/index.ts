
import './styles.scss';


const message: string = 'Hello, TypeScript!';
console.log(message);


const array = [1, 2, 3];
const squared = array.map((x) => x * x);
console.log(squared);


const element = document.createElement('div');
element.innerHTML = 'Hello, styled world!';
element.classList.add('styled-element');
document.body.appendChild(element);
