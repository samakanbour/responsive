$(document).ready(function () {
	$("#sidebar-toggle").click(function () {
		return $("#js-mobile-navigation td").each(function (e) {
			var t = this;
			return setTimeout(function () {
				return $(t).addClass("active")
			}, e * 50)
		})
	}), $("td a").click(function () {
		return $("#js-mobile-navigation td").each(function (e) {
			var t = this;
			return setTimeout(function () {
				return $(t).removeClass("active")
			}, e * 50)
		})
	}),	$("aside .nav li").hover(function (){
		var t = $(this).children()[1];
		var length = 0;
		$(t).children().each(function (i, e){
			length += $(e).height();
		});
		$(t).css("transition", ".5s ease");
		$(t).css("height", length + $(t).children().length * 20);
	}, function(){
		var t = $(this).children()[1];
		$(t).css("transition", "0.2s ease");
		$(t).css("height", 0);
	});
});