function chechForSpam (message){
   const  lowerCaseMessage = message.toLowerCase();
   if (lowerCaseMessage.includes(sale) || lowerCaseMessage.includes(spam)){
    return true;
   }
   else{
    return false;
   }
}
