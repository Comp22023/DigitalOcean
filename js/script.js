const url = 'https://reqres.in/api/users?page=2';

let test = []

document.querySelector('#get-text').onclick = async () => {
    try {
    let response = await fetch(url);
    if (response.ok) {
      let data = await response.text();
      let obj = JSON.parse(data);
      for (let i=0; i<obj.data.length; i++) {
        let counter = obj.data[i];
        test.push(`id:${counter.id}, first name:${counter.first_name}, last name:${counter.last_name}, email:${counter.email}, avatar:${counter.avatar}`);
        console.log(test);
        document.querySelector('#result').innerHTML = test;
      }
    }
    }
    catch (error) {
        console.log(error);
   }
}

//const json = '{ "fruit": "pineapple", "fingers": [{"id":10}] }';
//const obj = JSON.parse(json);
//console.log(obj.fingers);

//for (var i=0; i<jsonData.counters.length; i++) {
//    var counter = jsonData.counters[i];
//    console.log(counter.counter_name);
//}