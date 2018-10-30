class APICalls {
    
    static sendRequest(successCallback, data) {
        let url = 'http://api.giphy.com/v1/gifs/random?api_key=WTY7gscW7EDHFieMr1QLno5Z4fW0E152';

        if (data !== null){    
            url = 'http://api.giphy.com/v1/gifs/search?api_key=WTY7gscW7EDHFieMr1QLno5Z4fW0E152&q=' + data + '&limit=1'
            fetch(url)     
                .then(successCallback)
                .catch(this.errorCallBack)
            return;
        }

        fetch(url)     
            .then(successCallback)
            .catch(this.errorCallBack)
    }
    static errorCallBack(data){
        console.log('Error ' + data)
    }
}
export { APICalls };