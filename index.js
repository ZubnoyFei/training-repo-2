const arr = [];

for (let i = 0; i < 10; i++) {
    arr.push(i);
}

let result = arr.map((item) => item * 2);// Мы перебираем массив и возврашаем результат этого коллбэка.

const another = result.map((item, index) => item * index);

const isBigger = (item) => {
    return item > 80;
}

const filterredArray = another.filter(isBigger);// array принимает функцию и фкунция работает для каждого элемента. ФИльтруются значения. если они проходят проверку, то добавляются в массив


const checkArray = (item) => { // Возвращает четные элементы.
    return item % 2 === 0;
}





