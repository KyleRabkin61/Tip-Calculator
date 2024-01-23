function calculateAndDisplay() {
    // Get the input values from our HTML forms
    let bill = parseFloat(document.getElementById('totalBill').value)
    let numOfPpl = parseInt(document.getElementById('numOfPeople').value)
    let serviceQuality = document.getElementById('serviceQuality').value



    // Calculate tip, total bill, and the amount per person using helper functions
    let tip = calculateTip(bill, serviceQuality)
    let totalBill = calculateTotalBill(bill, tip)
    let amtPerPers = calculateAmtPerPers(totalBill, numOfPpl)

    // Display the result in the HTML document
    document.getElementById('tipResult').innerText = 'Tip: $' + tip.toFixed(2)
    document.getElementById('totalBillResult').innerText = 'Total Bill: $' + totalBill.toFixed(2)
    document.getElementById('amtPerPersonResult').innerText = 'Amount per person: $' + amtPerPers.toFixed(2)
}
    // Helper Function to calculate Tip based on the bill and service Quality

    function calculateTip(bill, quality) {
        if(quality === 'Great') {
            return bill * .2
        } 
        else if(quality === 'Good') {
            return bill * .15
        }
        else if(quality === 'Poor') {
            return bill * .1
        }
        else {
            return 0
        }
    }

    // Helper Function to calculate total bill by adding the original bill and tip

    function calculateTotalBill(bill, tip) {
        return bill + tip
    }

    // Helper Function to calculate amount per person by dividing total bill to the number of people

    function calculateAmtPerPers(totalBill, numOfPpl) {
        return totalBill / numOfPpl
    }

















/* let bill = 120
let numOfPpl = 5
let serviceQuality = 'Great'

function calculateTip(quality) {
    if(quality === 'Great') {
        return bill * .2
    } 
    else if(quality === 'Good') {
        return bill * .15
    }
    else if(quality === 'Poor') {
        return bill * .1
    }
    else {
    }
} 

let tip = calculateTip(serviceQuality)

function calculateTotalBill(bill, tip) {
    return bill + tip
}

let totalBill = calculateTotalBill(bill, tip)

function calcAmtPerPrs(totalBill, numOfPpl) {
    return totalBill / numOfPpl
}

let amtPerPers = calcAmtPerPrs(totalBill, numOfPpl)

console.log('Tip: $' + tip)
console.log('Total Bill: $' + totalBill)
console.log('Amount per person: $' + amtPerPers) */