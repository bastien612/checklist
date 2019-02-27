function resolveAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log('Wait');
            resolve(x);
        }, 10000);
    });
}