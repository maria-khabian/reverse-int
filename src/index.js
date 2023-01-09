module.exports = function reverse (n) {
    if (n<0) {
        n = -n;
    }
    const nArr = Array.from(n.toString(), Number).reverse().join('')
    return Number(nArr);
}
