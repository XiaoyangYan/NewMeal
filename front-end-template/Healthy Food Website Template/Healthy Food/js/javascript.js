		$(".input-search").on({
			mouseenter: function () {
				$('.input-search button').attr('type','submit');
				console.log('atas');
			},
			mouseleave: function () {
				// $('.input-search button').removeAttr('type');
				$('.input-search button').attr('type','button');
				console.log('lepas');
			}
		});

		$(window).bind('scroll', function() {
			var navHeight = $('.navigasi-healty').height() - 10;
			if ($(window).scrollTop() > navHeight) {
				$('.navigasi-healty').addClass('fixed');
			}
			else {
				$('.navigasi-healty').removeClass('fixed');
			}
		});

		function openNav() {
			document.getElementById("mySidenav").style.width = "250px";
			$('.bg-sidebar-all').css({
				'opacity':1,
				'display':'block'
			});
		}

		function closeNav() {
			document.getElementById("mySidenav").style.width = "0";
			$('.bg-sidebar-all').css({
				'opacity':0,
				'display':'none'
			});
		}

		$('.bg-sidebar-all').click(function () {
			document.getElementById("mySidenav").style.width = "0";
			$('.bg-sidebar-all').css({
				'opacity':0,
				'display':'none'
			});
		});