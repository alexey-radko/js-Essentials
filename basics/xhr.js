//######################################
// Working with other API's
//######################################

const { Http2ServerRequest } = require('http2');

const url = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();

//
xhr.open('GET', url);

// from the server you will get an answer as a string
// in order to parse them do this

// or use JSON parse function JSON.parse(xhr.response)
xhr.responseType = 'json';

// if the data loaded
xhr.onload = () => {
  // check if response status more than 400
  if (xhr.status >= 400) {
    console.log('Error', xhr.response);
  } else {
    console.log(xhr.response);
  }
};
// if an network error
xhr.onerror = () => {
  console.log(xhr.response);
};
xhr.send();

//#############################################

const body = {
  name: 'Alexey',
  age: 22,
};

function sendRequest(method, url, body) {
  return new Promise((res, rej) => {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.responseType = 'json';

    // in order to send an object to any server content-type should be changed
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = () => {
      // check if response status more than 400
      if (xhr.status >= 400) {
        rej(xhr.response);
      } else {
        res(xhr.response);
      }
    };
    // if an network error
    xhr.onerror = () => {
      rej(xhr.response);
    };

    // in order to send request for method post some data need to be put in the parameter
    // some data need be also to be stringify
    xhr.send(JSON.stringify(body));
  });
}

sendRequest('GET', url)
  .then((data) => console.log(data))
  .catch((e) => console.log('Error has been caught', e));

sendRequest('POST', url, body)
  .then((data) => console.log(data))
  .catch((e) => console.log('Error has been caught', e));
