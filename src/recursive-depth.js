module.exports = class DepthCalculator {
    calculateDepth(arr) {
        let num = 0;
        if(Array.isArray(arr)) {
            let counter = 0;
        for(let i = 0; i< arr.length; i++) {
            counter = Math.max(this.calculateDepth(arr[i]), counter);  
        }
        num = counter + 1;
    }
    return num;
}
};