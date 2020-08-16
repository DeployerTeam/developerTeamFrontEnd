import {API_BASE_URL_BACK} from '../constants/index';

export default class RequestService {


    request(correct, incorrect, method, path, body){

        var headers = new Headers();

        switch(method){
            case 'GET':
                fetch(API_BASE_URL_BACK + path, {method, headers, body})
                .then(response => {
                    return response.json();
                })
                .then(function(data){
                    if (data !== null) {
                        correct(data);
                    } else {
                        incorrect("error en la solicitud");
                    }
                })
                .catch(error => {
                    incorrect(error);
                });
                return 0;
            case 'POST':

                return 0;
            case 'PUT':
                return 0;
            case 'DELETE':
                return 0;
            default :
                return 0;
        }

    }


}