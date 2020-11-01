module.exports = function calculateHanoi(disksNumber, turnsSpeed ) {
    
    let count = (Math.pow(2, disksNumber) - 1);
    return {turns: count,seconds: count / (turnsSpeed / 3600),};
}