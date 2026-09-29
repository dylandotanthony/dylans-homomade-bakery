import React, { useState } from 'react';

export default function CinnamonButterCalculator() {
    // Base recipe values
    const BASE_BUTTER = 39;
    const BASE_BROWN_SUGAR = 45;
    const BASE_FLOUR = 11;
    const BASE_CINNAMON = 5;

    const [butter, setButter] = useState(BASE_BUTTER);

    const handleButterChange = (e) => {
        const val = e.target.value;
        setButter(val === "" ? "" : parseFloat(val));
    };

    const currentButter = parseFloat(butter) || 0;
    const multiplier = currentButter / BASE_BUTTER;

    // Calculate amounts and round to 1 decimal place for accuracy on small quantities
    const calcBrownSugar = Math.round((BASE_BROWN_SUGAR * multiplier) * 10) / 10;
    const calcFlour = Math.round((BASE_FLOUR * multiplier) * 10) / 10;
    const calcCinnamon = Math.round((BASE_CINNAMON * multiplier) * 10) / 10;
    const totalYield = Math.round((currentButter + calcBrownSugar + calcFlour + calcCinnamon) * 10) / 10;

    return (
        <div className="card shadow-sm border-0 h-100 p-3" style={{ borderRadius: '12px', backgroundColor: '#fff', border: '1px solid #eaeaea' }}>
            <div className="card-body text-start d-flex flex-column">
                <h2 className="h5 fw-bold text-muted mb-3 text-uppercase">Cinnamon Butter Scaler</h2>
                
                <div className="mb-4 mt-3">
                    <label className="form-label fw-bold small text-secondary d-block mb-1">Target Butter Amount (g)</label>
                    <input 
                        type="number" 
                        step="1" 
                        className="form-control p-2 w-100 border rounded bg-light fw-bold" 
                        value={butter} 
                        onChange={handleButterChange} 
                    />
                </div>

                <hr />

                <h3 className="h6 fw-bold mt-4 mb-2 text-dark">Scaled Ingredients</h3>
                <ul className="list-unstyled mb-4 flex-grow-1">
                    <li className="d-flex justify-content-between py-2 border-bottom text-muted">
                        <span className="fw-medium">Butter</span>
                        <span className="fw-bold text-dark">{currentButter > 0 ? currentButter + ' g' : '-'}</span>
                    </li>
                    <li className="d-flex justify-content-between py-2 border-bottom text-muted">
                        <span className="fw-medium">Brown Sugar</span>
                        <span className="fw-bold text-dark">{currentButter > 0 ? calcBrownSugar + ' g' : '-'}</span>
                    </li>
                    <li className="d-flex justify-content-between py-2 border-bottom text-muted">
                        <span className="fw-medium">Flour</span>
                        <span className="fw-bold text-dark">{currentButter > 0 ? calcFlour + ' g' : '-'}</span>
                    </li>
                    <li className="d-flex justify-content-between py-2 border-bottom text-muted">
                        <span className="fw-medium">Cinnamon</span>
                        <span className="fw-bold text-dark">{currentButter > 0 ? calcCinnamon + ' g' : '-'}</span>
                    </li>
                </ul>

                <div className="mt-auto pt-3">
                    <div className="p-3 bg-light rounded text-end shadow-sm">
                        <span className="fw-bold text-secondary">Total Yield: </span>
                        <span className="fw-bold text-success" style={{ fontSize: '1.2rem' }}>{totalYield} g</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
