
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




 const home = document.getElementById('home')
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





const formData = document.getElementById('formData');
const Name = document.getElementById('userName');
const Email = document.getElementById('Email');
const Number = document.getElementById('phone');
const Dep = document.getElementById('department');
const Doctors = document.getElementById('doctors');
const Date = document.getElementById('date');
const Message = document.getElementById('message');


formData.addEventListener("submit", async function(event){

    event.preventDefault();


    const setData ={

        Name :  Name.value,
        Email : Email.value ,
        Number :  Number.value,
        Dep :  Dep.value,
        Doctors : Doctors.value,
        Date : Date.value,
        Message : Message.value,



    };

    try {

        const res = await fetch("https://webhook.site/48cc41d8-579b-40b4-8e10-ae2bd7a1cf00", {
            method :  "POST",

            headers : {
             "Content-Type"  : "application/josn"

            },

            body : JSON.stringify(setData)      
        });

        const data = await res.json();

        if(res.ok){
            alert(" تم التسجيل بنجاح")
             console.log(data);
             


        }

         else {
            alert("حدث خطا"  + data.Message)

         }


    }

    catch(error){
        console.error( ' خطا في الاتصال ',  error )
        alert('فشل الاتصال')

            
    }




})


