let availableNumbers = [1, 2, 3, 4,];

const pickedNumbers = [];

export function getAvailableNumbers() {
    return availableNumbers;
};


export function pickNumber(number) {
    if (availableNumbers.includes(number)) {
        availableNumbers = availableNumbers.filter(num => num !== number);
        pickedNumbers.push(number);
        return { success: true, number };
    } else {
        return { success: false, message: 'Number not available' };
    }
};
