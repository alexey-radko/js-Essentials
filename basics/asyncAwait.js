const delay = (ms) => {
  return new Promise((r) =>
    setTimeout(() => {
      r();
    }, ms)
  );
};

const url = 'https://jsonplaceholder.typicode.com/todos';

// function fetchData() {
//   return delay(2000)
//     .then(() => fetch(url))
//     .then((response) => response.json());
// }

// fetchData().then((data) => console.log('Data: ', data));

// if it's a async function the key word async must be placed before the word function
async function fetchAsyncTodos() {
  try {
    await delay(2000);
    // await should be always placed before a function with promise
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error('error', e);
  } finally {
  }
}

fetchAsyncTodos();
