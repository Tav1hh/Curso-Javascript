function fun1() {};

const fun2 = function () { };

const array = [function(a,b) {return a + b}, fun1, fun2];
console.log(array[0](2,3));

const obj = {};
obj.falar = function () {return console.log('Opa')}
obj.falar()

function run(func) {
    func()
}

run(obj.falar)