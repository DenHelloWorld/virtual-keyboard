import './index.scss';

const BODY = document.body;
const TITLE = 'Виртуальная клавиатура';
const H1 = document.createElement('h1');

H1.textContent = TITLE;
BODY.appendChild(H1);
BODY.classList.add('body');
H1.classList.add('h1');
