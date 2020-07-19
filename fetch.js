//######################################
// Working with other API's
//######################################

const url = 'https://jsonplaceholder.typicode.com/users';

//#############################################

const body = {
    name: 'Alexey',
    age: 22,
};

function sendRequest(method, url, body) {
    // fetch method always return a promise
    const config = {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return fetch(url, config).then((response) => {
        if (response.ok) {
            return response.json();
        }
        return response.json().then((error) => {
            const e = new Error('something went wrong');
            e.data = error;
            throw e;
        });
    });
}

async function sendReq(method, url, body) {
    const config = {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const response = await fetch(url, config);
        const data = await response.json();
        if (response.ok) {
            return data;
        } else {
            throw new Error();
        }
    } catch (e) {
        throw new Error('something went wrong in async function', e);
    }
}

sendReq('GET', url)
    .then((data) => {
        console.log(data);
    })
    .catch((e) => {
        console.log(e);
    });
sendRequest('GET', url)
    .then((data) => console.log(data))
    .catch((e) => console.log('Error has been caught', e));

sendRequest('POST', url, body)
    .then((data) => console.log(data))
    .catch((e) => console.log('Error has been caught', e));
