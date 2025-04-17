
$(function(){

    setTimeout( function(){

        $('.loader').fadeOut(1000,function(){
            $('.prev-icon').animate({width: '0%'} ,1000)
            $('.next-icon').animate({width: '0%'} ,1000 , function(){
                $('.loading').remove()
    
            })
        
    
        });
    




    } , 200)

   
    $('.text-one').on('click',function(){

        $('.text-two').animate({width : 'toggle'} , 1000)



    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
    



 


})




 const home = document.querySelector('header')
 const nav = document.querySelector(".navbar")
 const info = document.getElementById('info')


 window.addEventListener('scroll', function(){
    if (window.scrollY >= home.offsetTop){
        nav.classList.add('position-fixed')

        


    }
    else {

        nav.classList.remove('position-fixed')



    }




 })








let num1 = 700;

     let idInterval1 = setInterval(function(){ 

    document.getElementById('text-One').innerHTML = num1;
    if(num1 == 3468){
        clearInterval(idInterval1)

    }
    num1++;




} ,50)



let num2 = 70;

     let idInterval2 = setInterval(function(){ 

    document.getElementById('text-Two').innerHTML = num2;
    if(num2 == 557){
        clearInterval(idInterval2)

    }
    num2++;




} ,50)



let num3 = 285;

     let idInterval3 = setInterval(function(){ 

    document.getElementById('text-Three').innerHTML = num3;
    if(num3 == 4379){
        clearInterval(idInterval3)

    }
    num3++;




} ,50)


let num4 = 5;

     let idInterval4 = setInterval(function(){ 

    document.getElementById('text-Four').innerHTML = num4;
    if(num4 == 32){
        clearInterval(idInterval4)

    }
    num4++;




} ,500)













