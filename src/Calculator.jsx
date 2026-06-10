import React from 'react';
import { Link } from 'react-router-dom';

export default function Calculator() {
  return (
    <div className="container pb-5 text-center" style={{ paddingTop: '50px' }}>
      <h1 className="responsive-title bg-white px-4 py-2 rounded-pill shadow-sm border border-dark m-0 mb-4">
        DHG Calculator
      </h1>
      <div className="card shadow-sm border-0 p-4">
        <p>Calculator tool coming soon...</p>
        <Link to="/" className="btn btn-outline-info mt-3">← Back to Bakery</Link>
      </div>
    </div>
  );
}
