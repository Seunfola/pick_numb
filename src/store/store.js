let availableNumbers = [1, 2, 3, 4];
let pickedNumbers = []; 

export function getAvailableNumbers() {
    return availableNumbers;
}

export function pickNumber(number, userId) {
    if (availableNumbers.includes(number)) {
       
        if (pickedNumbers.some(entry => entry.number === number)) {
            return { success: false, message: 'Number already picked by another user' };
        }

        availableNumbers = availableNumbers.filter(num => num !== number);
        pickedNumbers.push({ number, userId }); 
        
        return { success: true, number };
    } else {
        return { success: false, message: 'Number not available' };
    }
}

export function isNumberPickedByUser(number, userId) {
    return pickedNumbers.some(entry => entry.number === number && entry.userId === userId);
}
