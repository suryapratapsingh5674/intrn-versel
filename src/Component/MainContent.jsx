import React from 'react';

function MainContent() {
  return (
    <main className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-bold mb-2">Total Users</h2>
          <p className="text-3xl font-bold">100</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-bold mb-2">Total Sales</h2>
          <p className="text-3xl font-bold">$1000</p>
        </div>
        <div className="bg-white p-4 shadow rounded">
          <h2 className="text-lg font-bold mb-2">Total Revenue</h2>
          <p className="text-3xl font-bold">$5000</p>
        </div>
      </div>
    </main>
  );
}

export default MainContent;