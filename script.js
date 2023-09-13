'use strict';

let inputField = document.querySelector('#input');
const button = document.querySelector('#btn');
const length = document.querySelector('#length');
const volume = document.querySelector('#volume');
const mass = document.querySelector('#mass');
const para = document.querySelectorAll('.para');

const measurements = [
    {
    measurementName1: 'Meters',
    conversion: 3.281,
    },
    {
    measurementName1: 'Liters',
    conversion: 0.264,
    },
    {
    measurementName1: 'Kilograms',
    conversion: 2.204,
    },       
];

button.addEventListener('click', () => {
        para.textContent = '';
        let toFeet;
        let toGallons;
        let toPounds;
        let userNum = Number(inputField.value)

        if(isNaN(userNum) || !userNum) {
            alert('Please Enter a Number')
        } else {
            for(let i = 0; i < measurements.length; i++) {
                toFeet = ((measurements[0].conversion) * userNum).toFixed(3);
        
                length.textContent = `${userNum} ${measurements[0].measurementName1} = ${toFeet} feet | ${userNum} feet = ${(userNum / measurements[0].conversion).toFixed(3)}`;
        
        
                toGallons = ((measurements[1].conversion) * userNum).toFixed(3);
        
                volume.textContent = `${userNum} ${measurements[1].measurementName1} = ${toGallons} gallons | ${userNum} gallons = ${(userNum / measurements[1].conversion).toFixed(3)}`;
        
                toPounds = ((measurements[2].conversion) * userNum).toFixed(3);
        
                mass.textContent = `${userNum} ${measurements[2].measurementName1} = ${toPounds} pounds | ${userNum} pounds = ${(userNum / measurements[2].conversion).toFixed(3)}`;
            }
            
        }; 
        
        
});






