// This is where it all goes :)
function collapseNavbar() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
        $("section.top-featured .logo-cont img").css('opacity', '0');
        $(".natutea-navbar-custom .navbar-brand img").css('opacity', '1');
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
        $("section.top-featured .logo-cont img").css('opacity', '1');
        $(".natutea-navbar-custom .navbar-brand img").css('opacity', '0');
    }
}

function setTopFeaturedHeight(){
	var featBgImageHeight= $('.fundo-top-feature').height();
	var windowWidth = $(window).width();
	var passionFruitTopMargin = 0;
	
	$('.top-featured').css('height', featBgImageHeight + 'px');
	
	/*if( windowWidth > 1200 && windowWidth < 1390){
		windowWidth = $(window).width();
		passionFruitTopMargin = (windowWidth * 6.04) / 53;
		$('.passionfruit').css({
			'margin-top': '8.04%',
			//'margin-top': '-' + passionFruitTopMargin + 'px',
			'padding-top' : (featBgImageHeight / 4) + 'px'
		});
		console.log('Entre 1200 y 1390 ');
	}else{*/
	$('.passionfruit').css({
		'margin-top': '-' + (featBgImageHeight / 5) + 'px',
		'padding-top' : (featBgImageHeight / 4) + 'px'
	});
	//}
	
	$('.acai, .lychee, .tangerine, .lime, .cranberry').css({
		 								'margin-top': '-' + (featBgImageHeight / 5.5) + 'px',
		 								'padding-top': (featBgImageHeight / 3.5) +'px'
	});
	$('.contact').css({
											'margin-top': '-' + (featBgImageHeight / 11) + 'px',
		 								'padding-top': (featBgImageHeight / 4) +'px'
	});								
}
function parallaxOnVariousObjects(){
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
	
	//if($(window).width() > 1399){  //seção Maracujá
			garrafaMaracujaFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 40) + '%) skewY(6deg)');
			garrafaMaracujaVirada.css('transform', 'translateY(-' + (window.pageYOffset / 10) + '%) skewY(6deg)');
			garrafaMaracujaDireito.css('transform', 'translateY(' + (window.pageYOffset / 40) + '%) skewY(6deg)');
			acaiFrutas.css('transform', 'translateY(-' + (window.pageYOffset / 30) + '%) skewY(-6deg)');
			garrafaAcai.css('transform', 'translateY(-' + (window.pageYOffset / 20) + '%) skewY(-6deg)');
			garrafaLichia.css('transform', 'translateY(-' + (window.pageYOffset / 20) + '%) skewY(6deg) scale(0.75)');
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
	//}
		
	console.log(window.pageYOffset);
}

$(window).scroll(collapseNavbar);
$(window).scroll(parallaxOnVariousObjects);
$(document).ready(collapseNavbar);
$(function() {
	setTopFeaturedHeight();
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
