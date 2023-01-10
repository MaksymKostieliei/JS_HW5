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
 
