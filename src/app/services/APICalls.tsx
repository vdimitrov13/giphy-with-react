import { BASE_URL, API_KEY } from '../utils/constants'

class APICalls {
    
    static sendRequest(successCallback, data){
        let url = BASE_URL + 'gifs/random?api_key=' + API_KEY;

        if(data !== null){    
            url = BASE_URL + 'gifs/search?api_key=' + API_KEY + '&q=' + data + '&limit=15';
        }

        fetch(url)     
            .then(successCallback)
            .catch(this.errorCallBack)
    }
    static postData(successCallback, data){
        let url = 'http://localhost:5000/auth/login'

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })
        .then(successCallback)
        .catch(this.errorCallBack)

    }
    static errorCallBack(error){
        console.log('Error ' + error);
    }
}
export { APICalls };