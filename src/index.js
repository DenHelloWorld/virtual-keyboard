import './index.scss';

const BODY = document.body;
const TITLE = 'RSS Виртуальная клавиатура';
const [H1, KEYBOARD_ROOT] = [document.createElement('h1'), document.createElement('div')];
const KEYBOARD_ROWS = 5;
const KEY_MAP = [['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
  ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
  ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter'],
  ['LeftShift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'RightShift'],
  ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', '◄', '▼', '►', 'Ctrl']];

H1.textContent = TITLE;
BODY.append(H1, KEYBOARD_ROOT);
BODY.classList.add('body');
H1.classList.add('h1');
KEYBOARD_ROOT.classList.add('keyboard-root');

for (let i = 0; i < KEYBOARD_ROWS; i += 1) {
  const KEYBOARD_ROW = document.createElement('div');
  KEYBOARD_ROW.classList.add('keyboard-row', `row-${i}`, 'row');
  const keys = KEY_MAP[i];
  for (let j = 0; j < keys.length; j += 1) {
    const KEY = keys[j];
    const BUTTON = document.createElement('div');
    BUTTON.classList.add('keyboard-key', `${KEY}`);
    BUTTON.textContent = KEY;
    KEYBOARD_ROW.appendChild(BUTTON);
  }
  KEYBOARD_ROOT.appendChild(KEYBOARD_ROW);
}
