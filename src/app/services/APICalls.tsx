import { BASE_URL, API_KEY } from '../utils/constants'

class APICalls {
    
    static sendRequest(successCallback, data) {
        let url = BASE_URL + 'gifs/random?api_key=' + API_KEY;

        if(data !== null){    
            url = BASE_URL + 'gifs/search?api_key=' + API_KEY + '&q=' + data + '&limit=15';
        }

        fetch(url)     
            .then(successCallback)
            .catch(this.errorCallBack)
    }
    static errorCallBack(data){
        console.log('Error ' + data);
    }
}
export { APICalls };