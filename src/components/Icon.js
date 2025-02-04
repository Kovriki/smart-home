import React from "react";
import { ReactComponent as iconMenu } from  "../assets/images/iconMenu.svg";
import { ReactComponent as iconDeviceInfo } from  "../assets/images/iconDeviceInfo.svg";
import { ReactComponent as iconAlert } from  "../assets/images/iconAlert.svg";

const icons = {
    alert: iconAlert,
    deviceInfo: iconDeviceInfo,
    menu: iconMenu,
  };
  
function Icon({ name }) {
  const SvgIcon = icons[name]; 
  return SvgIcon ? <SvgIcon /> : null;
}
  

export default Icon;
