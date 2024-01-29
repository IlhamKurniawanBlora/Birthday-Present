// fungsi alert pesan music
function alertMusic() {
    Swal.fire({
        title : "HAPPY <br> BIRTHDAY!",
        text : "Tada! Here's a little something to brighten your day✨",
        showCancelButton: false,
        // showConfirmButton: false,
        confirmButtonColor: '#3085d6',
        customClass: {
            popup: 'sweetalert-glass sweetalert-size',
            title: 'sweetalert-title',
            text: 'sweetalert-text',
          },
        confirmButtonText: 'Play Me',
        footer: '<i>Created by <a href= "https://www.instagram.com/fauzanarisanto/" style="color:skyblue;">Mas Po :)</a></i>',
    }).then((hasil) => {
        if (hasil.isConfirmed) {
        const audio = document.getElementById('myMusic');
        audio.play();
        
        document.body.classList.remove("not-loaded");

        // fungsi typing paragraf
        var myDiv = document.getElementById('transparent-div');
        var typedText = document.getElementById('typeText');
        var typedText2 = document.getElementById('typeText2');
        var typedText3 = document.getElementById('typeText3');
        var typedText4 = document.getElementById('typeText4');
        var typedText5 = document.getElementById('typeText5');
        var paragraphText = "Hi Mba Dinda!";
        var paragraphText2 = "I hope this message finds you well. I just wanted to express my sincerest wishes for you. May your days be filled with joy, success, and all the things that bring happiness into your life. May each step you take bring you closer to achieving your goal. Your dedication and hard work are truly inspiring, and I believe you will excel in your path to becoming a successful doctor.";
        var paragraphText3 = "Wishing you a fantastic year ahead, filled with love, laughter, and wonderful experiences. Happy Birthday, and may this special day bring you nothing but the best!"
        var paragraphText4 = "Warm Regards,"
        var paragraphText5 = "Mas Po  (lagu hanya pemanis  _  _ _ _ _  _ _ _ )"
      
        function typeText() {
          var index = 0;
          var intervalId = setInterval(function () {
              typedText.innerHTML += paragraphText[index];
              index++;
    
              if (index === paragraphText.length) {
                  clearInterval(intervalId);
              }
          }, 100); // Interval waktu antar karakter (sesuaikan sesuai kebutuhan)
          setTimeout(() => {
            typeText2();
          }, 2000);
        };
        function typeText2() {
          var index = 0;
          var intervalId2 = setInterval(function () {
            typedText2.innerHTML += paragraphText2[index];
            index++;
  
            if (index === paragraphText2.length) {
                clearInterval(intervalId2);
            }
        }, 50); // Interval waktu antar karakter (sesuaikan sesuai kebutuhan)
        setTimeout(() => {
          typeText3();
        }, 19000);
        };
        function typeText3() {
          var index = 0;
          var intervalId3 = setInterval(function () {
            typedText3.innerHTML += paragraphText3[index];
            index++;
  
            if (index === paragraphText3.length) {
                clearInterval(intervalId3);
            }
        }, 50); // Interval waktu antar karakter (sesuaikan sesuai kebutuhan)
        setTimeout(() => {
          typeText4();
        }, 9000);
        };
        function typeText4() {
          var index = 0;
          var intervalId4 = setInterval(function () {
            typedText4.innerHTML += paragraphText4[index];
            index++;
  
            if (index === paragraphText4.length) {
                clearInterval(intervalId4);
            }
        }, 50); // Interval waktu antar karakter (sesuaikan sesuai kebutuhan)
        setTimeout(() => {
          typeText5()
        }, 2000);
        };
        function typeText5() {
          var index = 0;
          var intervalId5 = setInterval(function () {
            typedText5.innerHTML += paragraphText5[index];
            index++;
  
            if (index === paragraphText5.length) {
                clearInterval(intervalId5);
            }
        }, 50); // Interval waktu antar karakter (sesuaikan sesuai kebutuhan)
        };
        
        
        
        
    
      setTimeout(function () {

          myDiv.style.display = 'block';
          myDiv.style.animation = 'fadeIn 2s ease-in forwards';
          setTimeout(function () {
              typeText();
          }, 1000); // Waktu tunggu sebelum mulai typing (sesuaikan sesuai kebutuhan)
      }, 5000);

        // setTimeout(function () {
        //   var transparentDiv = document.getElementById('transparent-div');
        //   transparentDiv.style.display = 'block';
          
        // }, 6000);
      };

    });
  };
// fungsi typing paragraf



alertMusic();
