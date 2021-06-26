import React from 'react';
import '../styles/darkmode.scss';
import SettingsBrightnessIcon from '@material-ui/icons/SettingsBrightness';

const dm = props => {
    return (
       <div className="dark-container">
           <a href="">
               <SettingsBrightnessIcon></SettingsBrightnessIcon>
           </a>
       </div>
    );
};



export default dm;