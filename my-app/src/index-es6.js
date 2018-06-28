var React = require("react")
var ReactDOM = require("react-dom")
//commonjs(同步)   //AMD（异步）
ReactDOM.render(<div>1233222</div>, document.getElementById('root'));


//js没有块级作用域   {}

// if(1){
//   var a =2
//   let b =3
// }

// console.log(a,b)
// const  a = 1;
// a = 2;

// let arr = [1,2,3,4,5,6];
// let [a,b,...c] = arr
// let arr2 = [10,22,...arr]
// console.log(a,b,c)
// console.log(arr2)


// let obj = {a:1,b:2}
// const {a,b} = obj
// let obj2 = {number:10,...obj}




// function fn({number,a,b}){
//   console.log(number)
// }

// fn(obj2)


// function sum(a,b){
//   return a+b
// }

// var number = sum(20,10)
// console.log(number)

// var sum2 = (a,b)=>( a+b )
// console.log(sum2(20,10))

// var obj = {
//   name:"obj name",
//   fn:function(){
//     setTimeout(()=>{
//       console.log(this.name)
//     },1000)
//   }
// }
// obj.fn()

// function sum(a,b=0){
//   return a+b
// }

// console.log(sum(1))


// function sum(...arg){
//   let result = 0
//   arg.forEach(ele=>{
//     result+=ele
//   })
//   return result
  
// }

// console.log(sum(1))


class Person {
  constructor(name,age){
    this.name = name;
    this.age = age
  } 
  showName(){
    alert(this.name)
  }
}
var xiaoXin = new Person("小鑫",18)
xiaoXin.showName()


class SuperMan extends Person {
  constructor(name,age,skill){
    super(name,age) //基础父类
    this.skill = skill
  }
  showSkill(){
    alert(this.skill)
  }
}

var daXin = new SuperMan("大鑫",28,"灰")
daXin.showSkill()