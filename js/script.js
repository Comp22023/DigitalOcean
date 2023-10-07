////const url = 'https://reqres.in/api/users?page=2';
//
//let test = []
//
//document.querySelector('#get-text').onclick = async () => {
//    try {
//    let response = await fetch(url);
//    if (response.ok) {
//      let data = await response.text();
//      let obj = JSON.parse(data);
//      for (let i=0; i<obj.data.length; i++) {
//        let counter = obj.data[i];
//        test.push(`id:${counter.id}, first name:${counter.first_name}, last name:${counter.last_name}, email:${counter.email}, avatar:${counter.avatar}`);
//        console.log(test);
//        document.querySelector('#result').innerHTML = test;
//      }
//    }
//    }
//    catch (error) {
//        console.log(error);
//   }
//}

//const json = '{ "fruit": "pineapple", "fingers": [{"id":10}] }';
//const obj = JSON.parse(json);
//console.log(obj.fingers);

//for (var i=0; i<jsonData.counters.length; i++) {
//    var counter = jsonData.counters[i];
//    console.log(counter.counter_name);
//}


//let div = document.createElement('div');
//div.setAttribute('class', 'myblock');
//div.innerHTML=`<div class="myblock" id="mymy">
//        <div class="miniblocks"><h1>Классный</h1></div>
//            <div class="miniblocks">Красный блок</div>
//            <div class="imageforimage" id="esenin"><img src="esenin.jfif" id='imgese'></div>
//            <div class='white'></div>
//            <div class='purple'></div>
//            <div class='black'></div>
//        </div>
//        `;
//
//document.querySelector('body').appendChild(div);
//
//let change =document.querySelector('#mymy');
//let textt= document.querySelector('#texte');
//change.style.color='red';
//let myesenin = document.querySelector('#esenin');
//myesenin.style.width='500px';
//let imge = document.querySelector('#imgese');
//imge.style.width='100%';

//let a = document.createElement('h1');
//a.textContent='gfdgdfg';
//document.querySelector('body').appendChild(a);
//a.setAttribute('class', 'colors');
//a.style.fontSize = '60px';
//
//let json = '{"id":1, "name":"Костян", "id":2, "name":"Иван"}';
//let b = JSON.parse(json);
//console.log(b);
//let watch = document.querySelector('#zagol');
//for (i=0;i<json.length;i++){
//    watch.innerHTML=`${b.name}`;
//}
//const json = '{"result":true, "count":42}';
//const obj = JSON.parse(json);
//console.log(obj.count);


//let a = parseInt(prompt("Введите сторону a"))
//let b = parseInt(prompt("Введите сторону b"))
//let c = parseInt(prompt("Введите сторону c"))
//
//function treugol(a,b,c){
//    if (a == b && b == c && c == a){
//        alert("Ваш треугольник равносторонний")
//    }
//    else if (a == b || b == c || c == a){
//        alert("Ваш треугольник равнобедренный")
//    }
//    else{
//        alert("Ваш треугольник не равнобедренный и не равносторонний")
//    }
//}
//treugol(a,b,c)


function execplease(){
    let j = 0
    for(i=1;i<=40;i++){
    if(i>=13 && i<27) continue
    console.log(i)

    }
execplease()