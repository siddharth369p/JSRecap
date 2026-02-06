const symb=Symbol("key")
const jsobj={
    name:"jai",
    age:22,
      [symb]:"hi",
    location:"Delhi",
    email:"sidpathak2002@gmail.com"
                  }
                // console.log(jsobj.location)
                //   console.log(jsobj["age"])
 jsobj.age=24;
//  console.log(jsobj);
//  Object.freeze(jsobj)
//  jsobj.name="Siddharth"
//  console.log(jsobj);
jsobj.greeting=function(){
    console.log(`hii javaScript${this.name}`)
}
console.log(jsobj.greeting())