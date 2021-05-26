"use strict"

const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numberOfSlides = slides.length;
var slideNumber = 0;

//Кнопка назад на слайдере
nextBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > (numberOfSlides - 1)) {
        slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//Кнопка вперед на слайдере
prevBtn.addEventListener("click", () => {
    slides.forEach((slide) => {
        slide.classList.remove("active");
    });
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    });

    slideNumber--;

    if (slideNumber < 0) {
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add("active");
    slideIcons[slideNumber].classList.add("active");
});

//Функция autoplay
var playSlider;

var repeater = () => {
        playSlider = setInterval(function() {
            slides.forEach((slide) => {
                slide.classList.remove("active");
            });
            slideIcons.forEach((slideIcon) => {
                slideIcon.classList.remove("active");
            });

            slideNumber++;

            if (slideNumber > (numberOfSlides - 1)) {
                slideNumber = 0;
            }

            slides[slideNumber].classList.add("active");
            slideIcons[slideNumber].classList.add("active");
        }, 5000);
    }
    // repeater();

// //остановка autoplay когда курсор на картинке слайдера
// slider.addEventListener("mouseover", () => {
//     clearInterval(playSlider);
// });

// //запуск autoplay когда курсор покидает картинку слайдера
// slider.addEventListener("mouseout", () => {
//     repeater();
// });

// function setCursorPosition(pos, e) {
//     e.focus();
//     if (e.setSelectionRange) e.setSelectionRange(pos, pos);
//     else if (e.createTextRange) {
//         var range = e.createTextRange();
//         range.collapse(true);
//         range.moveEnd("character", pos);
//         range.moveStart("character", pos);
//         range.select()
//     }
// }
// // Маска для поля телефон
// function mask(e) {
//     var matrix = this.placeholder,
//         i = 0,
//         def = matrix.replace(/\D/g, ""),
//         val = this.value.replace(/\D/g, "");
//     def.length >= val.length && (val = def);
//     matrix = matrix.replace(/[_\d]/g, function(a) {
//         return val.charAt(i++) || "_"
//     });
//     this.value = matrix;
//     i = matrix.lastIndexOf(val.substr(-1));
//     i < matrix.length && matrix != this.placeholder ? i++ : i = matrix.indexOf("_");
//     setCursorPosition(i, this)
// }
// window.addEventListener("DOMContentLoaded", function() {
//     var input = document.querySelector("#formTel");
//     input.addEventListener("input", mask, false);
//     input.focus();
//     setCursorPosition(3, input);
// });


// document.addEventListener('DOMContentLoaded', function() {
//     const form = document.getElementById('sliderForm');
//     form.addEventListener('submit', formSend);

//     async function formSend(e) {
//         e.preventDefault();

//         let error = formValidate(form);

//         if (error === 0) {
//             form.classList.add('_sending');
//             let response = await fetch('sendmail.php', {
//                 method: 'POST',
//                 body: formData
//             });
//             if (response.ok) {
//                 let result = await response.json();
//                 alert(result.message);
//                 form.reset();
//                 form.classList.remove('_sending');
//             } else {
//                 alert("Ошибка");
//                 form.classList.remove('_sending');
//             }
//         } else {
//             alert('Заполните обязательные поля');
//         }

//     }


//     function formValidate(form) {
//         let error = 0;
//         let formReq = document.querySelectorAll('._req');

//         for (let index = 0; index < formReq.length; index++) {
//             const input = formReq[index];
//             formRemoveError(input);

//             if (input.classList.contains('_email')) {
//                 if (emailTest(input)) {
//                     formAddError(input);
//                     error++;
//                 }
//             } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
//                 formAddError(input);
//                 error++;
//             } else {
//                 if (input.value === '') {
//                     formAddError(input);
//                     error++;
//                 }
//             }
//         }
//         return error;
//     }

//     function formAddError(input) {
//         input.parentElement.classList.add('_error');
//         input.classList.add('_error');
//     }

//     function formRemoveError(input) {
//         input.parentElement.classList.remove('_error');
//         input.classList.remove('_error');
//     }
//     //Функция теста email
//     function emailTest(input) {
//         return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
//     }



// });