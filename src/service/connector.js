export default async function request(method, url) {
    try {
        const res = await window.fetch(url, {
            method: method,
            mode: 'cors',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
                'Content-Type': 'application/json'
            },
        });
        return res.json();
    } catch (e) {
        return Promise.reject(e);
    }
}
