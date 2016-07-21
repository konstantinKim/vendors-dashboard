$(document).ready(function()
{
	
	
	
	
	
	
	
	
	
	/* ====================== */
	/* == header functions == */
	/* ====================== */
	
	/* == top most header == */
	$('.alert-messages').hover(
		
		function() { $('img.icon-messages').attr('src', '/assets/_images/global/icon-messages-blue.gif'); },
		function() { $('img.icon-messages').attr('src', '/assets/_images/global/icon-messages-gray.gif'); }
	);
	$('.alert-alerts').hover(
		
		function() { $('img.icon-alerts').attr('src', '/assets/_images/global/icon-alerts-blue.gif'); },
		function() { $('img.icon-alerts').attr('src', '/assets/_images/global/icon-alerts-gray.gif'); }
	);
	$('.alert-tasks').hover(
		
		function() { $('img.icon-tasks').attr('src', '/assets/_images/global/icon-tasks-blue.gif'); },
		function() { $('img.icon-tasks').attr('src', '/assets/_images/global/icon-tasks-gray.gif'); }
	);
	
	
	
	
	
	
	
	
	
	/* ========================== */
	/* == global nav functions == */
	/* ========================== */
	
	/* == global nav == */
	$('.nav-home').hover(
		function() { $('img.global-nav-home').stop(true, true).hide(); $('img.global-nav-home-hover').stop(true, true).animate( { marginTop: "-12px" }, 170 ); },
		function() { $('img.global-nav-home-hover').stop(true, true).css( { marginTop: "50px" } ); $('img.global-nav-home').stop(true, true).show(); }
	);
	$('.nav-statistics').hover(
		function() { $('img.global-nav-statistics').stop(true, true).hide(); $('img.global-nav-statistics-hover').stop(true, true).animate( { marginTop: "-12px" }, 170 ); },
		function() { $('img.global-nav-statistics-hover').stop(true, true).css( { marginTop: "50px" } ); $('img.global-nav-statistics').stop(true, true).show(); }
	);
	$('.nav-settings').hover(
		function() { $('img.global-nav-settings').stop(true, true).hide(); $('img.global-nav-settings-hover').stop(true, true).animate( { marginTop: "-12px" }, 170 ); },
		function() { $('img.global-nav-settings-hover').stop(true, true).css( { marginTop: "50px" } ); $('img.global-nav-settings').stop(true, true).show(); }
	);
	$('.nav-recycler-search').hover(
		function() { $('img.global-nav-recycler-search').stop(true, true).hide(); $('img.global-nav-recycler-search-hover').stop(true, true).animate( { marginTop: "-12px" }, 170 ); },
		function() { $('img.global-nav-recycler-search-hover').stop(true, true).css( { marginTop: "50px" } ); $('img.global-nav-recycler-search').stop(true, true).show(); }
	);
	$('.nav-suggestions').hover(
		function() { $('img.global-nav-suggestions').stop(true, true).hide(); $('img.global-nav-suggestions-hover').stop(true, true).animate( { marginTop: "-12px" }, 170 ); },
		function() { $('img.global-nav-suggestions-hover').stop(true, true).css( { marginTop: "50px" } ); $('img.global-nav-suggestions').stop(true, true).show(); }
	);
	$('.nav-report-bug').hover(
		function() { $('img.global-nav-report-bug').stop(true, true).hide(); $('img.global-nav-report-bug-hover').stop(true, true).animate( { marginTop: "-12px" }, 170 ); },
		function() { $('img.global-nav-report-bug-hover').stop(true, true).css( { marginTop: "50px" } ); $('img.global-nav-report-bug').stop(true, true).show(); }
	);
	$('.nav-live-help').hover(
		function() { $('img.global-nav-live-help').stop(true, true).hide(); $('img.global-nav-live-help-hover').stop(true, true).animate( { marginTop: "-12px" }, 170 ); },
		function() { $('img.global-nav-live-help-hover').stop(true, true).css( { marginTop: "50px" } ); $('img.global-nav-live-help').stop(true, true).show(); }
	);
	$('.nav-log-out').hover(
		function() { $('img.global-nav-log-out').stop(true, true).hide(); $('img.global-nav-log-out-hover').stop(true, true).animate( { marginTop: "-12px" }, 170 ); },
		function() { $('img.global-nav-log-out-hover').stop(true, true).css( { marginTop: "50px" } ); $('img.global-nav-log-out').stop(true, true).show(); }
	);
	
	
	
	
	
	
	
	
	
	/* ============================= */
	/* == date/time filter/picker == */
	/* ============================= */
	
	if (top.location != location) { top.location.href = document.location.href ; }
	$(function()
	{
		// date picker on statistic pages
		$('#filter-from').datepicker().on('changeDay', function (e) { $('#filter-from').datepicker('hide'); });
		$('#filter-to').datepicker().on('changeDay', function (e) { $('#filter-to').datepicker('hide'); });
		$('#filter-from2').datepicker().on('changeDay', function (e) { $('#filter-from2').datepicker('hide'); });
		$('#filter-to2').datepicker().on('changeDay', function (e) { $('#filter-to2').datepicker('hide'); });
		
		// date picker on add project
		$('#start-date').datepicker().on('changeDay', function (e) { $('#start-date').datepicker('hide'); });
		$('#end-date').datepicker().on('changeDay', function (e) { $('#end-date').datepicker('hide'); });
	});
	








});