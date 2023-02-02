

function summ(){
    var summa = document.getElementById('summa');
    console.log(summa.value);
    document.getElementById('eat_summ').innerHTML = summa.value + " грн";
    summa.value = "";  
}
function send(){
    var summa = document.getElementById('summa');
    alert(summa.value)
}

// метод передачі даних на сервер
// let sum1 = 1;
// let sum2 = 2;

// fetch('http://localhost:3000/req', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({ sum1, sum2 }),
// })
// .then(res => res.json())
// .then(data => {
//   let result = data.result;
//   alert(`The result is: ${result}`);
// })
// .catch(err => console.error(err));