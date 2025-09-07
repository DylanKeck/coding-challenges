function removeUrlAnchor(url){
    let newUrl = ''
    if (url.includes('#')) {
        const indexUrl = url.indexOf('#')
        return newUrl = url.slice(0, indexUrl)
    }
    else return url
}