import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const recipes = {
    "og_loaf": {
        name: "OG Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 475.8 }, { name: "Water", weight: 295 }, { name: "Starter", weight: 119 }, { name: "Salt", weight: 15.2 }],
        inclusions: []
    },
    "roasted_chile": {
        name: "Roasted Chile Cheese Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 405.5 }, { name: "Water", weight: 251.4 }, { name: "Starter", weight: 101.4 }, { name: "Salt", weight: 13 }],
        inclusions: [{ name: "Roasted Green Chile", weight: 60.8 }, { name: "Cheese Mix", weight: 73 }]
    },
    "cin_raisin": {
        name: "Cinnamon Raisin Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 417.5 }, { name: "Water", weight: 250.5 }, { name: "Starter", weight: 100.2 }, { name: "Salt", weight: 13.4 }, { name: "Brown Sugar", weight: 12.5 }, { name: "Vanilla Extract", weight: 4.2 }],
        inclusions: [{ name: "Raisins", weight: 41.7 }, { name: "CIN BUTTER", weight: 1 }]
    },
    "jala_ched": {
        name: "Jalapeno Cheddar Cheese Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 405.5 }, { name: "Water", weight: 251.4 }, { name: "Starter", weight: 101.4 }, { name: "Salt", weight: 13 }],
        inclusions: [{ name: "Jalapeno", weight: 60.8 }, { name: "Cheddar Cheese", weight: 73 }]
    },
    "grilled_chz": {
        name: "Grilled Cheese Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 432.9 }, { name: "Water", weight: 268.4 }, { name: "Starter", weight: 108.2 }, { name: "Salt", weight: 13.9 }],
        inclusions: [{ name: "Cheese Mix", weight: 86.6 }]
    },
    "Cherry_Chocolate": {
        name: "Cherry Chocolate Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 422.5 }, { name: "Water", weight: 262 }, { name: "Starter", weight: 105.6 }, { name: "Salt", weight: 13.5 }],
        inclusions: [{ name: "Dried Cherry", weight: 50.7 }, { name: "Chocolate Chips", weight: 50.7 }]
    },
    "caramel_apple": {
        name: "Caramel Apple Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 434.6 }, { name: "Water", weight: 138.5 }, { name: "Apple Juice", weight: 138.5 }, { name: "Starter", weight: 108.2 }, { name: "Salt", weight: 13.9 }],
        inclusions: [{ name: "Dried Apples", weight: 34.6 }, { name: "Caramel Chips", weight: 43.3 }]
    },
    "salty_dulce": {
        name: "Salty Dulce Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 450 }, { name: "Water", weight: 279 }, { name: "Starter", weight: 112.5 }, { name: "Salt", weight: 14.4 }],
        inclusions: [{ name: "Flakey Salt Topping", weight: 0 }, { name: "Caramel Chips", weight: 54 }]
    },
    "crisp_french_onione": {
        name: "Crispy French Onion Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 420.1 }, { name: "Water", weight: 264.7 }, { name: "Starter", weight: 105 }, { name: "Soup Mix", weight: 23.5 }],
        inclusions: [{ name: "Fried Onions", weight: 33.6 }, { name: "Gruyere", weight: 63 }]
    },
    "Croissourdough": {
        name: "Croissourdough", type: "batch",
        dough: [{ name: "Flour", weight: 427.6 }, { name: "Water", weight: 265.1 }, { name: "Starter", weight: 106.9 }, { name: "Salt", weight: 13.7 }],
        inclusions: [{ name: "Frozen Butter", weight: 96.6 }]
    },
    "blueberry": {
        name: "Blueberry Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 450 }, { name: "Water", weight: 279 }, { name: "Starter", weight: 112.5 }, { name: "Salt", weight: 14.4 }],
        inclusions: [{ name: "Dried Blueberries", weight: 54 }]
    },
    "blueberry_lemon": {
        name: "Blueberry Lemon Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 424.1 }, { name: "Water", weight: 262.9 }, { name: "Starter", weight: 106 }, { name: "Salt", weight: 13.6 }, { name: "White Sugar", weight: 33.9 }, { name: "Lemon", weight: 13.6 }],
        inclusions: [{ name: "Dried Blueberries", weight: 50.9 }]
    },
    "Cranberry_orange": {
        name: "Cranberry Orange Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 426.1 }, { name: "Water", weight: 264.2 }, { name: "Starter", weight: 102.3 }, { name: "Salt", weight: 13.6 }, { name: "White Sugar", weight: 34.1 }, { name: "Lemon", weight: 13.6 }],
        inclusions: [{ name: "Dried Cranberries", weight: 51.1 }]
    },
    "carrot_cake": {
        name: "Carrot Cake Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 374.2 }, { name: "Water", weight: 232 }, { name: "Starter", weight: 90 }, { name: "Salt", weight: 12 }, { name: "Brown Sugar", weight: 37.4 }, { name: "Molasses", weight: 7.5 }, { name: "Vanilla Extract", weight: 7.5 }],
        inclusions: [{ name: "Carrots", weight: 74.8 }, { name: "Raisins", weight: 74.8 }]
    },
    "Dill_Dough": {
        name: "Dill Dough Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 463.2 }, { name: "Water", weight: 185.3 }, { name: "Pickle Juice", weight: 92.6 }, { name: "Starter", weight: 111.2 }, { name: "Pickle Salt", weight: 6.5 }],
        inclusions: [{ name: "Pickles", weight: 46.3 }]
    },
    "garlic_parm": {
        name: "Garlic Parm Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 434.6 }, { name: "Water", weight: 269.4 }, { name: "Starter", weight: 104.3 }, { name: "Salt", weight: 13.9 }, { name: "Garlic Head", weight: 1 }],
        inclusions: [{ name: "Parm Cheese", weight: 86.9 }]
    },
    "Chocolate_espresso": {
        name: "Chocolate Espresso Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 428.8 }, { name: "Water", weight: 253 }, { name: "Starter", weight: 102.9 }, { name: "Salt", weight: 13.7 }, { name: "Brown Sugar", weight: 34.3 }, { name: "Espresso Powder", weight: 8.6 }],
        inclusions: [{ name: "Chocolate Chips", weight: 68.6 }]
    },
    "Rosemary_asiago": {
        name: "Rosemary Asiago Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 434.3 }, { name: "Water", weight: 269.2 }, { name: "Starter", weight: 104.2 }, { name: "Salt", weight: 13.9 }, { name: "Chopped Rosemary", weight: 5.2 }],
        inclusions: [{ name: "Asiago Cheese", weight: 78.2 }]
    },
    "banana_pie": {
        name: "Banana Pie Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 409.5 }, { name: "Water", weight: 253.9 }, { name: "Starter", weight: 98.3 }, { name: "Salt", weight: 13.1 }, { name: "Banana Pudding Mix", weight: 73.7 }],
        inclusions: [{ name: "Cookies Fold in", weight: 61.2 }, { name: "Cookies Dusters", weight: 0 }]
    },
    "ginger_crust": {
        name: "GingerCrust Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 415.9 }, { name: "Water", weight: 241.2 }, { name: "Starter", weight: 100 }, { name: "Salt", weight: 13.3 }, { name: "Brown Sugar", weight: 41.6 }, { name: "Molasses", weight: 83.2 }, { name: "Vanilla Extract", weight: 4.2 }, { name: "Ginger", weight: 5.8 }],
        inclusions: [{ name: "PS SUGAR ROLL IN", weight: 20 }]
    },
    "prune_prosper": {
        name: "Prune & Prosper Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 358.1 }, { name: "WW Flour", weight: 89.5 }, { name: "Apple Juice", weight: 138.7 }, { name: "Water", weight: 147.7 }, { name: "Starter", weight: 111.9 }, { name: "Salt", weight: 14.3 }],
        inclusions: [{ name: "Dried Prunes", weight: 44.8 }]
    },
    "bb_cin": {
        name: "Blueberry Cinnamon Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 417.5 }, { name: "Water", weight: 250.5 }, { name: "Starter", weight: 100.2 }, { name: "Salt", weight: 13.4 }, { name: "Brown Sugar", weight: 12.5 }, { name: "Vanilla Extract", weight: 4.2 }],
        inclusions: [{ name: "Dried Blueberries", weight: 41.7 }, { name: "CIN BUTTER", weight: 1 }]
    },
    "sweet_cin": {
        name: "Sweet Cinnamon Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 437 }, { name: "Water", weight: 266.6 }, { name: "Starter", weight: 104.9 }, { name: "Salt", weight: 14 }, { name: "Brown Sugar", weight: 13.1 }, { name: "Vanilla Extract", weight: 4.4 }],
        inclusions: [{ name: "CIN BUTTER", weight: 1 }]
    },
    "cin_apple": {
        name: "Cinnamon Apple Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 426 }, { name: "Water", weight: 127.8 }, { name: "Apple Juice", weight: 127.8 }, { name: "Starter", weight: 102.2 }, { name: "Salt", weight: 13.6 }, { name: "Vanilla Extract", weight: 4.3 }],
        inclusions: [{ name: "Dried Apples", weight: 38.3 }, { name: "CIN BUTTER", weight: 1 }]
    },
    "cin_butter": {
        name: "Cinnamon Butter", type: "batch",
        dough: [],
        inclusions: [{ name: "Butter", weight: 39.3 }, { name: "Cinnamon", weight: 5.1 }, { name: "Brown Sugar", weight: 44.9 }, { name: "Flour", weight: 10.7 }]
    },
    "PS_butter": {
        name: "Pumpkin Spice Butter", type: "batch",
        dough: [],
        inclusions: [{ name: "Butter", weight: 39.3 }, { name: "Pumpkin Spice", weight: 5.1 }, { name: "Brown Sugar", weight: 44.9 }, { name: "Flour", weight: 10.7 }]
    },
    "pumpkin": {
        name: "Pumpkin Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 431.1 }, { name: "Water", weight: 189.6 }, { name: "Pumpkin Puree", weight: 172.6 }, { name: "Starter", weight: 86 }, { name: "Salt", weight: 8.8 }, { name: "Blue Agave", weight: 17 }],
        inclusions: []
    },
    "english_muffs": {
        name: "OG English Muffs", type: "unit",
        dough: [{ name: "Flour", weight: 60.7 }, { name: "Milk", weight: 33.5 }, { name: "Starter", weight: 16 }, { name: "Salt", weight: 1.6 }, { name: "Blue Agave", weight: 3.2 }],
        inclusions: [{ name: "Cornmeal Dusting", weight: 0 }]
    },
    "JC_E_muffs": {
        name: "Jala Ched Sourdough English Muffs", type: "unit",
        dough: [{ name: "Flour", weight: 49.8 }, { name: "Milk", weight: 28.8 }, { name: "Starter", weight: 13.1 }, { name: "Salt", weight: 1 }, { name: "Blue Agave", weight: 2.6 }],
        inclusions: [{ name: "Cheddar Cheese", weight: 9.8 }, { name: "Jalapenos", weight: 9.8 }, { name: "Cornmeal Dusting", weight: 0 }]
    },
    "BB_E_muffs": {
        name: "Blueberry Sourdough English Muffs", type: "unit",
        dough: [{ name: "Flour", weight: 54.4 }, { name: "Milk", weight: 30.1 }, { name: "Starter", weight: 14.3 }, { name: "Salt", weight: 1.1 }, { name: "Blue Agave", weight: 4.3 }],
        inclusions: [{ name: "Dried Blueberries", weight: 10.7 }, { name: "Cornmeal Dusting", weight: 0 }]
    },
    "focaccia": {
        name: "OG Sourdough Focaccia", type: "batch",
        dough: [{ name: "Flour", weight: 239.7 }, { name: "Water", weight: 148.6 }, { name: "Salt", weight: 7.7 }, { name: "Starter", weight: 57.5 }, { name: "Blue Agave", weight: 12 }, { name: "Avocado Oil", weight: 9.6 }],
        inclusions: []
    },
    "Gar_Parm_focaccia": {
        name: "Garlic Parm Focaccia", type: "batch",
        dough: [{ name: "Flour", weight: 222.6 }, { name: "Water", weight: 138 }, { name: "Salt", weight: 7.1 }, { name: "Starter", weight: 53.4 }, { name: "Blue Agave", weight: 11.1 }, { name: "Avocado Oil", weight: 8.9 }],
        inclusions: [{ name: "Garlic", weight: 1 }, { name: "Parm Cheese", weight: 33.4 }]
    },
    "bb_Cin_focaccia": {
        name: "Blueberry Cinnamon Focaccia", type: "batch",
        dough: [{ name: "Flour", weight: 216.3 }, { name: "Water", weight: 134.1 }, { name: "Salt", weight: 7 }, { name: "Starter", weight: 51.9 }, { name: "Blue Agave", weight: 13 }, { name: "Brown Sugar", weight: 8.7 }, { name: "Vanilla Extract", weight: 3 }, { name: "Avocado Oil", weight: 8.7 }],
        inclusions: [{ name: "Dried Blueberries", weight: 32.4 }, { name: "Cinnamon Sugar", weight: 0 }]
    },
    "apple_Cin_focaccia": {
        name: "Apple Cinnamon Focaccia", type: "batch",
        dough: [{ name: "Flour", weight: 216.7 }, { name: "Water", weight: 67.2 }, { name: "Apple Juice", weight: 67.2 }, { name: "Salt", weight: 6.9 }, { name: "Starter", weight: 52 }, { name: "Blue Agave", weight: 10.8 }, { name: "Brown Sugar", weight: 8.7 }, { name: "Vanilla Extract", weight: 2.2 }, { name: "Avocado Oil", weight: 8.7 }],
        inclusions: [{ name: "Apples", weight: 34.7 }, { name: "Cinnamon Sugar", weight: 0 }]
    },
    "CA_focaccia": {
        name: "Caramel Apple Focaccia", type: "batch",
        dough: [{ name: "Flour", weight: 226 }, { name: "Water", weight: 70.1 }, { name: "Apple Juice", weight: 70.1 }, { name: "Salt", weight: 7.2 }, { name: "Starter", weight: 54.2 }, { name: "Blue Agave", weight: 11.3 }, { name: "Avocado Oil", weight: 9 }],
        inclusions: [{ name: "Caramel Chips", weight: 13.6 }, { name: "Dried Apples", weight: 13.6 }]
    },
    "tortilla": {
        name: "Sourdough Tortillas", type: "unit",
        dough: [{ name: "Flour", weight: 18 }, { name: "Water", weight: 7.9 }, { name: "Starter", weight: 11.23 }, { name: "Salt", weight: 0.5 }, { name: "Avocado Oil", weight: 3.14 }],
        inclusions: []
    },
    "og_bagels": {
        name: "OG Sourdough Bagels", type: "unit",
        dough: [{ name: "Flour", weight: 73.1 }, { name: "Water", weight: 30.5 }, { name: "Starter", weight: 21.8 }, { name: "Blue Agave", weight: 3.6 }, { name: "Brown Sugar", weight: 3.6 }, { name: "Salt", weight: 2.3 }],
        inclusions: []
    },
    "rollies": {
        name: "Sourdough Rollies", type: "unit",
        dough: [{ name: "Flour", weight: 40.4 }, { name: "Milk", weight: 22.2 }, { name: "Starter", weight: 8.9 }, { name: "Butter Melted", weight: 5.3 }, { name: "Brown Sugar", weight: 2.2 }, { name: "Salt", weight: 0.9 }],
        inclusions: []
    },
    "Jal_Chd_bagels": {
        name: "Jalapeno Chd Bagels", type: "unit",
        dough: [{ name: "Flour", weight: 67.5 }, { name: "Water", weight: 18.8 }, { name: "Starter", weight: 20.2 }, { name: "Blue Agave", weight: 3.3 }, { name: "Brown Sugar", weight: 3.3 }, { name: "Salt", weight: 2.1 }],
        inclusions: [{ name: "Jalapeno", weight: 6.7 }, { name: "Cheese", weight: 3.6 }]
    },
    "RCC_bagels": {
        name: "Roasted Chile Cheese Bagels", type: "unit",
        dough: [{ name: "Flour", weight: 67.5 }, { name: "Water", weight: 28.2 }, { name: "Chile Juice", weight: 9.4 }, { name: "Starter", weight: 20.2 }, { name: "Blue Agave", weight: 3.3 }, { name: "Brown Sugar", weight: 3.3 }, { name: "Salt", weight: 2.1 }],
        inclusions: [{ name: "Jalapeno", weight: 6.7 }, { name: "Cheese", weight: 3.6 }]
    },
    "BB_bagels": {
        name: "Blueberry Bagels", type: "unit",
        dough: [{ name: "Flour", weight: 68.7 }, { name: "Water", weight: 28.1 }, { name: "Starter", weight: 20.5 }, { name: "Blue Agave", weight: 4 }, { name: "Brown Sugar", weight: 4 }, { name: "Salt", weight: 2.1 }],
        inclusions: [{ name: "Dried Blueberry", weight: 7.4 }]
    },
    "blueberry_jack": {
        name: "Blueberry Jack Sourdough", type: "batch",
        dough: [{ name: "Flour", weight: 398.8 }, { name: "Water", weight: 247.2 }, { name: "Starter", weight: 100 }, { name: "Salt", weight: 12.8 }],
        inclusions: [{ name: "Dried Blueberries", weight: 59.8 }, { name: "Pepper Jack Cheese", weight: 91.7 }]
    }
};

const ingredientMacros = {
    "Flour": { calories: 3.64, fat: 0.01, sodium: 0.02, carbs: 0.76, sugar: 0.01, protein: 0.10 },
    "Starter": { calories: 1.82, fat: 0.005, sodium: 0.01, carbs: 0.38, sugar: 0.005, protein: 0.05 },
    "Water": { calories: 0, fat: 0, sodium: 0, carbs: 0, sugar: 0, protein: 0 },
    "Salt": { calories: 0, fat: 0, sodium: 393.4, carbs: 0, sugar: 0, protein: 0 },
    "Flakey Salt Topping": { calories: 0, fat: 0, sodium: 393.4, carbs: 0, sugar: 0, protein: 0 },
    "Pickle Salt": { calories: 0, fat: 0, sodium: 393.4, carbs: 0, sugar: 0, protein: 0 },
    "Jalapeno": { calories: 0.29, fat: 0, sodium: 0.03, carbs: 0.07, sugar: 0.04, protein: 0.01 },
    "Jalapenos": { calories: 0.29, fat: 0, sodium: 0.03, carbs: 0.07, sugar: 0.04, protein: 0.01 },
    "Cheddar Cheese": { calories: 4.0, fat: 0.33, sodium: 6.0, carbs: 0.01, sugar: 0.01, protein: 0.25 },
    "Roasted Green Chile": { calories: 0.40, fat: 0, sodium: 0.02, carbs: 0.09, sugar: 0.05, protein: 0.01 },
    "Mexican Cheese": { calories: 4.0, fat: 0.33, sodium: 6.0, carbs: 0.01, sugar: 0.01, protein: 0.25 },
    "Gouda Cheese": { calories: 4.0, fat: 0.33, sodium: 6.0, carbs: 0.01, sugar: 0.01, protein: 0.25 },
    "Milk": { calories: 0.60, fat: 0.03, sodium: 0.4, carbs: 0.05, sugar: 0.05, protein: 0.03 },
    "Butter Melted": { calories: 7.17, fat: 0.81, sodium: 6.43, carbs: 0.01, sugar: 0.01, protein: 0.01 },
    "Blue Agave": { calories: 3.10, fat: 0, sodium: 0, carbs: 0.76, sugar: 0.68, protein: 0 },
    "Brown Sugar": { calories: 3.8, fat: 0, sodium: 0.28, carbs: 0.98, sugar: 0.97, protein: 0 },
    "White Sugar": { calories: 3.87, fat: 0, sodium: 0, carbs: 1.0, sugar: 1.0, protein: 0 },
    "Cornmeal Dusting": { calories: 3.6, fat: 0.01, sodium: 0.05, carbs: 0.77, sugar: 0.01, protein: 0.08 },
    "Apples": { calories: 0.52, fat: 0, sodium: 0.01, carbs: 0.14, sugar: 0.10, protein: 0 },
    "Lemon": { calories: 0.29, fat: 0, sodium: 0.02, carbs: 0.09, sugar: 0.03, protein: 0.01 },
    "Carrots": { calories: 0.41, fat: 0, sodium: 0.69, carbs: 0.10, sugar: 0.05, protein: 0.01 },
    "Raisins": { calories: 2.99, fat: 0.01, sodium: 0.11, carbs: 0.79, sugar: 0.59, protein: 0.03 },
    "Garlic Head": { calories: 1.49, fat: 0.01, sodium: 0.17, carbs: 0.33, sugar: 0.01, protein: 0.06 },
    "Pickle Juice": { calories: 0.02, fat: 0, sodium: 8.0, carbs: 0, sugar: 0, protein: 0 },
    "Pickles": { calories: 0.11, fat: 0, sodium: 12.0, carbs: 0.02, sugar: 0.01, protein: 0 },
    "Parm Cheese": { calories: 4.31, fat: 0.29, sodium: 15.29, carbs: 0.04, sugar: 0.01, protein: 0.38 },
    "Chocolate Chips": { calories: 4.7, fat: 0.27, sodium: 0.15, carbs: 0.63, sugar: 0.54, protein: 0.04 },
    "Espresso Powder": { calories: 2.0, fat: 0, sodium: 0, carbs: 0.4, sugar: 0, protein: 0.1 },
    "Chopped Rosemary": { calories: 1.31, fat: 0.06, sodium: 0.26, carbs: 0.21, sugar: 0, protein: 0.03 },
    "Banana Pudding Mix": { calories: 3.5, fat: 0, sodium: 4.0, carbs: 0.85, sugar: 0.75, protein: 0 },
    "Cookies Fold in": { calories: 4.5, fat: 0.15, sodium: 3.0, carbs: 0.75, sugar: 0.35, protein: 0.05 },
    "Italian Seasoning": { calories: 2.8, fat: 0.06, sodium: 0.1, carbs: 0.5, sugar: 0.01, protein: 0.1 },
    "Dried Onion": { calories: 3.49, fat: 0.01, sodium: 0.73, carbs: 0.79, sugar: 0.38, protein: 0.09 },
    "Pepper Flakes": { calories: 3.18, fat: 0.17, sodium: 0.3, carbs: 0.56, sugar: 0.1, protein: 0.12 },
    "Ginger": { calories: 0.8, fat: 0.01, sodium: 0.13, carbs: 0.18, sugar: 0.02, protein: 0.02 },
    "Apple Juice": { calories: 0.46, fat: 0, sodium: 0.04, carbs: 0.11, sugar: 0.10, protein: 0 },
    "Dried Apples": { calories: 2.43, fat: 0, sodium: 0.87, carbs: 0.66, sugar: 0.57, protein: 0.01 },
    "Caramel Chips": { calories: 5.3, fat: 0.3, sodium: 1.0, carbs: 0.65, sugar: 0.60, protein: 0.05 },
    "Dried Blueberries": { calories: 3.17, fat: 0.01, sodium: 0.03, carbs: 0.81, sugar: 0.65, protein: 0.02 },
    "Dried Cranberries": { calories: 3.08, fat: 0.01, sodium: 0.03, carbs: 0.82, sugar: 0.65, protein: 0 },
    "Cheese Mix": { calories: 4.0, fat: 0.33, sodium: 6.0, carbs: 0.01, sugar: 0.01, protein: 0.25 },
    "Pepper Jack Cheese": { calories: 4.0, fat: 0.33, sodium: 6.0, carbs: 0.01, sugar: 0.01, protein: 0.25 },
    "Vanilla Extract": { calories: 2.88, fat: 0, sodium: 0.09, carbs: 0.13, sugar: 0.13, protein: 0 },
    "Avocado Oil": { calories: 8.84, fat: 1.0, sodium: 0, carbs: 0, sugar: 0, protein: 0 },
    "Pumpkin Puree": { calories: 0.34, fat: 0.01, sodium: 0.05, carbs: 0.08, sugar: 0.03, protein: 0.01 },
    "Dried Blueberry": { calories: 3.17, fat: 0.01, sodium: 0.03, carbs: 0.81, sugar: 0.65, protein: 0.02 },
    "Garlic": { calories: 1.49, fat: 0.01, sodium: 0.17, carbs: 0.33, sugar: 0.01, protein: 0.06 },
    "Dried Cherry": { calories: 3.5, fat: 0, sodium: 0, carbs: 0.82, sugar: 0.68, protein: 0.03 },
    
    // NEW INGREDIENTS ADDED - Updated with per-gram macro values
    "CIN BUTTER": { calories: 5.5, fat: 0.5, sodium: 3.2, carbs: 0.3, sugar: 0.25, protein: 0.01 }, 
    "Fried Onions": { calories: 6.0, fat: 0.45, sodium: 7.5, carbs: 0.45, sugar: 0.05, protein: 0.05 },
    "Gruyere": { calories: 4.13, fat: 0.32, sodium: 3.32, carbs: 0.01, sugar: 0.01, protein: 0.30 },
    "Soup Mix": { calories: 2.9, fat: 0, sodium: 105.0, carbs: 0.6, sugar: 0.1, protein: 0.08 }, 
    "Frozen Butter": { calories: 7.17, fat: 0.81, sodium: 6.43, carbs: 0.01, sugar: 0.01, protein: 0.01 },
    "Cookies Dusters": { calories: 4.5, fat: 0.15, sodium: 3.0, carbs: 0.75, sugar: 0.35, protein: 0.05 },
    "Pepperoni": { calories: 4.94, fat: 0.46, sodium: 15.8, carbs: 0.01, sugar: 0, protein: 0.19 },
    "Mozz Chz": { calories: 3.0, fat: 0.22, sodium: 6.3, carbs: 0.02, sugar: 0.01, protein: 0.24 },
    "PS SUGAR ROLL IN": { calories: 3.8, fat: 0, sodium: 0, carbs: 0.99, sugar: 0.97, protein: 0 },
    "WW Flour": { calories: 3.4, fat: 0.02, sodium: 0.02, carbs: 0.73, sugar: 0, protein: 0.14 },
    "Dried Prunes": { calories: 2.4, fat: 0, sodium: 0.02, carbs: 0.64, sugar: 0.38, protein: 0.02 },
    "Butter": { calories: 7.17, fat: 0.81, sodium: 6.43, carbs: 0.01, sugar: 0.01, protein: 0.01 },
    "Cinnamon": { calories: 2.47, fat: 0.01, sodium: 0.1, carbs: 0.81, sugar: 0.02, protein: 0.04 },
    "Pumpkin Spice": { calories: 2.5, fat: 0.01, sodium: 0.1, carbs: 0.8, sugar: 0.02, protein: 0.04 },
    "Cinnamon Sugar": { calories: 3.8, fat: 0, sodium: 0, carbs: 0.99, sugar: 0.97, protein: 0 },
    "Cheese": { calories: 4.0, fat: 0.33, sodium: 6.0, carbs: 0.01, sugar: 0.01, protein: 0.25 },
    "Chile Juice": { calories: 0.2, fat: 0, sodium: 0.1, carbs: 0.04, sugar: 0.02, protein: 0 },
    
    // MISSING INGREDIENTS ADDED
    "Molasses": { calories: 2.9, fat: 0, sodium: 0.37, carbs: 0.75, sugar: 0.75, protein: 0 },
    "Asiago Cheese": { calories: 3.92, fat: 0.30, sodium: 12.0, carbs: 0.03, sugar: 0, protein: 0.25 }
};

export default function Nutrition() {
    const [recipeKey, setRecipeKey] = useState("");
    const [servings, setServings] = useState(13);

    const handleRecipeChange = (e) => {
        const key = e.target.value;
        setRecipeKey(key);
        const recipe = recipes[key];

        if (recipe) {
            if (recipe.type === "batch") {
                if (key.includes("focaccia")) setServings(6);
                else setServings(13); 
            } else {
                setServings(1); 
            }
        }
    };

    let totalCals = "-";
    let totalFat = "-";
    let totalSod = "-";
    let totalCarbs = "-";
    let totalSugar = "-";
    let totalPro = "-";
    let servingName = "-";

    const recipe = recipes[recipeKey];
    
    if (recipe) {
        let cals = 0, fat = 0, sod = 0, carbs = 0, sugar = 0, pro = 0;
        
        const calc = (items) => {
            items.forEach(item => {
                const m = ingredientMacros[item.name] || { calories: 0, fat: 0, sodium: 0, carbs: 0, sugar: 0, protein: 0 };
                cals += item.weight * m.calories;
                fat += item.weight * m.fat;
                sod += item.weight * (m.sodium || 0);
                carbs += item.weight * m.carbs;
                sugar += item.weight * m.sugar;
                pro += item.weight * m.protein;
            });
        };

        calc(recipe.dough);
        calc(recipe.inclusions);

        const divisor = recipe.type === "batch" ? (parseFloat(servings) || 1) : 1;

        if (recipeKey.includes("bagel") || recipeKey.includes("bagels")) servingName = "1 Bagel";
        else if (recipeKey.includes("muff") || recipeKey.includes("muffs")) servingName = "1 Muffin";
        else if (recipeKey.includes("tortilla")) servingName = "1 Tortilla";
        else if (recipeKey.includes("focaccia") || recipeKey.includes("rollies")) servingName = "1 Piece";
        else servingName = "1 Slice";

        totalCals = Math.round(cals / divisor);
        totalFat = Math.round(fat / divisor) + "g";
        totalSod = Math.round(sod / divisor) + "mg";
        totalCarbs = Math.round(carbs / divisor) + "g";
        totalSugar = Math.round(sugar / divisor) + "g";
        totalPro = Math.round(pro / divisor) + "g";
    }

    return (
        <div className="pb-5">
            <div className="container pb-4 text-center">
                
                <Header />

                {/* Navigation CTA Actions */}
                <div className="d-flex flex-column flex-sm-row justify-content-center gap-3 mb-4 mx-auto" style={{ maxWidth: '450px' }}>
                    <Link 
                        className="btn shadow-sm w-100 fw-bold text-dark border border-dark" 
                        style={{ fontSize: '1.1rem', padding: '12px 24px', backgroundColor: '#ffffff', borderRadius: '50px' }} 
                        to="/"
                    >
                        🏠 Back Home
                    </Link>
                    
                    <a 
                        className="btn shadow-sm w-100 fw-bold text-dark border border-dark" 
                        style={{ fontSize: '1.1rem', padding: '12px 24px', backgroundColor: '#ffffff', borderRadius: '50px' }} 
                        href="https://bakesy.shop/b/dylans-homomade-goods" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        🛒 Order Here
                    </a>
                </div>
                
                {/* Clean, Bright Header Banner */}
                <div className="mt-2 mb-4 mx-auto" style={{ maxWidth: '960px' }}>
                    <div className="bg-white p-3 rounded-4 shadow-sm mb-3 border border-dark">
                        <h1 className="h4 fw-bold mb-0 text-dark">🍞 Nutritional Information & Macros 🍞</h1>
                        <p className="mb-0 small text-muted mt-1">Ingredients, macros, and allergy info</p>
                    </div>
                </div>
            </div>

            {/* Calculations Blocks */}
            <main className="container text-start" style={{ maxWidth: '960px' }}>
                <div className="row g-4 align-items-start">
                    
                    {/* Left Block Selector */}
                    <div className="col-12 col-md-6">
                        <div className="card shadow-sm border border-dark p-4 rounded-4 h-100 bg-white text-dark">
                            <h2 className="h5 fw-bold mb-3 border-bottom border-dark pb-2 text-dark">Select Your Bake</h2>
                            
                            <div className="mb-3">
                                <label className="form-label text-dark fw-bold text-uppercase tracking-wider" style={{ fontSize: '11px' }}>Product</label>
                                <select 
                                    id="recipe-select" 
                                    value={recipeKey}
                                    onChange={handleRecipeChange}
                                    className="form-select border border-dark bg-light text-dark fw-semibold shadow-sm rounded-pill p-3 cursor-pointer"
                                >
                                    <option value="" disabled>Select the Crust</option>
                                    
                                    {/* Automatically generate the options based on the recipe data! */}
                                    {Object.entries(recipes)
                                        .sort((a, b) => a[1].name.localeCompare(b[1].name)) // Sort alphabetically by name
                                        .map(([key, data]) => (
                                        <option key={key} value={key}>{data.name}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="mb-3">
                                <label className="form-label text-dark fw-bold text-uppercase tracking-wider" style={{ fontSize: '11px' }}>Servings per product</label>
                                <input 
                                    type="number" 
                                    id="slices" 
                                    value={servings} 
                                    min="1" 
                                    onChange={(e) => setServings(e.target.value)}
                                    className="form-control border border-dark bg-light text-dark text-center fs-5 fw-bold rounded-pill p-3"
                                />
                            </div>

                            <div className="mt-4 pt-3 border-top border-dark">
                                <h3 className="text-dark fw-bold mb-3 text-uppercase tracking-wider text-center" style={{ fontSize: '12px' }}>Quick Macros</h3>
                                <div className="row row-cols-2 row-cols-sm-4 g-2">
                                    <div className="col"><div className="bg-light border border-dark rounded p-2 text-center shadow-sm"><span className="d-block text-dark text-uppercase fw-bold" style={{ fontSize: '10px' }}>Cals</span><span className="text-dark fw-bold fs-5">{totalCals}</span></div></div>
                                    <div className="col"><div className="bg-light border border-dark rounded p-2 text-center shadow-sm"><span className="d-block text-dark text-uppercase fw-bold" style={{ fontSize: '10px' }}>Carbs</span><span className="text-dark fw-bold fs-5">{totalCarbs}</span></div></div>
                                    <div className="col"><div className="bg-light border border-dark rounded p-2 text-center shadow-sm"><span className="d-block text-dark text-uppercase fw-bold" style={{ fontSize: '10px' }}>Protein</span><span className="text-dark fw-bold fs-5">{totalPro}</span></div></div>
                                    <div className="col"><div className="bg-light border border-dark rounded p-2 text-center shadow-sm"><span className="d-block text-dark text-uppercase fw-bold" style={{ fontSize: '10px' }}>Fat</span><span className="text-dark fw-bold fs-5">{totalFat}</span></div></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Block FDA Facts Label */}
                    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end">
                        <div className="bg-white text-black p-4 border border-dark fda-label w-100 rounded-4 shadow-sm" style={{ maxWidth: '380px', borderWidth: '3px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
                            <h2 className="border-bottom border-dark pb-1 m-0 tracking-tighter lh-1" style={{ fontSize: '2.2rem', fontWeight: '900' }}>Nutrition Facts</h2>
                            <div className="d-flex justify-content-between fw-bold fs-5 border-bottom border-dark pb-2 mb-2" style={{ borderBottomWidth: '10px' }}>
                                <span>Serving size</span>
                                <span>{servingName}</span>
                            </div>
                            <div className="d-flex justify-content-between align-items-end border-bottom border-dark pb-1 mb-2" style={{ borderBottomWidth: '6px' }}>
                                <div>
                                    <span className="d-block fw-bold lh-tight mb-1" style={{ fontSize: '12px' }}>Amount per serving</span>
                                    <span className="fw-bold" style={{ fontSize: '1.8rem', fontWeight: '800' }}>Calories</span>
                                </div>
                                <span className="tracking-tighter lh-1" style={{ fontSize: '2.5rem', fontWeight: '900' }}>{totalCals}</span>
                            </div>
                            <div className="text-start" style={{ fontSize: '13px' }}>
                                <div className="text-end fw-bold border-bottom border-dark pb-1" style={{ fontSize: '11px' }}>% Daily Value*</div>
                                <div className="d-flex justify-content-between border-bottom border-dark py-2"><span><span className="fw-bold">Total Fat</span> {totalFat}</span></div>
                                <div className="d-flex justify-content-between border-bottom border-dark py-2"><span><span className="fw-bold">Sodium</span> {totalSod}</span></div>
                                <div className="d-flex justify-content-between border-bottom border-dark py-2"><span><span className="fw-bold">Total Carbohydrate</span> {totalCarbs}</span></div>
                                <div className="d-flex justify-content-between border-bottom border-dark py-2 ps-3"><span>Total Sugars {totalSugar}</span></div>
                                <div className="d-flex justify-content-between py-2 border-bottom" style={{ borderBottomWidth: '10px', borderBottomColor: 'black' }}><span><span className="fw-bold">Protein</span> {totalPro}</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
            
        </div>
    );
}
