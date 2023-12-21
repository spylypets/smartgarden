import React, { useEffect, useState } from 'react';
import Switch from '@mui/material/Switch';
import ControlService from '../services/ControlService';
import Configuration from '../configuration';

function ControlPanel() {

    const controlService = new ControlService();

    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);

    useEffect(() => {

        const config = new Configuration();
        const fetchData = async () => {
            try {
                let response = await fetch(config.CONTROLLER_URL + config.WATERING_STATUS_PATH);
                const isWateringActive = await response.text();
                setChecked1(isWateringActive === "1" ? true : false);
                response = await fetch(config.CONTROLLER_URL + config.LIGHT_STATUS_PATH);
                const isLightActive = await response.text();
                setChecked2(isLightActive === "1" ? true : false);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    const handleWatering = (event) => {
        controlService.switchWatering(event.target.checked).then(result => {
            setChecked1(result === "1" ? true : false);
        });
    };

    const handleLight = (event) => {
        controlService.switchLight(event.target.checked).then(result => {
            setChecked2(result === "1" ? true : false);
        });
    };

    return(
        <React.Fragment>
            <div>
                <label htmlFor='device1'>
                    <span>Watering</span>
                <Switch id="1" name="device1" checked={checked1} onChange={handleWatering} />
                </label>
                <label htmlFor='device2'>
                    <span>Light</span>
                <Switch id="2" name="device2" checked={checked2} onChange={handleLight}/>
                </label>
            </div>
        </React.Fragment>
        
    );
}

export default ControlPanel;