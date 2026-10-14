'use strict';

function promise1() {
  const promiseButton = document.querySelector('.logo');

  return new Promise((resolve, reject) => {
    promiseButton.addEventListener('click', () => {
      resolve('Promise was resolved!');
    });
  });
}

function promise2() {
  return new Promise((resolve, reject) => {
    reject(new Error('Promise was rejected!'));
  });
}

setTimeout(() => {
  promise2().catch((value) => {
    document.body.innerHTML += `<div class="message error-message">${value}</div>`;
  });
}, 3000);

promise1().then((value) => {
  document.body.innerHTML += `<div class="message">${value}</div>`;
});
