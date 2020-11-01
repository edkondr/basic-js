module.exports = function getSeason(date) {
  if (date===!date) return 'введите пожалуйста время года';
  
   var month = date.getMonth('');
    if(month >=2 && month<5) {
      return 'spring';
    } else if(month >=5 && month<8) {
      return 'summer';
    } else if(month >=8 && month<11) {
      return 'autumn';
    } else return 'winter';
  };

