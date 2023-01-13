// // task 1
const setSum = () => {
    let sum = 0;
        
    return function(element){
      sum += element;
      console.log(sum);
    }
  }
  
  let counter = setSum();
  
  counter(3);
  counter(5);
  counter(228);

// // task 2
const getUpdatedArr = () => {
    let sum = [];
        
    return function(element){
    if (element == null) {
        sum = [];
    } else {
      sum.push(element);
    }
    console.log(sum);
    }
  }
  
 let updatedArr = getUpdatedArr();
  
updatedArr(3);
updatedArr(5);
updatedArr();

// // task 3
const getTime = () => {
  let lastUsedTime = null; 
      
  return function(){
  if (lastUsedTime == null) {
    lastUsedTime = Date.now();

    return console.log('Enabled');
  }

  let difference = Math.floor((Date.now() - lastUsedTime) / 1000);
  lastUsedTime = Date.now();

  return console.log(difference);
  }
}

let result = getTime();
result();

// task 4

let time = 5;

let countdown = setInterval(timer, 1000); 

function timer()
{  
  if (time <= 0)
  {
     clearInterval(countdown);
     console.log('Time End');
     return;
  }

  let mins = '' + Math.floor(time / 60);
  let secs = '' + time % 60
  if (secs < 10) secs = '0' + secs;
  if (mins < 10) mins = '0' + mins; 
  time--;
  
  console.log(`${mins}:${secs}`); 
}

timer();
