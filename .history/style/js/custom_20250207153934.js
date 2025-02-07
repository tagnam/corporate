
$(document).ready(function(){
    $('.client-container').slick({
      autoplay: true,         
      autoplaySpeed: 1000,   
      dots: false,         
      arrows: true,          
      infinite: true,      
      speed: 500,           
      slidesToShow: 5,       
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024, // For screens 1024px and below
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
          }
        },
        {
          breakpoint: 768, // For screens 768px and below
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: false // Hide arrows on smaller screens
          }
        },
        {
          breakpoint: 480, // For screens 480px and below
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]   
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
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024, // For screens 1024px and below
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            arrows: true
          }
        },
        {
          breakpoint: 768, // For screens 768px and below
          settings: {
            slidesToShow: ,
            slidesToScroll: 1,
            arrows: false // Hide arrows on smaller screens
          }
        },
        {
          breakpoint: 480, // For screens 480px and below
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false
          }
        }
      ]     
    });
  });


  // Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
  });
  

  lenis.on('scroll', (e) => {
    console.log(e);
  });