export default (url, postData, response, err) => {
    return new Promise((resolve, reject) => {
        const p = () => {
            response = response ? response : postData;
            if (err) {
                reject(response);
            } else {
                resolve(response);
            }
        }
        setTimeout(p, Math.random() * 1500 + 150);
    });
}