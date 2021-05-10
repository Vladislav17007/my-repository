"use strict"
$('document').
ready(function(){
    $('body').append('<a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjj97j4jPrsAhVJAxAIHULHD3IQFjAAegQIARAD&url=https%3A%2F%2Fwww.anilibria.tv%2F&usg=AOvVaw1sasaQIaJWfChS3HWKNix4">Аниме с лучшей озвучкой и наивысшим качеством, только на АниЛибрия!!! </a>')

    $('footer').remove('');

});


// Открываем меню

var main=function(){// главная функция
$('.icon-main').click(function(){/*здесь выбираем класс isno-menu 
добавляем метод click с функцией, вызывающая при клике*/
    $('.menu').animate({//выбираем класс menu и при методе animate
        left: '0px' //Tеперь при клике меню будет видна , закрытое на 285px
            }, 200); /*скорость передвижения нашего меню в 200мс*/
$('body').animate({//выбираем тег body при методе animate
    left:'285px'//здесь у нас 285px, чтобы всё сдвигалось вправо при открытии меню
        },200);//тоже скорость движения меню в мс
});

//Закрыли меню (Наконец-то!)

$('.icon-class').click(function(){//выбор класса icon-menu при методе click
    $('.menu').animate({//выбор класс menu при методе animate
        left:'-285px' /*после этого послеклика на крестик меню скроется  в своё исходное состояние*/
            },200);//как всегда скорость движения в мс
$('body').animate({//опять выбираем тег body при методе animate
    left:'0px'//при этом всём страница вернётся на своё прежнее сосотяние, т.е 0px
        },200);//скорость в мс
    });
  }; 

  $(document).ready(main); /*Это отвечает за вызов функции
    при полной загрузки нашей веб-страницы*/