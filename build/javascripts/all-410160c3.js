// This is where it all goes :)
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}

function setTopFeaturedHeight(){
	var featBgImageHeight= $('.fundo-top-feature').height();
	$('.top-featured').css('height', featBgImageHeight + 'px');
	$('.passionfruit').css({'margin-top': '-' + (featBgImageHeight / 5) + 'px',
													'padding-top' : (featBgImageHeight / 4) + 'px'
													});
	$('.acai, .lychee, .tangerine, .lime, .cranberry').css({
		 								'margin-top': '-' + (featBgImageHeight / 5.5) + 'px',
		 								'padding-top': (featBgImageHeight / 3.5) +'px'
	});
	$('.contact').css({
											'margin-top': '-' + (featBgImageHeight / 11) + 'px',
		 								'padding-top': (featBgImageHeight / 4) +'px'
	});								
}


$(window).scroll(collapseNavbar);
$(document).ready(collapseNavbar);
$(function() {
	setTopFeaturedHeight();
});

$(document).ready(function(){
	var oldWidth = $(this).width();
		 var id ;
		 //a executar no re-dimensionamento da janela de visualização
		 $(window).resize(function(){
			 clearTimeout(id);
			 
			 id = setTimeout(function() {
		    														var width = $(this).width();
																		if (width != oldWidth) {
																    	oldWidth = width;
																    	setTopFeaturedHeight();
																    }
																	}, 500
											);
		 });

});