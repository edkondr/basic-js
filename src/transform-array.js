module.exports = function transform(arr) {
    let changeArr = [];
    if (arr.length === 0) return arr;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === '--discard-next'){
            i++;
        } else if(arr[i] === '--discard-prev'){
            changeArr.pop() /*удаляем последний элемент массива и возвращаем его*/
        } else if(arr[i] === '--double-next'){
            changeArr.push(arr[i + 1]); /*добавляем элементы в конец массива*/
        } else if(arr[i] === '--double-prev'){
            changeArr.push(arr[i - 1])
        }else  changeArr.push(arr[i])
    }return changeArr;
};
