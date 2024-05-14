import axios from "axios"

export function availableBarrios() {
    return axios.get('http://127.0.0.1:8080/barrio').then(function (response) {
        var data = response.data;
        return data;
    })
}

export function postSensor(e) {
    
    return axios.post('http://127.0.0.1:8080/sensor', {
        serial: e.target.serial.value,
        barrio_id: parseInt(e.target.barrio.value)
    }).then(function (response) {
        var data = response.data;
        return data;
    })
}