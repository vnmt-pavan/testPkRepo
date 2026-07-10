// test
console.log("Test111111");
console.log("Test2");
console.log("Test3");
console.log("Test4");
<<<<<<< HEAD
console.log("Test5");

Test5

6672 * 4=26688
20016

let newUnitCost = (parseFloat(cost) * parseInt(newQty)) - parseFloat(currVal);
log.debug("isPositive", { cost, averageCost, newQty, currVal, newUnitCost });
{ "cost": 6672, "averageCost": "6706.48", "newQty": 4, "currVal": 20016, "newUnitCost": 6672 }

// Estimated unit cost NetSuite prefilled
const estUnitCost = adjRec.getCurrentSublistValue("inventory", "unitcost") || 0;

// Only apply calculation when needed
if (parseFloat(averageCost) !== parseFloat(cost)) {

    // Apply cost change
    adjRec.setCurrentSublistValue("inventory", "unitcost", newUnitCost);
}
===========================================
{"cost":13200,"averageCost":"14693.21","newQty":239,"currVal":3532670.55,"newUnitCost":-377870.5499999998}	



=======
console.log("Test5");
>>>>>>> 3107ae141bef590ddebfb9b113cdb108450983a5
