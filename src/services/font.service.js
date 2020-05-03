function isCyrillic(str) {
    let regex = /[\u0400-\u04FF]+/g

    let match = regex.test(str);
    return match;
}

export {
    isCyrillic
}