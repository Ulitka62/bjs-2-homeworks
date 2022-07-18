'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b,2)-(4*a*c);
  if(d<0){
    return arr;
  }else if (d==0){
    let x = -b/(2*a);
  }else if(d>0){
    let x1 = (-b+Math.sqrt(d))/(2*a); 
    let x2 = (-b-Math.sqrt(d))/(2*a);
  }
  
  return arr; // array
}

function calculateTotalMortgage(percent, contribution, amount, date) {
   let S = amount - contribution ; // Тело кредита
  let P = percent / 100 / 12 ; // Процентная ставка
  let now = new Date();
   let n = date.getMonth() - now.getMonth() + (12*(date.getFullYear() - now.getFullYear())); // Срок кредита
  
  if (isNaN(percent)|| percent<0) {
    return 'Ошибка ввода данных процентной ставки'
  } else if(isNaN(contribution)|| contribution<0){
    return 'Ошибка ввода данных суммы первоначального взноса'
  } else if (isNaN(amount) || amount<0){
    return 'Ошибка ввода данных суммы кредита'
  } else if (isNaN(date) || date<0){
    return 'Ошибка ввода данных даты'
  } else {
    let  payMonth = S*(P+P/(((1+P)**n)-1)); // Ежемесячная оплата
    let totalAmount = (payMonth*n).toFixed(2); // Общая сумма
    console.log(totalAmount);
  return totalAmount;
  }
};