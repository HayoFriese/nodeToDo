// $(document).ready(function(){ $('.carousel.carousel-slider').carousel({fullWidth: true, indicators: true}); });
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
	document.getElementById('preloader').style.display = "none";

    // Carousel
    const carousels = document.querySelectorAll('.carousel');
    const cOptions = {
    	fullWidth: true, 
    	indicators: true
    };
    const carousel = M.Carousel.init(carousels, cOptions);

    // Tabs
    const tabs = document.querySelectorAll('.tabs');
    const tOptions = {
    	duration: 200
    }
    const tab = M.Tabs.init(tabs, tOptions);
    
    // Mobile Side Navigation
    const sideNavs = document.querySelectorAll('.sidenav');
    const snOptions = {
        edge: "left"
    }
    const sideNav = M.Sidenav.init(sideNavs, snOptions);
  });