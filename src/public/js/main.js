let hamb = document.querySelector('.hamb');
let close = document.querySelector('.close');
let menu = document.querySelector('#menu');
let icon = document.querySelector('.icon');

let first = document.getElementById('first');
let firstt = document.getElementById('firstt');
let aloqa = document.getElementById('aloqa');
let registration = document.getElementById('registration');
let lesson = document.getElementById('lesson');
let about = document.getElementById('about');
let news = document.getElementById('news');


hamb.onclick = ()=>{
    menu.classList.add('active');
    hamb.classList.add('hide');
    icon.classList.add('move');
    
    first.classList.add('stop-scrolling');
    firstt.classList.add('stop-scrolling');
    aloqa.classList.add('stop-scrolling');
    about.classList.add('stop-scrolling');
    registration.classList.add('stop-scrolling');
    lesson.classList.add('stop-scrolling');
    news.classList.add('stop-scrolling');
}

   


close.onclick = ()=>{
    menu.classList.remove('active');
    hamb.classList.remove('hide');
    icon.classList.remove('move');

    first.classList.remove('stop-scrolling');
    firstt.classList.remove('stop-scrolling');
    aloqa.classList.remove('stop-scrolling');
    about.classList.remove('stop-scrolling');
    registration.classList.remove('stop-scrolling');
    lesson.classList.remove('stop-scrolling');
    news.classList.remove('stop-scrolling');
  
  
}

$('.slider').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

//AOS slider

  AOS.init();


  //owl-carousel
  
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    infinite:true,
    responsiveClass:true,
    dots: true,
    autoplay: true,
    speed: 200,
    responsive:{
        0:{
            items:1,
            nav:true,
            dots: true,
        },
        600:{
            items:2,
            dots: true,
            nav:true
        },
        1000:{
            items:3,
            nav:true,
            dots: true,
            loop:false
        }
    }
})



//test js

// var  next = document.getElementById('next');
// var  ortga = document.getElementById('ortga');
// var  results = document.getElementById('results');
// var  right = document.getElementById('right');
// var  quizTime = document.getElementById('quizTime');
// var  quizNumber = document.getElementById('quizNumber');

// var count = 0;
// var scoreCount = 0;
// var duration = 0;

// var quizPart = document.querySelectorAll('.quizPart');
// var quizAnswer = document.querySelectorAll('.quizPart .answers input');


// next.addEventListener('click', function(){
//   step();
// })

// quizAnswer.forEach(function(quizAnswerRow){
//   quizAnswerRow.addEventListener('click', function(){
//     setTimeout(function(){
//       step()
//     }, 700)

//     var valid = this.getAttribute('valid');
//     if(valid == 'valid'){
//       scoreCount += 20;
//       results.innerHTML = scoreCount;
//       right.innerHTML = scoreCount;
//     }else{
//       scoreCount;
//       results.innerHTML = scoreCount;
//       right.innerHTML = scoreCount;
//     }
//   })
// })


// function step(){
//   count += 1;
//   for(var i = 0; i < quizPart.length; i++){
//     quizPart[i].className= 'quizPart';
//   }
//   quizPart[count].className= 'quizPart active';
//   if(count == 4){
//       next.style.display = 'none';
//   }
// }











