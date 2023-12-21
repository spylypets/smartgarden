import Configuration from '../configuration';

class ControlService {

  constructor() {
    this.config = new Configuration();
  }

  async switchWatering(switchOn) {
    console.log("ControlService.switchWatering():");
    let actionUrl = this.config.CONTROLLER_URL
                  + (switchOn ? this.config.WATERING_ON_PATH : this.config.WATERING_OFF_PATH);

    return fetch(actionUrl ,{
        method: "GET",
        mode: "cors"
      })
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.text();
      }).then(result => {
        return result;
      }).catch(error => {
        this.handleError(error);
      });
  }

  async switchLight(switchOn) {
    console.log("ControlService.switchLight():");
    let actionUrl = this.config.CONTROLLER_URL
                  + (switchOn ? this.config.LIGHT_ON_PATH : this.config.LIGHT_OFF_PATH);

    return fetch(actionUrl ,{
        method: "GET",
        mode: "cors"
      })
      .then(response => {
        if (!response.ok) {
            this.handleResponseError(response);
        }
        return response.text();
      }).then(result => {
        return result;
      }).catch(error => {
        this.handleError(error);
      });
  }

   handleResponseError(response) {
      throw new Error("HTTP error, status = " + response.status);
  }

  handleError(error) {
      console.log(error.message);
  }

}

export default ControlService;
