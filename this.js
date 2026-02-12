const user={
    username:"john",
    age:22,
    openid:function(){
        let je=this.username
        console.log(je)
    }

}

user.openid()
// function chai(){
//     let username="hitesh"
//     console.log(this.username)


// }
// chai()
 const chai= ()=>{
    let username="hitesh"
    console.log(this)
}
chai();
const addtwo= (num1,num2)=> num1+num2;
// console.log(addtwo(65,256))

// immediate invoked funtion Expression

(function cha(){
    console.log(`DB Connected`)
})();


(()=>{
    console.log(`DB Connected with `)  
})()