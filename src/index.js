import './index.scss';

const BODY = document.body;
const TITLE = 'RSS Виртуальная клавиатура';
const [H1, KEYBOARD_ROOT] = [document.createElement('h1'), document.createElement('div')];
const KEYBOARD_ROWS = 5;

H1.textContent = TITLE;
BODY.append(H1, KEYBOARD_ROOT);
BODY.classList.add('body');
H1.classList.add('h1');
KEYBOARD_ROOT.classList.add('keyboard-root');

for (let i = 0; i < KEYBOARD_ROWS; i += 1) {
  const KEYBOARD_ROW = document.createElement('div');
  KEYBOARD_ROW.classList.add('keyboard-row', 'row');
  KEYBOARD_ROOT.appendChild(KEYBOARD_ROW);
}
