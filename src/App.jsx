import React from 'react';
import Navbar from './Component/Navbar';
import Sidebar from './Component/Sidebar';
import MainContent from './Component/MainContent';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;