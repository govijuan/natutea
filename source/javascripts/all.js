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
	
	/*
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
			garrafaTangerinaFolhas.css('transform', 'translateY(-' + (window.pageYOffset / 8) + '%) skewY(-6deg)');//Diferente *****
			garrafaLimaoInvert.css('transform', 'translateY(' + (window.pageYOffset / 8) + '%) skewY(6deg)');//Diferente *****
			garrafaLimaoDir.css('transform', 'translateY(-' + (window.pageYOffset / 12) + '%) skewY(6deg) scale(0.82)');//Diferente *****
			limaoFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 33) + '%) skewY(6deg)');
			cranberryFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 33) + '%) skewY(-6deg)');
			garrafaCranbSombra.css('transform', 'translateY(' + (window.pageYOffset / 10) + '%) skewY(-6deg)');//Diferente *****
			garrafaCranbReflexo.css('transform', 'translateY(-' + (window.pageYOffset / 17) + '%) skewY(-6deg) rotateZ(-8deg) scale(0.62)');//Diferente *****
	}*/
	
	if(windowWidth > 1399){
		garrafaMaracujaFrutas.speedDivider = 40;
		garrafaMaracujaVirada.speedDivider = 10;
		garrafaMaracujaDireito.speedDivider = 40;
		garrafaLichia.speedDivider = 20;
		garrafaTangSombra.speedDivider = 10;
		garrafaTangerinaFolhas.speedDivider = 10;
		garrafaLimaoInvert.speedDivider = 20;
		garrafaLimaoDir.speedDivider = 20;
		garrafaCranbSombra.speedDivider = 7;
		garrafaCranbReflexo.speedDivider = 25;
	}else if(windowWidth < 1400 && windowWidth > 991){
		garrafaMaracujaFrutas.speedDivider = 40;
		garrafaMaracujaVirada.speedDivider = 5;
		garrafaMaracujaDireito.speedDivider = 40;
		garrafaLichia.speedDivider = 20;
		garrafaTangSombra.speedDivider = 10;
		garrafaTangerinaFolhas.speedDivider = 10;
		garrafaLimaoInvert.speedDivider = 20;
		garrafaLimaoDir.speedDivider = 20;
		garrafaCranbSombra.speedDivider = 7;
		garrafaCranbReflexo.speedDivider = 25;
	}else if(windowWidth < 992 && windowWidth > 767){
		garrafaMaracujaFrutas.speedDivider = 20;
		garrafaMaracujaVirada.speedDivider = 5;
		garrafaMaracujaDireito.speedDivider = 10;
		garrafaLichia.speedDivider = 7;
		garrafaTangSombra.speedDivider = 7;
		garrafaTangerinaFolhas.speedDivider = 4;
		garrafaLimaoInvert.speedDivider = 7;
		garrafaLimaoDir.speedDivider = 9;
		garrafaCranbSombra.speedDivider = 7;
		garrafaCranbReflexo.speedDivider = 16;
	}else if(windowWidth < 768){
		garrafaMaracujaFrutas.speedDivider = 20;
		garrafaMaracujaVirada.speedDivider = 5;
		garrafaMaracujaDireito.speedDivider = 10;
		garrafaLichia.speedDivider = 7;
		garrafaTangSombra.speedDivider = 7;
		garrafaTangerinaFolhas.speedDivider = 8;
		garrafaLimaoInvert.speedDivider = 8;
		garrafaLimaoDir.speedDivider = 12;
		garrafaCranbSombra.speedDivider = 10;
		garrafaCranbReflexo.speedDivider = 17;
	}
	garrafaMaracujaFrutas.css('transform', 'translateY(-' + (window.pageYOffset / garrafaMaracujaFrutas.speedDivider ) + '%) skewY(6deg)');//***
	garrafaMaracujaVirada.css('transform', 'translateY(-' + (window.pageYOffset / garrafaMaracujaVirada.speedDivider ) + '%) skewY(6deg)');//***
	garrafaMaracujaDireito.css('transform', 'translateY(' + (window.pageYOffset / garrafaMaracujaDireito.speedDivider) + '%) skewY(6deg)');//***
	acaiFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 30) + '%) skewY(-6deg)');//XXX
	garrafaAcai.css('transform', 'translateY(-' + (window.pageYOffset / 20) + '%) skewY(-6deg)');//xxx
	garrafaLichia.css('transform', 'translateY(-' + (window.pageYOffset / garrafaLichia.speedDivider ) + '%) skewY(6deg) scale(0.75) rotateZ(12deg)');//***
	lichiaFrutas.css('transform', 'translateY(' + (window.pageYOffset / 30) + '%) skewY(6deg)');//xxx
	tangerinaFruta.css('transform', 'translateY(-' + (window.pageYOffset / 30) + '%) skewY(-6deg)');//xxx
	garrafaTangSombra.css('transform', 'translateY(' + (window.pageYOffset / garrafaTangSombra.speedDivider ) + '%) skewY(-6deg)');//***
	garrafaTangerinaFolhas.css('transform', 'translateY(-' + (window.pageYOffset / garrafaTangerinaFolhas.speedDivider) + '%) skewY(-6deg)');//***
	garrafaLimaoInvert.css('transform', 'translateY(' + (window.pageYOffset / garrafaLimaoInvert.speedDivider) + '%) skewY(6deg)');//***
	garrafaLimaoDir.css('transform', 'translateY(-' + (window.pageYOffset / 20) + '%) skewY(6deg) scale(0.82)');//***
	limaoFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 33) + '%) skewY(6deg)');//xxx
	cranberryFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 33) + '%) skewY(-6deg)');//xxx
	garrafaCranbSombra.css('transform', 'translateY(' + (window.pageYOffset / 7) + '%) skewY(-6deg)');//***
	garrafaCranbReflexo.css('transform', 'translateY(-' + (window.pageYOffset / 25) + '%) skewY(-6deg) rotateZ(-8deg) scale(0.62)');//***
	
		
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