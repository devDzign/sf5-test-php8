var { NativeEventSource, EventSourcePolyfill } = require('event-source-polyfill/src/eventsource');

const url = new URL('http://localhost:3000/.well-known/mercure');
const element =   document.getElementById('users-list');
const token = element.dataset.token
const user = element.dataset.idUser

url.searchParams.append('topic', 'http://monsite.com/ping');

// url.searchParams.append('topic', 'http://monsite.com/user/'+user);
// const eventSource=new EventSource(url);
// const eventSource=new EventSourcePolyfill(url, {
//     headers: {
//         'Authorization': 'Bearer ' + token,
//     }
// });
//
const eventSource = new EventSource(url, {
    withCredentials: true
});

eventSource.onmessage = e => {

    const data = JSON.parse(e.data);
    let message = 'ping all!!'


    if (data.name) {
        message = "Ping par " + data.name
    }


    // afficher dans le dom html ce que tu veux via jquery
    document
        .querySelector('users-list')
        .insertAdjacentHTML(
            'afterbegin',
            ` < div id = "alert" class = "alert alert-success" > ${message} < / div > `
        );


    window.setTimeout(() => {
        const $alert = document.querySelector('#alert');
        const $parent = document.querySelector('users-list');
        $parent.removeChild($alert)
    },3000);


};

