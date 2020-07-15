// event Handler
// it's used just for events where it's just one function needed.

// this function will be overwritten by the second one, that's is a disadvantage
window.document.onclick = () => {
  console.log('cliked 1');
};

window.document.onclick = () => {
  console.log('cliked 2');
};

// the better solution is to use EventListeners

let h1 = document.querySelector('h1');

h1.addEventListener('click', listener1);
h1.addEventListener('click', listener2);

function listener1() {
  console.log('Listener 1');

  // to remove EventListener use this
  this.removeEventListener('click', listener1);
}
function listener2() {
  console.log('Listener 2');
}

// event behavior

let parent = document.querySelector('.boxParent');
let child = document.querySelector('.boxChild');

// normal case by clicking on child event it appears first child event and then second
// to change the order of an event function, add the third parameter - true

parent.addEventListener(
  'click',
  (event) => {
    console.log('clicked Parent');
  }
  //true
);

// by clicking on child element the event will be bulb up and revoke the parent event, that's why we need to use stopPropagation
child.addEventListener('click', (event) => {
  event.stopPropagation();
  console.log(event);
  console.log('clicked Child');
});
