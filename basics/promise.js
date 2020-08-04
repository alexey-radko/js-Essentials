// Promises

// console.log('request data...');

// setTimeout(() => {
//   console.log('preparing data...');

//   const backeEndData = {
//     server: 'aws',
//     port: 2000,
//     staus: 'working',
//   };
//   setTimeout(() => {
//     backeEndData.modified = true;
//     console.log('Data received', backeEndData);
//   }, 2000);
// }, 2000);

// promises are needed for asynchron operations

const p = new Promise((res, rej) => {
  console.log('request data...');
  setTimeout(() => {
    console.log('preparing data...');

    const backeEndData = {
      server: 'aws',
      port: 2000,
      staus: 'working',
    };
    res(backeEndData);
  }, 2000);
});

// then will be called after the function res() is done
p.then((data) => {
  return new Promise((res, rej) => {
    console.log('promise resolved', data);
    setTimeout(() => {
      data.modified = true;
      // if there is a problem we can call rej()
      // otherwise res()
      res(data);
      //   rej(data);
    }, 2000);
  });
})
  .then((data) => {
    console.log('Data received', data);
  })
  .catch((err) => console.log('Error has been caught', err))
  .finally(() => {
    console.log('Finaly is always called');
  });

const sleep = (ms) =>
  new Promise((res) => {
    setTimeout(() => {
      res();
    }, ms);
  });

// sleep(2000).then(() => console.log('After 2 sec.'));
// sleep(5000).then(() => console.log('After 5 sec.'));

// There's also all function that get all Promises in parameter and waits until all promises will be ready
Promise.all([sleep(2000), sleep(5000)]).then(() => console.log('all promises were executed'));

// race function doesn't wait until all promises will be executed and after the first promise can give a feedback about it
Promise.race([sleep(2000), sleep(5000)]).then(() => console.log('race were executed'));
