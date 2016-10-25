// This is where it all goes :)
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $("section.top-featured .logo-cont img").css('opacity', '0');
        $(".natutea-navbar-custom .navbar-brand img").css('opacity', '1');
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $("section.top-featured .logo-cont img").css('opacity', '1');
        if($(window).width() > 767){
	        $(".natutea-navbar-custom .navbar-brand img").css('opacity', '0');
        }
    }
}

function setTopFeaturedHeight(){
	var featBgImageHeight= $('.fundo-top-feature').height();
	var windowWidth = $(window).width();
	var passionFruitTopMargin = 0;
	
	if($(window).width() > 767){
		$('.top-featured').css('height', featBgImageHeight + 'px');
		
		$('.passionfruit').css({
		'margin-top': '-' + (featBgImageHeight / 5) + 'px',
		'padding-top' : (featBgImageHeight / 4) + 'px'
		});
	
		$('.acai, .lychee, .tangerine, .lime, .cranberry').css({
		 								'margin-top': '-' + (featBgImageHeight / 5.5) + 'px',
		 								'padding-top': (featBgImageHeight / 3.5) +'px'
		});
		$('.contact').css({
											'margin-top': '-' + (featBgImageHeight / 11) + 'px',
											'padding-top': (featBgImageHeight / 4) + 'px'
		});
		
	}else if($(window).width() < 768){
		var sectionsTopMargin = (windowWidth * 11) / 91;
		$('.passionfruit').css({
			'margin-top': '-' + (sectionsTopMargin + 20) + 'px',
			'padding-top' : (sectionsTopMargin + 20) + 'px'
		});
		
		$('.acai, .lychee, .tangerine, .lime, .cranberry').css({
		 								'margin-top': '-' + sectionsTopMargin + 'px',
		 								'padding-top': (sectionsTopMargin + 60) +'px'
		});
		$('.contact').css({
											'margin-top': '-' + sectionsTopMargin + 'px',
											'padding-top': (sectionsTopMargin + 60) + 'px'
		});
	}									
}

function parallaxOnVariousObjects(){
	var windowWidth = $(window).width();
	var garrafaMaracujaFrutas = $(".img-maracuja-fruta");
	var garrafaMaracujaVirada = $(".maracuja-virada");
	var garrafaMaracujaDireito = $('.maracuja-direito');
	var acaiFrutas = $('.acai-frutas');
	var garrafaAcai = $('.garrafa-acai');
	var garrafaLichia = $('.garrafa-lychee');
	var lichiaFrutas = $('.lichia-frutas');
	var tangerinaFruta = $('.tangerina-fruta');
	var garrafaTangSombra = $('.garrafa-tangerina-sombra');
	var garrafaTangerinaFolhas = $('.garrafa-tangerina-folhas');
	var garrafaLimaoInvert = $('.garrafa-limao-invertida');
	var garrafaLimaoDir = $('.garrafa-limao-direita');
	var limaoFrutas = $('.limao-frutas');
	var cranberryFrutas = $('.cranberries-frutas');
	var garrafaCranbSombra = $('.garrafa-cranb-sombra');
	var garrafaCranbReflexo = $('.garrafa-cranb-reflexo');
	garrafaMaracujaFrutas.offset = 107;
	
	if(windowWidth > 1399){  //seção Maracujá
			garrafaMaracujaFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 40) + '%) skewY(6deg)');
			garrafaMaracujaVirada.css('transform', 'translateY(-' + (window.pageYOffset / 10) + '%) skewY(6deg)');
			garrafaMaracujaDireito.css('transform', 'translateY(' + (window.pageYOffset / 40) + '%) skewY(6deg)');
			acaiFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 30) + '%) skewY(-6deg)');
			garrafaAcai.css('transform', 'translateY(-' + (window.pageYOffset / 20) + '%) skewY(-6deg)');
			garrafaLichia.css('transform', 'translateY(-' + (window.pageYOffset / 20) + '%) skewY(6deg) scale(0.75) rotateZ(12deg)');
			lichiaFrutas.css('transform', 'translateY(' + (window.pageYOffset / 30) + '%) skewY(6deg)');
			tangerinaFruta.css('transform', 'translateY(-' + (window.pageYOffset / 30) + '%) skewY(-6deg)');
			garrafaTangSombra.css('transform', 'translateY(' + (window.pageYOffset / 10) + '%) skewY(-6deg)');
			garrafaTangerinaFolhas.css('transform', 'translateY(-' + (window.pageYOffset / 10) + '%) skewY(-6deg)');
			garrafaLimaoInvert.css('transform', 'translateY(' + (window.pageYOffset / 20) + '%) skewY(6deg)');
			garrafaLimaoDir.css('transform', 'translateY(-' + (window.pageYOffset / 20) + '%) skewY(6deg) scale(0.82)');
			limaoFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 33) + '%) skewY(6deg)');
			cranberryFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 33) + '%) skewY(-6deg)');
			garrafaCranbSombra.css('transform', 'translateY(' + (window.pageYOffset / 7) + '%) skewY(-6deg)');
			garrafaCranbReflexo.css('transform', 'translateY(-' + (window.pageYOffset / 25) + '%) skewY(-6deg) rotateZ(-8deg) scale(0.62)');
	}else if(windowWidth < 1400 && windowWidth > 991){
			garrafaMaracujaFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 40) + '%) skewY(6deg)');
			garrafaMaracujaVirada.css('transform', 'translateY(-' + (window.pageYOffset / 5) + '%) skewY(6deg)');//Diferente *****
			garrafaMaracujaDireito.css('transform', 'translateY(' + (window.pageYOffset / 40) + '%) skewY(6deg)');
			acaiFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 30) + '%) skewY(-6deg)');
			garrafaAcai.css('transform', 'translateY(-' + (window.pageYOffset / 15) + '%) skewY(-6deg)');
			garrafaLichia.css('transform', 'translateY(-' + (window.pageYOffset / 20) + '%) skewY(6deg) scale(0.75) rotateZ(12deg)');
			lichiaFrutas.css('transform', 'translateY(' + (window.pageYOffset / 30) + '%) skewY(6deg)');
			tangerinaFruta.css('transform', 'translateY(-' + (window.pageYOffset / 30) + '%) skewY(-6deg)');
			garrafaTangSombra.css('transform', 'translateY(' + (window.pageYOffset / 10) + '%) skewY(-6deg)');
			garrafaTangerinaFolhas.css('transform', 'translateY(-' + (window.pageYOffset / 10) + '%) skewY(-6deg)');
			garrafaLimaoInvert.css('transform', 'translateY(' + (window.pageYOffset / 20) + '%) skewY(6deg)');
			garrafaLimaoDir.css('transform', 'translateY(-' + (window.pageYOffset / 20) + '%) skewY(6deg) scale(0.82)');
			limaoFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 33) + '%) skewY(6deg)');
			cranberryFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 33) + '%) skewY(-6deg)');
			garrafaCranbSombra.css('transform', 'translateY(' + (window.pageYOffset / 7) + '%) skewY(-6deg)');
			garrafaCranbReflexo.css('transform', 'translateY(-' + (window.pageYOffset / 25) + '%) skewY(-6deg) rotateZ(-8deg) scale(0.62)');
	}else if(windowWidth < 992 && windowWidth > 767){
			garrafaMaracujaFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 20) + '%) skewY(6deg)');//Diferente *****
			garrafaMaracujaVirada.css('transform', 'translateY(-' + (window.pageYOffset / 5) + '%) skewY(6deg)');
			garrafaMaracujaDireito.css('transform', 'translateY(' + (window.pageYOffset / 10) + '%) skewY(6deg)');//Diferente *****
			acaiFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 30) + '%) skewY(-6deg)');
			garrafaAcai.css('transform', 'translateY(-' + (window.pageYOffset / 15) + '%) skewY(-6deg)');
			garrafaLichia.css('transform', 'translateY(-' + (window.pageYOffset / 7) + '%) skewY(6deg) scale(0.75) rotateZ(12deg)');//Diferente *****
			lichiaFrutas.css('transform', 'translateY(' + (window.pageYOffset / 30) + '%) skewY(6deg)');
			tangerinaFruta.css('transform', 'translateY(-' + (window.pageYOffset / 30) + '%) skewY(-6deg)');
			garrafaTangSombra.css('transform', 'translateY(' + (window.pageYOffset / 7) + '%) skewY(-6deg)');//Diferente *****
			garrafaTangerinaFolhas.css('transform', 'translateY(-' + (window.pageYOffset / 4) + '%) skewY(-6deg)');//Diferente *****
			garrafaLimaoInvert.css('transform', 'translateY(' + (window.pageYOffset / 7) + '%) skewY(6deg)');//Diferente *****
			garrafaLimaoDir.css('transform', 'translateY(-' + (window.pageYOffset / 9) + '%) skewY(6deg) scale(0.82)');//Diferente *****
			limaoFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 33) + '%) skewY(6deg)');
			cranberryFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 33) + '%) skewY(-6deg)');
			garrafaCranbSombra.css('transform', 'translateY(' + (window.pageYOffset / 7) + '%) skewY(-6deg)');
			garrafaCranbReflexo.css('transform', 'translateY(-' + (window.pageYOffset / 16) + '%) skewY(-6deg) rotateZ(-8deg) scale(0.62)');
	}else if(windowWidth < 768){
			garrafaMaracujaFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 20) + '%) skewY(6deg)');
			garrafaMaracujaVirada.css('transform', 'translateY(-' + (window.pageYOffset / 5) + '%) skewY(6deg)');
			garrafaMaracujaDireito.css('transform', 'translateY(' + (window.pageYOffset / 10) + '%) skewY(6deg)');
			acaiFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 30) + '%) skewY(-6deg)');
			garrafaAcai.css('transform', 'translateY(-' + (window.pageYOffset / 15) + '%) skewY(-6deg)');
			garrafaLichia.css('transform', 'translateY(-' + (window.pageYOffset / 7) + '%) skewY(6deg) scale(0.75) rotateZ(12deg)');
			lichiaFrutas.css('transform', 'translateY(' + (window.pageYOffset / 30) + '%) skewY(6deg)');
			tangerinaFruta.css('transform', 'translateY(-' + (window.pageYOffset / 30) + '%) skewY(-6deg)');
			garrafaTangSombra.css('transform', 'translateY(' + (window.pageYOffset / 7) + '%) skewY(-6deg)');
			garrafaTangerinaFolhas.css('transform', 'translateY(-' + (window.pageYOffset / 4) + '%) skewY(-6deg)');
			garrafaLimaoInvert.css('transform', 'translateY(' + (window.pageYOffset / 7) + '%) skewY(6deg)');
			garrafaLimaoDir.css('transform', 'translateY(-' + (window.pageYOffset / 9) + '%) skewY(6deg) scale(0.82)');
			limaoFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 33) + '%) skewY(6deg)');
			cranberryFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 33) + '%) skewY(-6deg)');
			garrafaCranbSombra.css('transform', 'translateY(' + (window.pageYOffset / 7) + '%) skewY(-6deg)');
			garrafaCranbReflexo.css('transform', 'translateY(-' + (window.pageYOffset / 16) + '%) skewY(-6deg) rotateZ(-8deg) scale(0.62)');
	}
		
	console.log(window.pageYOffset);
}

$(window).scroll(collapseNavbar);
$(window).scroll(parallaxOnVariousObjects);
$(document).ready(collapseNavbar);
$(function() {
	setTopFeaturedHeight();
	$('.passionf-link, .acai-link, .lychee-link, .tanger-link, .lime-link, .cranb-link, .home-link, .about-link, .where-link, .contact-link').bind('click', function(e){
			 var $anchor = $(this);
			 $('body').scrollTo($anchor.attr('href'), 1000);
			 e.preventDefault();
	});
});

$(document).ready(function(){
	$('.where-slider-cont').slick({
		slidesToShow: 3
	});
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