
$(document).ready(function(){
    $('.client-container').slick({
      autoplay: true,         
      autoplaySpeed: 1000,   
      dots: false,         
      arrows: true,          
      infinite: true,      
      speed: 500,           
      slidesToShow: 5,       
      slidesToScroll: 1     
    });
  });

  
  $(document).ready(function(){
    $('.testimonial-slider-container').slick({
      autoplay: true,         
      autoplaySpeed: 1000,   
      dots: false,         
      arrows: true,          
      infinite: true,      
      speed: 500,           
      slidesToShow: 2,       
      slidesToScroll: 1     
    });
  });


  // Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  

  lenis.on('scroll', (e) => {
    console.log(e);
  });