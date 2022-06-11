import { Menu } from "../../atoms";
import Submenu from "../../atoms/Submenu";

const Sidebar = () => {
  return (
    <aside className="w-2/12 h-full align-middle bg-white top-0 p-6 ">
      <h1 className="text-xl font-bold">Logo Company</h1>
      <ul className="pt-8 space-y-1">
        <Menu name="Dashboard" icon="home" active="true" />
        <Menu name="List" icon="list" />
        <Menu name="Company" icon="cast">
          <Submenu menu={["submenu", "submenu"]} />
        </Menu>
        <Menu name="Employee" icon="credit-card">
          <Submenu menu={["submenu", "submenu"]} />
        </Menu>
        <Menu name="Customer" icon="user">
          <Submenu menu={["List Customer", "Add Customer", "Trash"]} />
        </Menu>
        <Menu name="Fleet" icon="copy">
          <Submenu menu={["submenu", "submenu"]} />
        </Menu>
        <Menu name="Work Services" icon="file-plus">
          <Submenu menu={["submenu", "submenu"]} />
        </Menu>
        <Menu name="Workday" icon="file-text">
          <Submenu menu={["submenu", "submenu"]} />
        </Menu>
        <Menu name="Invoices" icon="file">
          <Submenu menu={["submenu", "submenu"]} />
        </Menu>
        <Menu name="Owner" icon="map">
          <Submenu menu={["submenu", "submenu"]} />
        </Menu>
        <Menu name="Log & History" icon="calendar"/>
        <Menu name="Settings" icon="settings"/>
        <div className="mt-auto ">
          <hr />
          <Menu name="Logout" icon="log-out" />
        </div>
      </ul>
    </aside>
  );
};

export default Sidebar;
