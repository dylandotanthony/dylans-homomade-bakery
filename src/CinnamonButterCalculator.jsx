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

    // Calculate amounts and round to the nearest whole number
    const calcBrownSugar = Math.round(BASE_BROWN_SUGAR * multiplier);
    const calcFlour = Math.round(BASE_FLOUR * multiplier);
    const calcCinnamon = Math.round(BASE_CINNAMON * multiplier);
    const totalYield = Math.round(currentButter + calcBrownSugar + calcFlour + calcCinnamon);

    return (
        <div className="card shadow-sm border-0 mx-auto p-4 my-4" style={{ maxWidth: '600px', borderRadius: '12px', backgroundColor: '#fff', border: '1px solid #eaeaea' }}>
            <div className="card-body text-start d-flex flex-column">
                <h2 className="h4 fw-bold text-dark mb-4 text-center">Cinnamon Butter Scaler</h2>
                
                <div className="mb-4">
                    <label className="form-label fw-bold text-secondary d-block mb-2">Butter Amount (g)</label>
                    <input 
                        type="number" 
                        step="1" 
                        className="form-control form-control-lg p-3 w-100 border rounded bg-light fw-bold text-center" 
                        style={{ fontSize: '1.5rem' }}
                        value={butter} 
                        onChange={handleButterChange} 
                    />
                </div>

                <hr className="my-4" />

                <h3 className="h5 fw-bold mb-3 text-dark">Scaled Ingredients</h3>
                <ul className="list-unstyled mb-4">
                    <li className="d-flex justify-content-between py-3 border-bottom text-muted fs-5">
                        <span className="fw-medium">Butter</span>
                        <span className="fw-bold text-dark">{currentButter > 0 ? Math.round(currentButter) + ' g' : '-'}</span>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom text-muted fs-5">
                        <span className="fw-medium">Brown Sugar</span>
                        <span className="fw-bold text-dark">{currentButter > 0 ? calcBrownSugar + ' g' : '-'}</span>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom text-muted fs-5">
                        <span className="fw-medium">Flour</span>
                        <span className="fw-bold text-dark">{currentButter > 0 ? calcFlour + ' g' : '-'}</span>
                    </li>
                    <li className="d-flex justify-content-between py-3 border-bottom text-muted fs-5">
                        <span className="fw-medium">Cinnamon</span>
                        <span className="fw-bold text-dark">{currentButter > 0 ? calcCinnamon + ' g' : '-'}</span>
                    </li>
                </ul>

                <div className="mt-2">
                    <div className="p-3 bg-light rounded text-center shadow-sm">
                        <span className="fw-bold text-secondary fs-5">Total Yield: </span>
                        <span className="fw-bold text-success" style={{ fontSize: '1.5rem' }}>{totalYield} g</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
