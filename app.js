let promise = new Promise((resolve, reject)=>{
    const car ={
        name: 'BMW',
        number: "9809aa",
        year: "2015",
        price:"$10000",
        placeOfIssue:'Germany'
    };
    setTimeout(() => {
       console.log('json data...'); 
       const  JsonData = JSON.stringify(car);
       console.log( JsonData);
       resolve(JsonData);
reject(()=>{
    console.log("error");
})
    }, 2000 );
    
})

promise
.then((JsonData)=>{
    setTimeout(()=>{
console.log('Parsed data..');
const JsonParsed = JSON.parse(JsonData);
console.log(JsonParsed);
console.log('end');
    }, 3000 )
})
.catch(()=>{
    console.log('error');
})