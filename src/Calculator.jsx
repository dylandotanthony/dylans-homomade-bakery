import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

// Your Master Recipe Database
const recipes = {
    "og_loaf": {
        name: "OG Sourdough",
        dough: [{ name: "Flour", weight: 475.8 }, { name: "Water", weight: 295 }, { name: "Starter", weight: 119 }, { name: "Salt", weight: 15.2 }],
        inclusions: []
    },
    "roasted_chile": {
        name: "Roasted Chile Cheese Sourdough",
        dough: [{ name: "Flour", weight: 405.5 }, { name: "Water", weight: 251.4 }, { name: "Starter", weight: 101.4 }, { name: "Salt", weight: 13 }],
        inclusions: [{ name: "Roasted Green Chile", weight: 60.8 }, { name: "Cheese Mix", weight: 73 }]
    },
    "cin_raisin": {
        name: "Cinnamon Raisin Sourdough",
        dough: [{ name: "Flour", weight: 417.5 }, { name: "Water", weight: 250.5 }, { name: "Starter", weight: 100.2 }, { name: "Salt", weight: 13.4 }, { name: "Brown Sugar", weight: 12.5 }, { name: "Vanilla Extract", weight: 4.2 }],
        inclusions: [{ name: "Raisins", weight: 41.7 }, { name: "CIN BUTTER", weight: 1 }]
    },
    "jala_ched": {
        name: "Jalapeno Cheddar Cheese Sourdough",
        dough: [{ name: "Flour", weight: 405.5 }, { name: "Water", weight: 251.4 }, { name: "Starter", weight: 101.4 }, { name: "Salt", weight: 13 }],
        inclusions: [{ name: "Jalapeno", weight: 60.8 }, { name: "Cheddar Cheese", weight: 73 }]
    },
    "grilled_chz": {
        name: "Grilled Cheese Sourdough",
        dough: [{ name: "Flour", weight: 432.9 }, { name: "Water", weight: 268.4 }, { name: "Starter", weight: 108.2 }, { name: "Salt", weight: 13.9 }],
        inclusions: [{ name: "Cheese Mix", weight: 86.6 }]
    },
    "Cherry_Chocolate": {
        name: "Cherry Chocolate Sourdough",
        dough: [{ name: "Flour", weight: 422.5 }, { name: "Water", weight: 262 }, { name: "Starter", weight: 105.6 }, { name: "Salt", weight: 13.5 }],
        inclusions: [{ name: "Dried Cherry", weight: 50.7 }, { name: "Chocolate Chips", weight: 50.7 }]
    },
    "caramel_apple": {
        name: "Caramel Apple Sourdough",
        dough: [{ name: "Flour", weight: 434.6 }, { name: "Water", weight: 138.5 }, { name: "Apple Juice", weight: 138.5 }, { name: "Starter", weight: 108.2 }, { name: "Salt", weight: 13.9 }],
        inclusions: [{ name: "Dried Apples", weight: 34.6 }, { name: "Caramel Chips", weight: 43.3 }]
    },
    "salty_dulce": {
        name: "Salty Dulce Sourdough",
        dough: [{ name: "Flour", weight: 450 }, { name: "Water", weight: 279 }, { name: "Starter", weight: 112.5 }, { name: "Salt", weight: 14.4 }],
        inclusions: [{ name: "Flakey Salt Topping", weight: 0 }, { name: "Caramel Chips", weight: 54 }]
    },
    "blueberry": {
        name: "Blueberry Sourdough",
        dough: [{ name: "Flour", weight: 450 }, { name: "Water", weight: 279 }, { name: "Starter", weight: 112.5 }, { name: "Salt", weight: 14.4 }],
        inclusions: [{ name: "Dried Blueberries", weight: 54 }]
    },
    "blueberry_lemon": {
        name: "Blueberry Lemon Sourdough",
        dough: [{ name: "Flour", weight: 424.1 }, { name: "Water", weight: 262.9 }, { name: "Starter", weight: 106 }, { name: "Salt", weight: 13.6 }, { name: "White Sugar", weight: 33.9 }, { name: "Lemon", weight: 13.6 }],
        inclusions: [{ name: "Dried Blueberries", weight: 50.9 }]
    },
    "Cranberry_orange": {
        name: "Cranberry Orange Sourdough",
        dough: [{ name: "Flour", weight: 426.1 }, { name: "Water", weight: 264.2 }, { name: "Starter", weight: 102.3 }, { name: "Salt", weight: 13.6 }, { name: "White Sugar", weight: 34.1 }, { name: "Lemon", weight: 13.6 }],
        inclusions: [{ name: "Dried Cranberries", weight: 51.1 }]
    },
    "carrot_cake": {
        name: "Carrot Cake Sourdough",
        dough: [{ name: "Flour", weight: 374.2 }, { name: "Water", weight: 232 }, { name: "Starter", weight: 90 }, { name: "Salt", weight: 12 }, { name: "Brown Sugar", weight: 37.4 }, { name: "Molasses", weight: 7.5 }, { name: "Vanilla Extract", weight: 7.5 }],
        inclusions: [{ name: "Carrots", weight: 74.8 }, { name: "Raisins", weight: 74.8 }]
    },
    "Dill_Dough": {
        name: "Dill Dough Sourdough",
        dough: [{ name: "Flour", weight: 463.2 }, { name: "Water", weight: 185.3 }, { name: "Pickle Juice", weight: 92.6 }, { name: "Starter", weight: 111.2 }, { name: "Pickle Salt", weight: 6.5 }],
        inclusions: [{ name: "Pickles", weight: 46.3 }]
    },
    "garlic_parm": {
        name: "Garlic Parm Sourdough",
        dough: [{ name: "Flour", weight: 434.6 }, { name: "Water", weight: 269.4 }, { name: "Starter", weight: 104.3 }, { name: "Salt", weight: 13.9 }, { name: "Garlic Head", weight: 1 }],
        inclusions: [{ name: "Parm Cheese", weight: 86.9 }]
    },
    "Chocolate_espresso": {
        name: "Chocolate Espresso Sourdough",
        dough: [{ name: "Flour", weight: 428.8 }, { name: "Water", weight: 253 }, { name: "Starter", weight: 102.9 }, { name: "Salt", weight: 13.7 }, { name: "Brown Sugar", weight: 34.3 }, { name: "Espresso Powder", weight: 8.6 }],
        inclusions: [{ name: "Chocolate Chips", weight: 68.6 }]
    },
    "Rosemary_asiago": {
        name: "Rosemary Asiago Sourdough",
        dough: [{ name: "Flour", weight: 434.3 }, { name: "Water", weight: 269.2 }, { name: "Starter", weight: 104.2 }, { name: "Salt", weight: 13.9 }, { name: "Chopped Rosemary", weight: 5.2 }],
        inclusions: [{ name: "Asiago Cheese", weight: 78.2 }]
    },
    "banana_pie": {
        name: "Banana Pie Sourdough",
        dough: [{ name: "Flour", weight: 407.7 }, { name: "Water", weight: 252.8 }, { name: "Starter", weight: 97.8 }, { name: "Salt", weight: 13 }, { name: "Banana Pudding Mix", weight: 77.5 }],
        inclusions: [{ name: "Cookies Fold in", weight: 61.2 }, { name: "Cookies Dusters", weight: 0 }]
    },
    "Pep_pizza": {
        name: "Pepperoni Pizza Sourdough",
        dough: [{ name: "Flour", weight: 414.8 }, { name: "Water", weight: 253 }, { name: "Starter", weight: 100 }, { name: "Salt", weight: 13.3 }, { name: "Italian Seasoning", weight: 1.7 }, { name: "Dried Onion", weight: 8.3 }, { name: "Pepper Flakes", weight: 0.8 }, { name: "Garlic Head", weight: 1 }],
        inclusions: [{ name: "Pepperoni", weight: 58.1 }, { name: "Mozz Chz", weight: 66.4 }]
    },
    "ginger_crust": {
        name: "GingerCrust Sourdough",
        dough: [{ name: "Flour", weight: 415.9 }, { name: "Water", weight: 241.2 }, { name: "Starter", weight: 100 }, { name: "Salt", weight: 13.3 }, { name: "Brown Sugar", weight: 41.6 }, { name: "Molasses", weight: 83.2 }, { name: "Vanilla Extract", weight: 4.2 }, { name: "Ginger", weight: 5.8 }],
        inclusions: [{ name: "PS SUGAR ROLL IN", weight: 20 }]
    },
    "bb_cin": {
        name: "Blueberry Cinnamon Sourdough",
        dough: [{ name: "Flour", weight: 417.5 }, { name: "Water", weight: 250.5 }, { name: "Starter", weight: 100.2 }, { name: "Salt", weight: 13.4 }, { name: "Brown Sugar", weight: 12.5 }, { name: "Vanilla Extract", weight: 4.2 }],
        inclusions: [{ name: "Dried Blueberries", weight: 41.7 }, { name: "CIN BUTTER", weight: 1 }]
    },
    "sweet_cin": {
        name: "Sweet Cinnamon Sourdough",
        dough: [{ name: "Flour", weight: 437 }, { name: "Water", weight: 266.6 }, { name: "Starter", weight: 104.9 }, { name: "Salt", weight: 14 }, { name: "Brown Sugar", weight: 13.1 }, { name: "Vanilla Extract", weight: 4.4 }],
        inclusions: [{ name: "CIN BUTTER", weight: 1 }]
    },
    "cin_apple": {
        name: "Cinnamon Apple Sourdough",
        dough: [{ name: "Flour", weight: 426 }, { name: "Water", weight: 127.8 }, { name: "Apple Juice", weight: 127.8 }, { name: "Starter", weight: 102.2 }, { name: "Salt", weight: 13.6 }, { name: "Vanilla Extract", weight: 4.3 }],
        inclusions: [{ name: "Dried Apples", weight: 38.3 }, { name: "CIN BUTTER", weight: 1 }]
    },
    "cin_butter": {
        name: "Cinnamon Butter",
        dough: [],
        inclusions: [{ name: "Butter", weight: 39.3 }, { name: "Cinnamon", weight: 5.1 }, { name: "Brown Sugar", weight: 44.9 }, { name: "Flour", weight: 10.7 }]
    },
    "PS_butter": {
        name: "Pumpkin Spice Butter",
        dough: [],
        inclusions: [{ name: "Butter", weight: 39.3 }, { name: "Pumpkin Spice", weight: 5.1 }, { name: "Brown Sugar", weight: 44.9 }, { name: "Flour", weight: 10.7 }]
    },
    "pumpkin": {
        name: "Pumpkin Sourdough",
        dough: [{ name: "Flour", weight: 431.1 }, { name: "Water", weight: 189.6 }, { name: "Pumpkin Puree", weight: 172.6 }, { name: "Starter", weight: 86 }, { name: "Salt", weight: 8.8 }, { name: "Blue Agave", weight: 17 }],
        inclusions: []
    },
    "english_muffs": {
        name: "OG English Muffs",
        dough: [{ name: "Flour", weight: 60.7 }, { name: "Milk", weight: 33.5 }, { name: "Starter", weight: 16 }, { name: "Salt", weight: 1.6 }, { name: "Blue Agave", weight: 3.2 }],
        inclusions: [{ name: "Cornmeal Dusting", weight: 0 }]
    },
    "JC_E_muffs": {
        name: "Jala Ched Sourdough English Muffs",
        dough: [{ name: "Flour", weight: 49.8 }, { name: "Milk", weight: 28.8 }, { name: "Starter", weight: 13.1 }, { name: "Salt", weight: 1 }, { name: "Blue Agave", weight: 2.6 }],
        inclusions: [{ name: "Cheddar Cheese", weight: 9.8 }, { name: "Jalapenos", weight: 9.8 }, { name: "Cornmeal Dusting", weight: 0 }]
    },
    "BB_E_muffs": {
        name: "Blueberry Sourdough English Muffs",
        dough: [{ name: "Flour", weight: 54.4 }, { name: "Milk", weight: 30.1 }, { name: "Starter", weight: 14.3 }, { name: "Salt", weight: 1.1 }, { name: "Blue Agave", weight: 4.3 }],
        inclusions: [{ name: "Dried Blueberries", weight: 10.7 }, { name: "Cornmeal Dusting", weight: 0 }]
    },
    "focaccia": {
        name: "OG Sourdough Focaccia",
        dough: [{ name: "Flour", weight: 239.7 }, { name: "Water", weight: 148.6 }, { name: "Salt", weight: 7.7 }, { name: "Starter", weight: 57.5 }, { name: "Blue Agave", weight: 12 }, { name: "Avocado Oil", weight: 9.6 }],
        inclusions: []
    },
    "Gar_Parm_focaccia": {
        name: "Garlic Parm Focaccia",
        dough: [{ name: "Flour", weight: 222.6 }, { name: "Water", weight: 138 }, { name: "Salt", weight: 7.1 }, { name: "Starter", weight: 53.4 }, { name: "Blue Agave", weight: 11.1 }, { name: "Avocado Oil", weight: 8.9 }],
        inclusions: [{ name: "Garlic", weight: 1 }, { name: "Parm Cheese", weight: 33.4 }]
    },
    "bb_Cin_focaccia": {
        name: "Blueberry Cinnamon Focaccia",
        dough: [{ name: "Flour", weight: 216.3 }, { name: "Water", weight: 134.1 }, { name: "Salt", weight: 7 }, { name: "Starter", weight: 51.9 }, { name: "Blue Agave", weight: 13 }, { name: "Brown Sugar", weight: 8.7 }, { name: "Vanilla Extract", weight: 3 }, { name: "Avocado Oil", weight: 8.7 }],
        inclusions: [{ name: "Dried Blueberries", weight: 32.4 }, { name: "Cinnamon Sugar", weight: 0 }]
    },
    "apple_Cin_focaccia": {
        name: "Apple Cinnamon Focaccia",
        dough: [{ name: "Flour", weight: 216.7 }, { name: "Water", weight: 67.2 }, { name: "Apple Juice", weight: 67.2 }, { name: "Salt", weight: 6.9 }, { name: "Starter", weight: 52 }, { name: "Blue Agave", weight: 10.8 }, { name: "Brown Sugar", weight: 8.7 }, { name: "Vanilla Extract", weight: 2.2 }, { name: "Avocado Oil", weight: 8.7 }],
        inclusions: [{ name: "Apples", weight: 34.7 }, { name: "Cinnamon Sugar", weight: 0 }]
    },
    "CA_focaccia": {
        name: "Caramel Apple Focaccia",
        dough: [{ name: "Flour", weight: 226 }, { name: "Water", weight: 70.1 }, { name: "Apple Juice", weight: 70.1 }, { name: "Salt", weight: 7.2 }, { name: "Starter", weight: 54.2 }, { name: "Blue Agave", weight: 11.3 }, { name: "Avocado Oil", weight: 9 }],
        inclusions: [{ name: "Caramel Chips", weight: 13.6 }, { name: "Dried Apple", weight: 13.6 }]
    },
    "tortilla": {
        name: "Sourdough Tortillas",
        dough: [{ name: "Flour", weight: 18 }, { name: "Water", weight: 7.9 }, { name: "Starter", weight: 11.23 }, { name: "Salt", weight: 0.5 }, { name: "Avocado Oil", weight: 3.14 }],
        inclusions: []
    },
    "og_bagels": {
        name: "OG Sourdough Bagels",
        dough: [{ name: "Flour", weight: 73.1 }, { name: "Water", weight: 30.5 }, { name: "Starter", weight: 21.8 }, { name: "Blue Agave", weight: 3.6 }, { name: "Brown Sugar", weight: 3.6 }, { name: "Salt", weight: 2.3 }],
        inclusions: []
    },
    "rollies": {
        name: "Sourdough Rollies",
        dough: [{ name: "Flour", weight: 40.4 }, { name: "Milk", weight: 22.2 }, { name: "Starter", weight: 8.9 }, { name: "Butter Melted", weight: 5.3 }, { name: "Brown Sugar", weight: 2.2 }, { name: "Salt", weight: 0.9 }],
        inclusions: []
    },
    "Jal_Chile_bagels": {
        name: "Jalapeno Chile Bagels",
        dough: [{ name: "Flour", weight: 67.3 }, { name: "Water", weight: 28.1 }, { name: "Starter", weight: 20.1 }, { name: "Blue Agave", weight: 3.3 }, { name: "Brown Sugar", weight: 3.3 }, { name: "Salt", weight: 2.1 }],
        inclusions: [{ name: "Peppers", weight: 6.7 }, { name: "Cheese", weight: 4.2 }]
    },
    "BB_bagels": {
        name: "Blueberry Bagels",
        dough: [{ name: "Flour", weight: 68.7 }, { name: "Water", weight: 28.1 }, { name: "Starter", weight: 20.5 }, { name: "Blue Agave", weight: 4 }, { name: "Brown Sugar", weight: 4 }, { name: "Salt", weight: 2.1 }],
        inclusions: [{ name: "Dried Blueberry", weight: 7.4 }]
    },
    "blueberry_jack": {
        name: "Blueberry Jack Sourdough",
        dough: [{ name: "Flour", weight: 398.8 }, { name: "Water", weight: 247.2 }, { name: "Starter", weight: 100 }, { name: "Salt", weight: 12.8 }],
        inclusions: [{ name: "Dried Blueberries", weight: 59.8 }, { name: "Pepper Jack Cheese", weight: 91.7 }]
    }
};

// Reusable Mix Card Component
function MixCard({ mixName, defaultRecipe }) {
    const [recipeKey, setRecipeKey] = useState(defaultRecipe);
    const [multiplier, setMultiplier] = useState(1);
    const [targetWeight, setTargetWeight] = useState(0);
    const [mode, setMode] = useState("Standard");

    const recipe = recipes[recipeKey];

    // Calculate Base Weight dynamically
    const baseWeight = 
        (recipe.dough ? recipe.dough.reduce((sum, item) => sum + item.weight, 0) : 0) + 
        (recipe.inclusions ? recipe.inclusions.reduce((sum, item) => sum + item.weight, 0) : 0);

    // Initialize the card when the recipe changes
    useEffect(() => {
        setMultiplier(1);
        setTargetWeight(Math.round(baseWeight));
        setMode("Standard");
    }, [recipeKey, baseWeight]);

    const handleMultiplierChange = (e) => {
        const val = parseFloat(e.target.value);
        setMultiplier(val || "");
        if (val) {
            setTargetWeight(Math.round(baseWeight * val));
            setMode("Multiplier");
        }
    };

    const handleTargetChange = (e) => {
        const val = parseFloat(e.target.value);
        setTargetWeight(val || "");
        if (val) {
            setMultiplier(+(val / baseWeight).toFixed(2));
            setMode("Target Weight");
        }
    };

    // Sorting Logic for the Base Dough
    const priorityOrder = ["Starter", "Water", "Salt", "Flour"];
    const sortDough = (items) => {
        if (!items) return [];
        return [...items].sort((a, b) => {
            let rankA = priorityOrder.indexOf(a.name);
            let rankB = priorityOrder.indexOf(b.name);
            if (rankA === -1) rankA = 100;
            if (rankB === -1) rankB = 100;
            return rankA - rankB;
        });
    };

    const currentMultiplier = parseFloat(multiplier) || 0;
    const totalYield = Math.round(baseWeight * currentMultiplier);

    return (
        <div className="card shadow-sm border-0 mb-4">
            <div className="card-body text-start">
                <h2 className="h5 fw-bold text-muted mb-3 text-uppercase">{mixName}</h2>

                {/* Recipe Selection - ALPHABETIZED */}
                <div className="mb-3">
                    <label className="form-label fw-bold small text-secondary">Select Recipe</label>
                    <select 
                        className="form-select bg-light fw-bold" 
                        value={recipeKey} 
                        onChange={(e) => setRecipeKey(e.target.value)}
                    >
                        {Object.entries(recipes)
                            .sort(([, a], [, b]) => a.name.localeCompare(b.name)) /* <--- Added alphabetical sort */
                            .map(([key, data]) => (
                                <option key={key} value={key}>{data.name}</option>
                            ))
                        }
                    </select>
                </div>

                {/* Multiplier and Target Weight Row */}
                <div className="row g-3 mb-4">
                    <div className="col-6">
                        <label className="form-label fw-bold small text-secondary">Multiplier</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            step="0.1" min="0.1" 
                            value={multiplier} 
                            onChange={handleMultiplierChange} 
                        />
                    </div>
                    <div className="col-6">
                        <label className="form-label fw-bold small text-secondary">Target (g)</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            step="10" min="1" 
                            value={targetWeight} 
                            onChange={handleTargetChange} 
                        />
                    </div>
                </div>

                {/* Ingredients Output Area */}
                <div className="bg-light p-3 rounded-4 border">
                    <div className="border-bottom pb-2 mb-2 text-muted small fw-bold text-uppercase">
                        Mode: {mode}
                    </div>

                    <ul className="list-unstyled mb-0">
                        {recipe.dough && recipe.dough.length > 0 && (
                            <>
                                <li className="fw-bold text-muted small text-uppercase mt-2 mb-1 border-bottom pb-1">Base Dough</li>
                                {sortDough(recipe.dough).map((item, idx) => (
                                    <li key={idx} className="d-flex justify-content-between py-1 border-bottom border-white">
                                        <span>{item.name}</span>
                                        <span className="fw-bold text-dark">{Math.round(item.weight * currentMultiplier)}g</span>
                                    </li>
                                ))}
                            </>
                        )}
                        
                        {recipe.inclusions && recipe.inclusions.length > 0 && (
                            <>
                                <li className="fw-bold text-muted small text-uppercase mt-3 mb-1 border-bottom pb-1">Inclusions / Extras</li>
                                {recipe.inclusions.map((item, idx) => (
                                    <li key={idx} className="d-flex justify-content-between py-1 border-bottom border-white">
                                        <span>{item.name}</span>
                                        <span className="fw-bold text-dark">{Math.round(item.weight * currentMultiplier)}g</span>
                                    </li>
                                ))}
                            </>
                        )}
                    </ul>

                    {/* Total Yield */}
                    <div className="d-flex justify-content-between mt-3 pt-2 border-top border-dark fw-bold h6 mb-0">
                        <span>Yield:</span>
                        <span className="text-primary">{totalYield}g</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

// Main Calculator Layout
export default function Calculator() {
    return (
        <div className="container pb-5 text-center">
            <div className="column">
                
                <Header />

                <div className="bg-white p-3 rounded-4 shadow-sm mb-4 border border-dark text-dark mt-3">
                    <h1 className="h3 fw-bold mb-0">🍞 DHG Baker's Calculator 🍞</h1>
                    <p className="mb-0 small text-muted">Scale and target dough weights perfectly</p>
                </div>

                {/* The 4 Mix Cards in a 2x2 Grid */}
                <div className="row g-4">
                    <div className="col-md-6 col-12">
                        <MixCard mixName="Mix 1" defaultRecipe="og_loaf" />
                    </div>
                    <div className="col-md-6 col-12">
                        <MixCard mixName="Mix 2" defaultRecipe="roasted_chile" />
                    </div>
                    <div className="col-md-6 col-12">
                        <MixCard mixName="Mix 3" defaultRecipe="english_muffs" />
                    </div>
                    <div className="col-md-6 col-12">
                        <MixCard mixName="Mix 4" defaultRecipe="focaccia" />
                    </div>
                </div>

                <Footer />
            </div>
        </div>
    );
}
