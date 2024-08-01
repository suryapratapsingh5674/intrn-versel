import React from 'react';

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <ul className="space-y-4">
        <li>
          <a href="#" className="block hover:bg-gray-200 p-4">
            <i className="fas fa-tachometer-alt"></i>
            <span className="ml-4">Dashboard</span>
          </a>
        </li>
        <li>
          <a href="#" className="block hover:bg-gray-200 p-4">
            <i className="fas fa-chart-bar"></i>
            <span className="ml-4">Reports</span>
          </a>
        </li>
        <li>
          <a href="#" className="block hover:bg-gray-200 p-4">
            <i className="fas fa-cog"></i>
            <span className="ml-4">Settings</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;