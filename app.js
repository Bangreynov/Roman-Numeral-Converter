const arabicInput = document.getElementById("arabicInput");
const romanInput = document.getElementById("romanInput");

arabicInput.addEventListener("input",(e)=>{
  romanInput.value = arabicToRoman(e.target.value);
});
romanInput.addEventListener("input",(e)=>{
  arabicInput.value = romanToArabic(e.target.value);

});

function arabicToRoman(number){
  let roman = "";
  const romanNumList = {MÌ…:1000000,CÌ…MÌ…:900000,DÌ…:500000,CÌ…DÌ…:400000,CÌ…:100000,XÌ…CÌ…:90000,LÌ…:50000,XÌ…LÌ…:40000,XÌ…:10000,IÌ…XÌ…:9000,VÌ…:5000,IÌ…VÌ…:4000,M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  let a;
  if(number > 3999999)
    return "number 1 to 3999999";
  else{
    for(let key in romanNumList){
        a = Math.floor(number / romanNumList[key]);
        if(a >= 0){
            for(let i = 0; i < a; i++){
              roman += key;
            }
          }
        number = number % romanNumList[key];
    }
  }

  return roman;
}
function romanToArabic(romanNumber){
  romanNumber = romanNumber.toUpperCase();
  const romanNumList = ["MÌ…","CÌ…MÌ…","DÌ…","CÌ…DÌ…","CÌ…","XÌ…CÌ…","LÌ…","XÌ…LÌ…","XÌ…","IÌ…XÌ…","VÌ…","IÌ…VÌ…","CM","M","CD","D","XC","C","XL","L","IX","X","IV","V","I"];
  const corresp = [1000000,900000,500000,400000,100000,90000,50000,40000,10000,9000,5000,4000,900,1000,400,500,90,100,40,50,9,10,4,5,1];
  let index =  0, num = 0;
  for(let rn in romanNumList){
    index = romanNumber.indexOf(romanNumList[rn]);
    while(index != -1){
      num += parseInt(corresp[rn]);
      romanNumber = romanNumber.replace(romanNumList[rn],"-");
      index = romanNumber.indexOf(romanNumList[rn]);
    }
  }
  return num;
}
