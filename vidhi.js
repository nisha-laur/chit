let btnRandom = document.querySelector('#btn2');
let result = document.querySelector('#Volunteer-name');
let users =['Ramesh','Rakesh', 'Suraj Pal','Brajesh','Bahadur','Kamla' ,'Urmila','Sarasvati'];


function getRandomNumber(min, max){
    let step1= max - min +1;
    let step2 = Math.random()* step1;
    let result = Math.floor(step2) + min;

    return result;
}
 btnRandom.addEventListener('click',()=>{
     let index = getRandomNumber(0, users.length-1);
     result.innerText= users[index];
 });


