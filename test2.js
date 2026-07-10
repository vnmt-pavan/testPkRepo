// { itemId: '455', locationId: '2', estUnitCost: 50, avgCost: 270.96774194, variance: '-441.94' }

newQty = 5;
estUnitCost = 6672.00;
itemCost = 6673.00;
currVal = 26688.00;

if (parseFloat(estUnitCost) != parseFloat(itemCost)) {
    let newUnitCost = parseFloat(itemCost) * parseInt(newQty);
    console.log('newUnitCost : ', newUnitCost);
    newUnitCost = parseFloat(newUnitCost) - parseFloat(currVal);
    console.log('newUnitCost * : ', newUnitCost);

    // newPosAdjust.setCurrentSublistValue({
    // 	sublistId: 'inventory',
    // 	fieldId: 'unitcost',
    // 	value: newUnitCost
    // });
}

