const materialsData = [
    {
        name: "ПВХ",
		ufPrice: 800, // Цена на УФ печать для акрила
        colors: [
            {
                name: "Pragmatic",
                thicknesses: [
                    { value: "2 мм", laser: 0, milling: 30, sheet: 2818, m2: 455 },
                    { value: "3 мм", laser: 0, milling: 30, sheet: 3795, m2: 613 },
                    { value: "4 мм", laser: 0, milling: 30, sheet: 5340, m2: 862 },
                    { value: "5 мм", laser: 0, milling: 40, sheet: 6095, m2: 984 },
                    { value: "6 мм", laser: 0, milling: 40, sheet: 7360, m2: 1189 },
                    { value: "8 мм", laser: 0, milling: 45, sheet: 10680, m2: 1725 },
                    { value: "10 мм", laser: 0, milling: 50, sheet: 13380, m2: 2161 }
                ]
            },
            {
                name: "Кармапласт",
                thicknesses: [
                    { value: "2 мм", laser: 0, milling: 30, sheet: 2818, m2: 455 },
                    { value: "3 мм", laser: 0, milling: 30, sheet: 3795, m2: 613 },
                    { value: "4 мм", laser: 0, milling: 30, sheet: 5340, m2: 862 },
                    { value: "5 мм", laser: 0, milling: 40, sheet: 6095, m2: 984 },
                    { value: "6 мм", laser: 0, milling: 40, sheet: 7360, m2: 1189 },
                    { value: "8 мм", laser: 0, milling: 45, sheet: 10680, m2: 1725 },
                    { value: "10 мм", laser: 0, milling: 50, sheet: 13380, m2: 2161 }
                ]
            }
        ]
    },
    {
        name: "Акрил",
		ufPrice: 1150, // Цена на УФ печать для акрила
        colors: [
            {
                name: "Прозрачный",
                thicknesses: [
                    { value: "2 мм", laser: 25, milling: 30, sheet: 8500, m2: 1360 },
                    { value: "3 мм", laser: 30, milling: 35, sheet: 12375, m2: 1980 },
                    { value: "4 мм", laser: 37, milling: 41, sheet: 16500, m2: 2640 },
                    { value: "5 мм", laser: 40, milling: 47, sheet: 21450, m2: 3431 },
                    { value: "6 мм", laser: 60, milling: 55, sheet: 25740, m2: 4117 },
                    { value: "8 мм", laser: 85, milling: 67, sheet: 33280, m2: 5323 },
                    { value: "10 мм", laser: 95, milling: 80, sheet: 42900, m2: 6861 }
                ]
            },
			
             {  name: "Молочный",
                thicknesses: [
                    { value: "2 мм", laser: 25, milling: 30, sheet: 11700, m2: 1871 },
                    { value: "3 мм", laser: 30, milling: 35, sheet: 14950, m2: 2391 },
                    { value: "5 мм", laser: 50, milling: 50, sheet: 22100, m2: 3535 }
                ]
            },
	
            {    name: "Цветной",
                thicknesses: [
                    { value: "3 мм", laser: 30, milling: 35, sheet: 18200, m2: 2800 },
                    { value: "5 мм", laser: 50, milling: 50, sheet: 24500, m2: 3926 }
                ]
            },
        ]
    },

{
	name: "Полистирол",
	ufPrice: 1150, // Цена на УФ печать для акрила
        colors: [
            {  name: "Прозрачный",
                thicknesses: [
                    { value: "2 мм", laser: 25, milling: 30, sheet: 8500, m2: 1360 },
                    { value: "3 мм", laser: 30, milling: 35, sheet: 12375, m2: 1980 },
                    { value: "4 мм", laser: 37, milling: 41, sheet: 16500, m2: 2640 },
                    { value: "5 мм", laser: 40, milling: 47, sheet: 21450, m2: 3431 },
                    { value: "6 мм", laser: 60, milling: 55, sheet: 25740, m2: 4117 },
                    { value: "8 мм", laser: 85, milling: 67, sheet: 33280, m2: 5323 },
                    { value: "10 мм", laser: 95, milling: 80, sheet: 42900, m2: 6861 }
                ]
            },
			
              {  name: "Молочный",
                thicknesses: [
                    { value: "2 мм", laser: 25, milling: 30, sheet: 11700, m2: 1871 },
                    { value: "3 мм", laser: 30, milling: 35, sheet: 14950, m2: 2391 },
                    { value: "5 мм", laser: 50, milling: 50, sheet: 22100, m2: 3535 }
                ]
            },
	
             {   name: "Цветной",
                thicknesses: [
                    { value: "3 мм", laser: 30, milling: 35, sheet: 18200, m2: 2800 },
                    { value: "5 мм", laser: 50, milling: 50, sheet: 24500, m2: 3926 }
                ]
            },
        ]
    },
	{
	name: "ПЭТ",
		ufPrice: 1150, // Цена на УФ печать для акрила
        colors: [
            {  name: "Прозрачный",
                thicknesses: [
                    { value: "0.5 мм", laser: 18, milling: 20, sheet: 611, m2: 238 },
                    { value: "1 мм", laser: 23, milling: 25, sheet: 1235, m2: 482 },
                    { value: "1.5 мм", laser: 27, milling: 30, sheet: 1794, m2: 700 },
                    { value: "2 мм", laser: 33, milling: 35, sheet: 2405, m2: 939 },
                ]
            },
        ]
    },
	{
	name: "Поликарбонат",
		ufPrice: 1150, // Цена на УФ печать для акрила
        colors: [
            {  name: "Прозрачный FORDA",
                thicknesses: [
                    { value: "2 мм", laser: 0, milling: 40, sheet: 8625, m2: 1380 },
                    { value: "3 мм", laser: 0, milling: 30, sheet: 12240, m2: 1958 },
                    { value: "4 мм", laser: 0, milling: 35, sheet: 16320, m2: 2610 },
                    { value: "5 мм", laser: 0, milling: 50, sheet: 20400, m2: 3263 },
                    { value: "6 мм", laser: 0, milling: 60, sheet: 24480, m2: 3915 },
                    { value: "8 мм", laser: 0, milling: 70, sheet: 32640, m2: 5220 },
                    { value: "10 мм", laser: 0, milling: 80, sheet: 37380, m2: 5978 }
                ]
            },
			 {  name: "Пр. Gross PC",
                thicknesses: [
                    { value: "3 мм", laser: 0, milling: 30, sheet: 9400, m2: 1500 },
                    { value: "5 мм", laser: 0, milling: 50, sheet: 16300, m2: 2800 }
                ]
            },
        ]
    },
	{
	name: "Фанера",
		ufPrice: 1260, // Цена на УФ печать для акрила
        colors: [
            {  name: "ФК 2/2",
                thicknesses: [
                    { value: "3/4 мм", laser: 35, milling: 35, sheet: 630, m2: 271 },
                    { value: "6 мм", laser: 45, milling: 35, sheet: 882, m2: 379 },
                    { value: "8/9 мм", laser: 60, milling: 50, sheet: 1050, m2: 451 },
                    { value: "10 мм", laser: 80, milling: 50, sheet: 1260, m2: 542 },
                    { value: "12 мм", laser: 0, milling: 50, sheet: 1479, m2: 636 },
                    { value: "15 мм", laser: 0, milling: 65, sheet: 2025, m2: 871 },
                    { value: "18 мм", laser: 0, milling: 78, sheet: 2400, m2: 1032 },
                    { value: "21 мм", laser: 0, milling: 85, sheet: 2850, m2: 1225 },
                    { value: "40 мм", laser: 0, milling: 220, sheet: 3730080, m2: 5900078 }
                ]
            },
        ]
    },
	{
	name: "МДФ",
		ufPrice: 1260, // Цена на УФ печать для акрила
        colors: [
            {  name: "Классический",
                thicknesses: [
                    { value: "6 мм", laser: 45, milling: 40, sheet: 1365, m2: 254 },
                    { value: "8 мм", laser: 50, milling: 40, sheet: 1781, m2: 331 },
                    { value: "10 мм", laser: 55, milling: 50, sheet: 2236, m2: 415 },
                    { value: "12 мм", laser: 0, milling: 50, sheet: 2665, m2: 495 },
                    { value: "16 мм", laser: 0, milling: 60, sheet: 3393, m2: 630 },
                    { value: "18 мм", laser: 0, milling: 60, sheet: 3848, m2: 715 },
                    { value: "19 мм", laser: 0, milling: 90, sheet: 4069, m2: 756 },
                    { value: "21 мм", laser: 0, milling: 90, sheet: 4875, m2: 906 }
                ]
            },
        ]
    },
	{
	name: "АКП",
		ufPrice: 1260, // Цена на УФ печать для акрила
        colors: [
            {  name: "1.5х4 - 3мм",
                thicknesses: [
                    { value: "3/4 мм", laser: 35, milling: 35, sheet: 630, m2: 271 },
                    
                ]
            },
        ]
    },
];

document.addEventListener('DOMContentLoaded', function() {
    populateDropdowns();
});

function populateDropdowns() {
    const materialSelect = document.getElementById('material-select');
    materialsData.forEach(material => {
        const option = document.createElement('option');
        option.textContent = material.name;
        materialSelect.appendChild(option);
    });

    materialSelect.addEventListener('change', updateColorOptions);
    document.getElementById('color-select').addEventListener('change', updateThicknessOptions);
    document.getElementById('calculate-btn').addEventListener('click', calculateCost);
}

function updateColorOptions() {
    const materialSelect = document.getElementById('material-select');
    const colorSelect = document.getElementById('color-select');
    colorSelect.innerHTML = '<option disabled selected>Выберите цвет</option>';
    
    const selectedMaterial = materialsData.find(m => m.name === materialSelect.value);
    selectedMaterial.colors.forEach(color => {
        const option = document.createElement('option');
        option.textContent = color.name;
        colorSelect.appendChild(option);
    });
}

function updateThicknessOptions() {
    const materialSelect = document.getElementById('material-select');
    const colorSelect = document.getElementById('color-select');
    const thicknessSelect = document.getElementById('thickness-select');
    thicknessSelect.innerHTML = '<option disabled selected>Выберите толщину</option>';
    
    const selectedMaterial = materialsData.find(m => m.name === materialSelect.value);
    const selectedColor = selectedMaterial.colors.find(c => c.name === colorSelect.value);
    selectedColor.thicknesses.forEach(thickness => {
        const option = document.createElement('option');
        option.textContent = thickness.value;
        option.dataset.laser = thickness.laser;
        option.dataset.milling = thickness.milling;
        option.dataset.sheet = thickness.sheet;
        option.dataset.m2 = thickness.m2;
        thicknessSelect.appendChild(option);
    });
}

function calculateCost() {
    const thicknessSelect = document.getElementById('thickness-select');
    const selectedOption = thicknessSelect.options[thicknessSelect.selectedIndex];
    const laserPrice = Number(selectedOption.dataset.laser);
    const millingPrice = Number(selectedOption.dataset.milling);
    const sheetPrice = Number(selectedOption.dataset.sheet);
    const m2Price = Number(selectedOption.dataset.m2);

    const cuttingMethod = document.querySelector('input[name="cutting-method"]:checked').value;
    const measurementMethod = document.querySelector('input[name="measurement"]:checked').value;
    const cuttingLength = Number(document.getElementById('cutting-length').value);
    const quantity = Number(document.getElementById('quantity').value);
    const markupPercentage = Number(document.getElementById('markup').value) / 100;

	 
	
    let cost = 0;
    if (cuttingMethod === 'laser') {
        cost += laserPrice * cuttingLength;
    } else {
        cost += millingPrice * cuttingLength;
    }

    if (measurementMethod === 'sheet') {
        cost += sheetPrice * quantity;
    } else {
        cost += m2Price * quantity;
    }

    cost += cost * markupPercentage;

    const productionQuantity = Number(document.getElementById('quantity-production').value) || 1;

    cost *= productionQuantity;
    document.getElementById('result').value = `Общая стоимость: ${cost.toFixed(2)} руб.`;
}

document.getElementById('screenshot-btn').addEventListener('click', function() {
    const card = document.querySelector('.calculator-container');
    const title = document.getElementById('calculator-title').value || 'default_name';
    
    html2canvas(card).then(canvas => {
        const link = document.createElement('a');
        link.download = title + '.png';
        link.href = canvas.toDataURL();
        link.click();
    });
});
document.getElementById('reset-btn').addEventListener('click', function() {
    // Сброс полей ввода
    const inputs = document.querySelectorAll('.calculator-card input');
    inputs.forEach(input => {
        if(input.type === "text" || input.type === "number") {
            input.value = '';
        } else if (input.type === "radio") {
            input.checked = false; // Сброс радио кнопок
        }
    });
    
    // Сброс выпадающих списков
    const selects = document.querySelectorAll('.calculator-card select');
    selects.forEach(select => {
        select.selectedIndex = 0;
    });

    // Сброс результата
    document.getElementById('result').textContent = '';
});


document.getElementById('add-film-btn').addEventListener('click', function() {
    const container = document.getElementById('films-container');
    const newRow = container.firstElementChild.cloneNode(true);
    newRow.querySelector('.film-type').selectedIndex = 0;
    newRow.querySelector('.film-quantity').value = '';
    container.appendChild(newRow);
});


document.getElementById('calculate-secondary-btn').addEventListener('click', function() {
    let totalCost = 0;
    const rollingQuantity = Number(document.getElementById('rolling-quantity').value) || 0;
    totalCost += rollingQuantity * 1000;  // Цена за услугу "Закатка" 1000 рублей

    const filmTypes = document.querySelectorAll('.film-type');
    const filmQuantities = document.querySelectorAll('.film-quantity');
    
    filmTypes.forEach((filmTypeSelect, index) => {
        const selectedOption = filmTypeSelect.options[filmTypeSelect.selectedIndex];
        const pricePerMeter = Number(selectedOption.dataset.price);
        const quantity = Number(filmQuantities[index].value) || 0;
        totalCost += pricePerMeter * quantity;
    });

    const printTypeSelect = document.querySelector('.print-type');
    const selectedPrintType = printTypeSelect.value;
    const printQuantity = Number(document.querySelector('.print-quantity').value) || 0;

    const materialSelect = document.getElementById('material-select');
    const selectedMaterialName = materialSelect.value;
    const selectedMaterial = materialsData.find(m => m.name === selectedMaterialName);

    if (selectedPrintType === 'uf' && selectedMaterial) {
        totalCost += selectedMaterial.ufPrice * printQuantity;
    }

    let printCost = 0;
    if (selectedPrintType === 'souvenir') {
        if (printQuantity >= 51) {
            printCost = 350;
        } else if (printQuantity >= 31) {
            printCost = 500;
        } else if (printQuantity >= 11) {
            printCost = 600;
        } else if (printQuantity >= 6) {
            printCost = 650;
        } else if (printQuantity >= 3) {
            printCost = 1000;
        } else if (printQuantity >= 1) {
            printCost = 1200;
        }
 
  } 
	
	if (selectedPrintType === 'paint') {
        printCost = 1700;
    }

	else if (selectedPrintType === 'solvent' || selectedPrintType === 'banner') {
        printCost = 1000;
    }
	
	
    const isWhiteColor = document.getElementById('white-fill-btn').classList.contains('active');
    if (isWhiteColor) {
        printCost += 400;
    }

    totalCost += printCost * printQuantity;

    const isDoubleSided = document.getElementById('double-sided-btn').classList.contains('active');
    if (isDoubleSided && (selectedPrintType !== 'uf' || selectedMaterial.type !== 'uf')) {
        totalCost += (printCost * printQuantity * 0.5);  // Добавляем 50% от стоимости печати за двустороннюю печать
    }

    document.getElementById('secondary-result').value = `Общая стоимость: ${totalCost.toFixed(2)} руб.`;
});
document.getElementById('white-fill-btn').addEventListener('click', function() {
    this.classList.toggle('active');
});

document.getElementById('double-sided-btn').addEventListener('click', function() {
    this.classList.toggle('active');
});

document.getElementById('delivery-btn').addEventListener('click', function() {
    this.classList.toggle('active');
});


document.getElementById('calculate-total-btn').addEventListener('click', function() {
    // Получаем результаты из всех карточек
    const primaryResult = parseFloat(document.getElementById('result').value.replace('Общая стоимость: ', '').replace(' руб.', '')) || 0;
    const secondaryResult = parseFloat(document.getElementById('secondary-result').value.replace('Общая стоимость: ', '').replace(' руб.', '')) || 0;
    let totalResult = primaryResult + secondaryResult;
    
    const isDeliveryActive = document.getElementById('delivery-btn').classList.contains('active');
    
    if (isDeliveryActive) {
        totalResult += 600; // Добавляем стоимость доставки, если кнопка активна
    }
    
    // Выводим общую сумму
    document.getElementById('total-result').value = `Общая сумма: ${totalResult.toFixed(2)} руб.`;
});
