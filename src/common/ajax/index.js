function ajax(options) {
    options = $.extend(options, {
        dataType: 'json',
        contentType: 'application/json',
        data: JSON.stringify(options.data)
    })
    return $.ajax(options)
}
function ajaxGet(url, data) {
    return ajax({
        url,
        data,
        type: 'GET'
    })
}
function ajaxPost(url, data) {
    return ajax({
        url,
        data,
        type: 'POST'
    })
}
export default ajax;
export { ajaxGet, ajaxPost}