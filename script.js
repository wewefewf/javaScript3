let a = prompt('цифра')

if (a % 2 == 0) {
    console.log('четные');
} else {
    console.log('не четные')
}


let name = prompt('как вас зовут');

let age = prompt('Сколько вам лет').toLowerCase(); 

if (name.length %2 == 0 && age >= '18') {
    alert('имени четные и возраст правильный');
} else {
    alert('please exit')
}



let vv = prompt('как тебя зовут');

if (vv.slice(0,1)==='a') {
    alert('начинается с а');
} else {
    alert('please exit')
}