jQuery(document).ready(function(){
	jQuery(".azc_tsh_toggle_container").hide();
	jQuery(".azc_tsh_toggle").click(function() {
		jQuery(this).toggleClass("azc_tsh_toggle_active").next().slideToggle('fast');
		return false;
	});
});
jQuery(document).ready(function(){
	jQuery(".azc_tsh_toggle_container_open").show();
	jQuery(".azc_tsh_toggle_open_active").click(function() {
		jQuery(this).toggleClass("azc_tsh_toggle_open").next().slideToggle('fast');
		return false;
	});
});
/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */