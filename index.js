
let plus = document.querySelector('.plus');
let minus = document.querySelector('.minus');
let table = document.querySelector('#table');
let pColoane = document.querySelector('.pColoane');
let mColoane = document.querySelector('.mColoane');
let coloane1 = document.querySelector('.coloane1');
let coloane2 = document.querySelector('.coloane2');
let coloane3 = document.querySelector('.coloane3');
let i = 2;

plus.addEventListener('click', function(){

  let row = table.insertRow(3);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  cell1.innerHTML = '<p>'+ '</p>';
  cell2.innerHTML = '<p>'+ '</p>';
  cell3.innerHTML = '<p>'+ '</p>';
  i++;
})

minus.addEventListener('click', function(){
  table.deleteRow(i);
  i--;
})

pColoane.addEventListener('click', function(){
  /*for(let j=3; j<i; j++)
  {
    let column1 = coloane1.insertCell(j);
    column1.innerHTML = '<p>'+ '</p>';
  }*/
  let column1 = coloane1.insertCell(3);
  column1.innerHTML = '<p>'+ '</p>';


})
pColoane.addEventListener('click', function(){
  let column2 = coloane2.insertCell(3);
  column2.innerHTML = '<p>'+ '</p>';
})
pColoane.addEventListener('click', function(){
  let column3 = coloane3.insertCell(3);
  column3.innerHTML = '<p>'+ '</p>';
})
