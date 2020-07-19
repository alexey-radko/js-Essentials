//####################################################
// Create cookie
//####################################################

// function createCookie(name, value) {
//   let date = new Date();
//   let date_delete = 'expires=' + date.toString();
//   date.setTime(date.getTime() + date_delete * 24 * 60 * 60 * 1000);

//   // delete cookie by day x
//   //   document.cookie = name + '=' + value + ';' + date_delete;
//   document.cookie = name + '=' + value + ';';
// }

createCookie('Name', 'Alexey');
createCookie('Age', '22');
createCookie('Country', 'DE');

//####################################################
// read cookie
//####################################################

// function readCookie(value) {
//   let element = value + '=';
//   let cookieArray = document.cookie.split(';');

//   let i;
//   let elementLength = element.length;
//   for (i = 0; i < cookieArray.length; i++) {
//     let key = cookieArray[i].trim().slice(0, elementLength);

//     if (key == element) {
//       return cookieArray[i].trim().slice(elementLength, cookieArray[i].length);
//     }
//   }
// }

function createCookie(name, value) {
  let date = new Date();
  let date_delete = 'expires=' + date.toString();
  date.setTime(date.getTime() + date_delete * 24 * 60 * 60 * 1000);

  if (readCookie(name) != '') {
    let data = readCookie(name) + '_' + value;
    document.cookie = name + '=' + data + ';' + date_delete;
  } else {
    // delete cookie by day x
    document.cookie += name + '=' + value + ';' + date_delete;
    //   document.cookie = name + '=' + value + ';';
  }
}
function readCookie(value) {
  let element = value + '=';
  let cookieArray = document.cookie.split(';');

  let i;
  let elementLength = element.length;
  for (i = 0; i < cookieArray.length; i++) {
    let key = cookieArray[i].trim().slice(0, elementLength);

    if (key == element) {
      return cookieArray[i].trim().slice(elementLength, cookieArray[i].length);
    }
  }
}

console.log(readCookie('Name'));
console.log(readCookie('Age'));
console.log(readCookie('Country'));
