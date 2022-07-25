import './vendor';

$(document).ready(function () {
	AOS.init({
		disable: 'mobile',
	});
	$(function () {
		if ($('body').hasClass('inner-page')) {
			$('header').removeAttr("id");
		};
	})

	$(function () {
		if ($(window).width() > 767) {
			// Init ScrollMagic
			var controller = new ScrollMagic.Controller();
			var scene = new ScrollMagic.Scene({triggerElement: '#header', duration: 1500, triggerHook: 'onLeave'})
				.setPin('#header', {pushFollowers: false})
				.addTo(controller);
		}
	});

	$('.catalog').click(function (e) {
		e.preventDefault();
		$('#openmenu').hide();
		$('#menu').hide();
		$('.mobile-menu-close').show();
		$('.mobile-menu-wrap').addClass('open');
		$('.mobile-menu-other').removeClass('open');
	});
	$('.othermenu').click(function (e){
		e.preventDefault();
		$('.mobile-menu-close').hide();
		$('.mobile-menu-other').addClass('open');
		$('.mobile-menu-wrap').removeClass('open');
	});
	$('.close').click(function (e) {
		e.preventDefault();
		$('#openmenu').show();
		$('#menu').show();
		$('.mobile-menu-close').hide();
		$('.mobile-menu-wrap').removeClass('open');
		$('.mobile-menu-other').removeClass('open');
	});

	$('.search').click(function (e) {
		e.preventDefault();
		$('.search-modal').addClass('open');
	});
	$('.close').click(function (e) {
		e.preventDefault();
		$('.search-modal').removeClass('open');
	});

	$(".form-group input,.form-group textarea")
		.focus(e => {
			let $this = $(e.currentTarget);
			let parent = $this.parent();
			let label = parent.children('label');

			parent.addClass('focused');

			if ($this.val() !== '') {
				label.show();
			}
		})
		.blur(e => {
			let $this = $(e.currentTarget);
			let parent = $this.parent();
			let label = parent.children('label');

			if ($this.val() === '') {
				parent.removeClass('focused');
			}
			if ($this.val() !== '') {
				parent.removeClass('focused');
				label.hide();
			}
		})
		.change(e => {
			let $this = $(e.currentTarget);
			let parent = $this.parent();
			let label = parent.children('label');

			if ($this.val() !== '') {
				label.hide();
				parent.removeClass('focused');
			} else {
				label.show();
			}
		});

	$('.img a').click(function () {
		$(this)
			.closest('.visualCaptcha-possibilities')
			.find('a')
			.removeClass('active')
			.eq($(this).index());
		$(this).addClass('active');
	});

	//filter nav//
	$('#nav ul').find('a').click(function (e) {
		e.preventDefault();
		$(this).parent().addClass('open');
		$(this).parent().siblings().removeClass('open');
		$('.open').prev().find('a').addClass('changed');
		$('.open').prev().siblings().find('a').removeClass('changed');
	});

	$('.mobile-menu-wrap .mobile-menu__item').click(function (e) {
		e.preventDefault();
		$(this).toggleClass('open');
		$(this).siblings().removeClass('open');
		$(this).prev('li:after').remove();
		$('.open').prev().addClass('changed');
		$('.open').prev().siblings().removeClass('changed');
	});

	$('[data-fancybox="product"]').fancybox({
		smallBtn: true,
		toolbar: false,
		arrows: false,
		infobar: false,
	});

	$(window).scroll(function (event) {
		let $window = $(window);

		if ($window.width() > 960) {
			let topPos = $(this).scrollTop();
			// menuscroll
			let menuscroll = $(".scroll-header");

			if (topPos > 800) {
				$(menuscroll).addClass("fixed");
			} else {
				$(menuscroll).removeClass("fixed");
			}
		}
		if ($(window).width() <= 960) {
			let e = $("table");

			if (e.length === 1) {
				$('.swipe-table').length === 0 &&
				$("body").append(
					'<div class="swipe-table"><span class="swipe_table"></span></div>'
				);

				let a = e.offset();
				let t = e.innerHeight();
				let i = a.top + t;
				let s = $(window).scrollTop() + $(window).height();

				let l = a.top + (t - 100) / 2;

				i < s &&
				($(".swipe-table").css({
					top: l
				}),
					$('.swipe-table').fadeIn('slow'),
					setTimeout(() => {
						$('.swipe-table').fadeOut('slow');
					}, 2500));
			}
		}
	});
})
