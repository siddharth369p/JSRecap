let numbers=[2,4,6,8,9];

let result=numbers.map(num=> num*3);
//  console.log(result);

//  let jen=numbers.filter((nums)=>nums/2==0)
//    console.log(jen);
   let jen = numbers.filter((nums) => nums % 2 == 0)
console.log(jen);




let jai=["Ram","Shyam","vellam"]

let row=jai.map((je)=>"hellow"+je)
  //  console.log(row)




const handleSubmit = async () => {
  const res = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: "Siddharth",
      email: "sid@gmail.com",
      message: "Hello"
    })
  });

  const data = await res.json();

  alert("Message sent successfully!");
};
