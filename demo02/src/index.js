import _ from 'lodash';
import './index.css';
import react from './react.png';

function component() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');

  var image = new Image();
  image.src = react;
  element.appendChild(image);

  return element;
}

document.body.appendChild(component());