$(function(){

	$('#menu').mmenu({
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		searchfield	: false,
		navbar 		: {
			title		:'القائمة'
		},
		navbars		: [
			{
				position	: 'top',
				content		: [ 'searchfield' ]
			}, {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}
		]
	});
	
	






	$('#bx-home').bxSlider({
		auto:true,
		nextSelector: '#home-prev',
		prevSelector: '#home-next',
		nextText: '<i class="fa fa-angle-left fa-2x"></i>',
		prevText: '<i class="fa fa-angle-right fa-2x"></i>'
		
	});
	
	
	  var OwllastNews = $('#OwllastNews');
	 
	  OwllastNews.owlCarousel({
	      
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1200,1], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,1], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-right fa-2x'></i>","<i class='fa fa-angle-left fa-2x'></i>"]
	  });
	  
	
	
	$(".btns li").click(function () {
		
		var myButton = $(this).attr("id"),
			parent = $(this).parent().attr("id");
		
		$(this).addClass("active").siblings().removeClass("active");
		
		$("."+parent+" .tab").hide();
		
		$("."+parent+" ." + myButton).fadeIn();
		
	});
	

	
	$('.sliderStatistics').bxSlider({
	  	mode: 'vertical',
		auto:true,
		pager: false,
		nextSelector: '#sliderStatistics-prev',
		prevSelector: '#sliderStatistics-next',
		nextText: '<i class="fa fa-angle-up"></i>',
		prevText: '<i class="fa fa-angle-down"></i>'
	});
	
	$('.sliderOurClients').bxSlider({
	  	mode: 'vertical',
		auto:true,
		pager: false,
		nextSelector: '#sliderOurClients-prev',
		prevSelector: '#sliderOurClients-next',
		nextText: '<i class="fa fa-angle-up"></i>',
		prevText: '<i class="fa fa-angle-down"></i>'
	});
	
	
	  
	  var Partners = $('.Partners');
	 
	  Partners.owlCarousel({
	      
	      items : 5, //10 items above 1000px browser width
	      itemsDesktop : [1200,5], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,4], // betweem 900px and 601px
	      itemsTablet: [768,3], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
  	      navigationText:["<i class='fa fa-angle-right fa-2x'></i>","<i class='fa fa-angle-left fa-2x'></i>"]
	  });
	  
	  var Partnerships = $('.Partnerships');
	 
	  Partnerships.owlCarousel({
	      
	      items : 5, //10 items above 1000px browser width
	      itemsDesktop : [1200,5], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,4], // betweem 900px and 601px
	      itemsTablet: [768,3], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 500,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
  	      navigationText:["<i class='fa fa-angle-right fa-2x'></i>","<i class='fa fa-angle-left fa-2x'></i>"]
	  });
	  
	
	  var OwlProjects = $('#OwlProjects');
	 
	  OwlProjects.owlCarousel({
	      
	      items : 1, //10 items above 1000px browser width
	      itemsDesktop : [1200,1], //5 items between 1000px and 901px
	      itemsDesktopSmall : [979,1], // betweem 900px and 601px
	      itemsTablet: [768,1], //2 items between 600 and 0
	      itemsMobile : [479,1],// itemsMobile disabled - inherit from itemsTablet option
	      slideSpeed : 300,
	      paginationSpeed : 400,
	      pagination:false,
	      navigation:true,
	      autoPlay:true,
	      navigationText:["<i class='fa fa-angle-right fa-2x'></i>","<i class='fa fa-angle-left fa-2x'></i>"]
	  });


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});
