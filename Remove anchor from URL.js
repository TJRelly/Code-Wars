function removeUrlAnchor(url) {
    if (url.includes('#')) return url.slice(0, url.indexOf('#'))
    else return url
}

const removeUrlAnchor = url => {
    return url.includes('#')
        ? url.slice(0, url.indexOf('#'))
        : url
}

const removeUrlAnchor = url => {
    return url.split('#')[0]
}

const removeUrlAnchor = url => url.split('#')[0]