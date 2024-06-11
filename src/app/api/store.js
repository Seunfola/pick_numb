const availableNumbers = [1, 2, 3, 4, 5,6,7,8];
const pickedNumbers = [];

export function getAvailableNumbers() {
    return [1, 2, 3, 4, 5];
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
