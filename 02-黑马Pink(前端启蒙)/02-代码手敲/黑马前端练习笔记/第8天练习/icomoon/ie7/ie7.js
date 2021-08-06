/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-location': '&#xe947;',
		'icon-location2': '&#xe948;',
		'icon-arrow-up-left21': '&#xea39;',
		'icon-arrow-up21': '&#xea3a;',
		'icon-arrow-up-right21': '&#xea3b;',
		'icon-arrow-right21': '&#xea3c;',
		'icon-arrow-down-right21': '&#xea3d;',
		'icon-arrow-down21': '&#xea3e;',
		'icon-arrow-down-left21': '&#xea3f;',
		'icon-arrow-left21': '&#xea40;',
		'icon-circle-up': '&#xea41;',
		'icon-circle-right': '&#xea42;',
		'icon-circle-down': '&#xea43;',
		'icon-circle-left': '&#xea44;',
		'icon-ctrl': '&#xea50;',
		'icon-search': '&#xe986;',
		'icon-cart1': '&#xe93a;',
		'icon-home': '&#xe900;',
		'icon-file-empty': '&#xe924;',
		'icon-cart': '&#xe93b;',
		'icon-location1': '&#xe949;',
		'icon-star-empty': '&#xe9d7;',
		'icon-happy': '&#xe9df;',
		'icon-smile': '&#xe9e1;',
		'icon-cross': '&#xea0f;',
		'icon-checkmark': '&#xea10;',
		'icon-arrow-up-left2': '&#xea45;',
		'icon-arrow-up2': '&#xea46;',
		'icon-arrow-up-right2': '&#xea47;',
		'icon-arrow-right2': '&#xea48;',
		'icon-arrow-down-right2': '&#xea49;',
		'icon-arrow-down2': '&#xea4a;',
		'icon-arrow-down-left2': '&#xea4b;',
		'icon-arrow-left2': '&#xea4c;',
		'icon-circle-up1': '&#xea4d;',
		'icon-circle-right1': '&#xea4e;',
		'icon-circle-down1': '&#xea4f;',
		'icon-circle-left1': '&#xea51;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
