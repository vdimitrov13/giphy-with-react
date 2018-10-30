class APICalls {
    
    static sendRequest(successCallback, data) {
        const url = 'http://api.giphy.com/v1/gifs/random?api_key=WTY7gscW7EDHFieMr1QLno5Z4fW0E152';
        if (data instanceof Array){
            //TODO: implement multiple data params handling
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