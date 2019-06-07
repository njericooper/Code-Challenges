function absoluteTwentyRange(num){
    if ((num >= 80 && num <= 120) 
        || 
        (num >= 380 && num <= 420))
       {
      return true;
       } 
      else 
       {
      return false;
    }
  }
  
  console.log(absoluteTwentyRange(70))