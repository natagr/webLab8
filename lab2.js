
const cityCodes = {
    'КИЇВ': '044',
    'ЛЬВІВ': '032',
    'ОДЕСА': '048',
    'ХАРКІВ': '057',
    'ДНІПРО': '056'
  };
 
  
  function checkCity() {
    const cityName = document.getElementById('cityName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    if (cityName in cityCodes) {
      document.getElementById('cityResult').textContent = `${cityCodes[cityName]}  ${phoneNumber}`;
    } else {
      document.getElementById('cityResult').textContent = "Назва міста відсутня в списку.";
    }
  }
  
  
  document.getElementById('phoneNumber').onchange = function() {
    if (document.getElementById('cityName').value in cityCodes) {
      checkCity();
    }
  };
  


  var image = document.getElementById('image');

  
  function changeImage() {
    image.src = 'flower2.jpg';
  }

  
  function revertImage() {
    image.src = 'flower1.jpg';
  }

 
 