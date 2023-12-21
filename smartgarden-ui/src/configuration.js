class Configuration {

    WATERING_ON_PATH = "/water/on";
    WATERING_OFF_PATH = "/water/off";
    WATERING_STATUS_PATH = "/water/status";
    LIGHT_ON_PATH = "/light/on";
    LIGHT_OFF_PATH = "/light/off";
    LIGHT_STATUS_PATH = "/light/status";
    
    CONTROLLER_URL = process.env.REACT_APP_CONTROLLER_URL ? process.env.REACT_APP_CONTROLLER_URL :
        window.CONTROLLER_URL ? window.CONTROLLER_URL : "http://192.168.0.57:3030";
}

export default Configuration;