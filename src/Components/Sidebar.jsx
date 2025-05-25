import React from "react";
import "../Styles/Sidebar.css";
import sidebarLinks from "../data/sidebarLinks";

import {
  LayoutDashboard,
  History,
  Calendar,
  ClipboardList,
  BarChart,
  FlaskConical,
  MessageCircle,
  Phone,
  Settings,
} from "lucide-react";

const iconMap = {
  Dashboard: <LayoutDashboard size={20} />,
  History: <History size={20} />,
  Calendar: <Calendar size={20} />,
  Appointments: <ClipboardList size={20} />,
  Statistics: <BarChart size={20} />,
  Tests: <FlaskConical size={20} />,
  Chat: <MessageCircle size={20} />,
  Support: <Phone size={20} />,
  Setting: <Settings size={20} />,
};

const Sidebar = () => {
  // Separate the Setting item from others
  const mainGroups = sidebarLinks.map(group => ({
    ...group,
    links: group.links.filter(link => link !== "Setting"),
  }));

  // Assuming "Setting" is a separate link, find it
  const settingLink = sidebarLinks
    .flatMap(group => group.links)
    .find(link => link === "Setting");

  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logoBlue">Health</span>
        <span className="logoBlack">care.</span>
      </div>
      <nav className="mainNav">
        {mainGroups.map((group, index) => (
          <div key={index} className="navGroup">
            {group.section && <div className="sectionTitle">{group.section}</div>}
            <ul className="navList">
              {group.links.map((link) => (
                <li key={link} className="navItem">
                  {iconMap[link]}
                  <span>{link}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      {settingLink && (
        <div className="settingNav">
          <ul className="navList">
            <li className="navItem">
              {iconMap[settingLink]}
              <span>{settingLink}</span>
            </li>
          </ul>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
