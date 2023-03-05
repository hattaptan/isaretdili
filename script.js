 var btnWord = document.querySelector('#btnConvert');
 var gifArea = document.querySelector('#gifArea');
 var inputWord = document.querySelector('#wordInput');
 var loader = document.getElementById("loader");

 function editWord() {

     var kelime = inputWord.value;


     const cleanedWord = checkWord(kelime);
     if (cleanedWord !== null) {
         setGif(cleanedWord);

     }
 }

 btnWord.addEventListener('click', editWord);


 function checkWord(word) {
     const stopChar = ['`', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', '{', ']', '}', '|', '\\', ';', ':', "'", '"', ',', '<', '.', '>', '/', '?'];
     if (word.length == 0) {
         alert('Lütfen bir kelime yazınız!');
     }

     for (let i = 0; i < stopChar.length; i++) {
         if (word.includes(stopChar[i])) {
             alert('Kelime içinde bir noktalama işareti kullanamazsınız!');
             return null;
         }
     }

     if (/[xwq0-9]/i.test(word)) {

         alert('Sadece Türkçe harfler kullanabilirsiniz.!');
         return null;
     }


     const cleanWord = word.replace(/[^A-Za-zğüşıçöĞÜŞİÇÖ.]/g, ' ');
     return cleanWord;
 }


 function setGif(word) {

     var first = "https://sozluk.gov.tr/assets/img/isaret/";
     var second = "";
     var third = ".gif";

     gifArea.innerHTML = "";

     for (let i = 0; i < word.length; i++) {
         flag = false;
         var Letter = word[i].toLowerCase();

         if (Letter === ' ') {
             gifArea.innerHTML += '<div style="width: 70px; height: 70px;"></div>';
         } else {
             const animationArray = [
                 "animate__bounceIn",
                 "animate__bounceInLeft",
                 "animate__bounceInUp",
                 "animate__fadeInDown",
                 "animate__fadeInTopLeft",
                 "animate__flip",
                 "animate__lightSpeedInRight",
                 "animate__rollIn", "animate__zoomInUp",
                 "animate__bounceInUp",

             ];

             const randomAnimation = animationArray[Math.floor(Math.random() * animationArray.length)];

             var animateBox = "animate__animated " + randomAnimation;
             const imageUrl = `https://sozluk.gov.tr/assets/img/isaret/${Letter}.gif`;
             gifArea.innerHTML += `<div class="d-flex justify-content-center align-items-center flex-column vh-100">
            <div class="text-center mb-4">
              <span class="text-danger text-center">${Letter}</span>
            </div>
            <div class="text-center">
              <img class="${animateBox}" src="${imageUrl}" alt="${Letter}" style="-webkit-box-shadow: 10px 10px 6px -5px rgba(255,85,0,1);
                -moz-box-shadow: 10px 10px 6px -5px rgba(255,85,0,1);
                box-shadow: 10px 10px 6px -5px rgba(255,85,0,1);;width: 70px;
                height: 70px;
                margin: 5px;">
            </div>
          </div>`;
         }
     }
     inputWord.value = "";
 }