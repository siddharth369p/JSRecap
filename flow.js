if(true){
    // if comditon is tur them come
}
if(true)console.log("only uses for one line")

    // && uses for both condition will be true{logical operators}
    // || uses for check multiple
    const month=3;

    switch(month){
        case 1 :
            console.log("jan")
            break;
        case 2:
            console.log("feb")
            break;
        case 3 :
            console.log("march")
            break;
            
        default:
        console.log("nothing is matches")
    }
    //falsy values

    // "",undefined,NaN,false,0,-0,null

    // truthy values
    // 'false'," ",{},[],function(){}

    const emptyobj={}
    if(Object.keys(emptyobj).length===0){
        console.log("object is empty")
    }
    // console.log(emptyobj)

    // Mullish coleshing operator(??)

    let val1;
    // val1=5??10
    // val1=undefined??10

    val1=null??14
    console.log(val1)

    ///
    for(let i=0;i<=7;i++){
         let ele=i;
        for(let j=i;j<=i;j++){
            console.log(j=" ")
        }
       
        console.log(ele)
    }
