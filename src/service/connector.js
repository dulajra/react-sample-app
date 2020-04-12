export default function request(method, url) {
    return new Promise(((resolve, reject) => {
        window.fetch(url, {
            method: method,
            mode: 'cors',
        }).then((response) => {
            response.json().then((data) => {
                resolve(data);
            })
        }).catch((error) => {
            reject(error);
        })
    }))
}