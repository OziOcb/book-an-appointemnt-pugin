$(document).ready(function() {
	// tab wizard
	$('a[data-toggle="tab"]').on("show.bs.tab", function(e) {
		var $target = $(e.relatedTarget);
		if ($target.parent().hasClass("disabled")) {
			return false;
		}
	});

	$(".next-step").click(function(e) {
		var $active = $(".nav-tabs .nav-link.active");
		$active
			.parent()
			.next()
			.find(".nav-link")
			.removeClass("disabled");
		nextTab($active);
	});
	$(".prev-step").click(function(e) {
		var $active = $(".nav-tabs li>a.active");
		prevTab($active);
	});
});

function nextTab(elem) {
	$(elem)
		.parent()
		.next()
		.find('a[data-toggle="tab"]')
		.click();
}
function prevTab(elem) {
	$(elem)
		.parent()
		.prev()
		.find('a[data-toggle="tab"]')
		.click();
}
