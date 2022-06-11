/* eslint-disable no-mixed-operators */
import React, { useState } from "react";
import FeatherIcon from "feather-icons-react";
import { useNavigate } from "react-router-dom";

const Menu = ({ name, icon, active, link, inactive, children }) => {
  const [status, setStatus] = useState(false);
  const [Default, setDefault] = useState(active);
  function changeStatus() {
    setStatus(status ? false : true);
    setDefault(false);
  }

  const history = useNavigate();

  const listActive = Default || status && !inactive ? "bg-blue-100 rounded-md text-blue-800 font-semibold" : "";
  const iconActive = Default || status && !inactive ? "chevron-down" : "chevron-right";
  const subMenuActive = Default || status && !inactive ? "block" : "hidden";

  return (
    <>
      <li className={`flex p-3 justify-between ${listActive}`} onClick={() => changeStatus()}>
        <button onClick={() => (children ? "" : history(`/${link ? link : name.toLowerCase()}`))} className={`flex`}>
          {icon && <FeatherIcon className="my-auto mr-3" icon={icon} size="16" />}
          {name}
        </button>
        {children && <FeatherIcon className="my-auto" icon={iconActive} size="16" />}
      </li>
      {children && <div className={`pl-10 ${subMenuActive}`}>{children}</div>}
    </>
  );
};

export default Menu;
