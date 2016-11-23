
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - ++resource++plone.formwidget.recaptcha/recaptcha_ajax.js - */
/* Copyright (C) 2007 reCAPTCHA. Please contact us if you are thinking of modifying & hosting this file. */

var RecaptchaTemplates = {VertHtml:'<table id="recaptcha_table" class="recaptchatable" >\n<tr>\n<td colspan="6" class=\'recaptcha_r1_c1\'></td>\n</tr>\n<tr>\n<td class=\'recaptcha_r2_c1\'></td>\n<td colspan="4" class=\'recaptcha_image_cell\'><div id="recaptcha_image"></div></td>\n<td class=\'recaptcha_r2_c2\'></td>\n</tr>\n<tr>\n<td rowspan="6" class=\'recaptcha_r3_c1\'></td>\n<td colspan="4" class=\'recaptcha_r3_c2\'></td>\n<td rowspan="6" class=\'recaptcha_r3_c3\'></td>\n</tr>\n<tr>\n<td rowspan="3" class=\'recaptcha_r4_c1\' height="49">\n<div class="recaptcha_input_area">\n<label for="recaptcha_response_field" class="recaptcha_input_area_text"><span id="recaptcha_instructions_image" class="recaptcha_only_if_image recaptcha_only_if_no_incorrect_sol"></span><span id="recaptcha_instructions_audio" class="recaptcha_only_if_no_incorrect_sol recaptcha_only_if_audio"></span><span id="recaptcha_instructions_error" class="recaptcha_only_if_incorrect_sol"></span></label><br/>\n<input name="recaptcha_response_field" id="recaptcha_response_field" type="text" />\n</div>\n</td>\n<td rowspan="4" class=\'recaptcha_r4_c2\'></td>\n<td><a id=\'recaptcha_reload_btn\'><img id=\'recaptcha_reload\' width="25" height="17" /></a></td>\n<td rowspan="4" class=\'recaptcha_r4_c4\'></td>\n</tr>\n<tr>\n<td><a id=\'recaptcha_switch_audio_btn\' class="recaptcha_only_if_image"><img id=\'recaptcha_switch_audio\' width="25" height="16" alt="" /></a><a id=\'recaptcha_switch_img_btn\' class="recaptcha_only_if_audio"><img id=\'recaptcha_switch_img\' width="25" height="16" alt=""/></a></td>\n</tr>\n<tr>\n<td><a id=\'recaptcha_whatsthis_btn\'><img id=\'recaptcha_whatsthis\' width="25" height="16" /></a></td>\n</tr>\n<tr>\n<td class=\'recaptcha_r7_c1\'></td>\n<td class=\'recaptcha_r8_c1\'></td>\n</tr>\n</table>\n',VertCss:'.recaptchatable td img {\n/* see http://developer.mozilla.org/en/docs/Images%2C_Tables%2C_and_Mysterious_Gaps */\ndisplay: block;\n}\n.recaptchatable .recaptcha_r1_c1 { background: url(IMGROOT/sprite.png) -0px -63px no-repeat; width: 318px; height: 9px; }\n.recaptchatable .recaptcha_r2_c1 { background: url(IMGROOT/sprite.png) -18px -0px no-repeat; width: 9px; height: 57px; }\n.recaptchatable .recaptcha_r2_c2 { background: url(IMGROOT/sprite.png) -27px -0px no-repeat; width: 9px; height: 57px; }\n.recaptchatable .recaptcha_r3_c1 { background: url(IMGROOT/sprite.png) -0px -0px no-repeat; width: 9px; height: 63px; }\n.recaptchatable .recaptcha_r3_c2 { background: url(IMGROOT/sprite.png) -18px -57px no-repeat; width: 300px; height: 6px; }\n.recaptchatable .recaptcha_r3_c3 { background: url(IMGROOT/sprite.png) -9px -0px no-repeat; width: 9px; height: 63px; }\n.recaptchatable .recaptcha_r4_c1 { background: url(IMGROOT/sprite.png) -43px -0px no-repeat; width: 171px; height: 49px; }\n.recaptchatable .recaptcha_r4_c2 { background: url(IMGROOT/sprite.png) -36px -0px no-repeat; width: 7px; height: 57px; }\n.recaptchatable .recaptcha_r4_c4 { background: url(IMGROOT/sprite.png) -214px -0px no-repeat; width: 97px; height: 57px; }\n.recaptchatable .recaptcha_r7_c1 { background: url(IMGROOT/sprite.png) -43px -49px no-repeat; width: 171px; height: 8px; }\n.recaptchatable .recaptcha_r8_c1 { background: url(IMGROOT/sprite.png) -43px -49px no-repeat; width: 25px; height: 8px; }\n.recaptchatable .recaptcha_image_cell center img { height:57px;}\n.recaptchatable .recaptcha_image_cell center { height:57px;}\n.recaptchatable .recaptcha_image_cell {\nbackground-color:white; height:57px;\n}\n/* some people break their style sheet, we need to clean up after them */\n#recaptcha_area, #recaptcha_table {\nwidth: 318px !important;\n}\n.recaptchatable, #recaptcha_area tr, #recaptcha_area td, #recaptcha_area th {\nmargin:0px !important;\nborder:0px !important;\npadding:0px !important;\nborder-collapse: collapse !important;\nvertical-align: middle !important;\n}\n.recaptchatable * {\nmargin:0px;\npadding:0px;\nborder:0px;\nfont-family:helvetica,sans-serif;\nfont-size:8pt;\ncolor:black;\nposition:static;\ntop:auto;\nleft:auto;\nright:auto;\nbottom:auto;\ntext-align:left !important;\n}\n.recaptchatable #recaptcha_image {\nmargin:auto;\n}\n.recaptchatable img {\nborder:0px !important;\nmargin:0px !important;\npadding:0px !important;\n}\n.recaptchatable a, .recaptchatable a:hover {\n-moz-outline:none;\nborder:0px !important;\npadding:0px !important;\ntext-decoration:none;\ncolor:blue;\nbackground:none !important;\nfont-weight: normal;\n}\n.recaptcha_input_area {\nposition:relative !important;\nwidth:146px !important;\nheight:45px !important;\nmargin-left:20px !important;\nmargin-right:5px !important;\nmargin-top:4px !important;\nbackground:none !important;\n}\n.recaptchatable label.recaptcha_input_area_text {\nmargin:0px !important;  \npadding:0px !important;\nposition:static !important;\ntop:auto !important;\nleft:auto !important;\nright:auto !important;\nbottom:auto !important;\nbackground:none !important;\nheight:auto !important;\nwidth:auto !important;\n}\n.recaptcha_theme_red label.recaptcha_input_area_text,\n.recaptcha_theme_white label.recaptcha_input_area_text {\ncolor:black !important;\n}\n.recaptcha_theme_blackglass label.recaptcha_input_area_text {\ncolor:white !important;\n}\n.recaptchatable #recaptcha_response_field  {\nwidth:145px !important;\nposition:absolute !important;\nbottom:7px !important;\npadding:0px !important;\nmargin:0px !important;\nfont-size:10pt;\n}\n.recaptcha_theme_blackglass #recaptcha_response_field,\n.recaptcha_theme_white #recaptcha_response_field {\nborder: 1px solid gray;\n}\n.recaptcha_theme_red #recaptcha_response_field {\nborder:1px solid #cca940;\n}\n.recaptcha_audio_cant_hear_link {\nfont-size:7pt;\ncolor:black;\n}\n.recaptchatable {\nline-height:1em;\n}\n#recaptcha_instructions_error {\ncolor:red !important;\n}\n',CleanHtml:'<table id="recaptcha_table" class="recaptchatable">\n<tr height="73">\n<td class=\'recaptcha_image_cell\' width="302"><center><div id="recaptcha_image"></div></center></td>\n<td style="padding: 10px 7px 7px 7px;">\n<a id=\'recaptcha_reload_btn\'><img id=\'recaptcha_reload\' width="25" height="18" alt="" /></a>\n<a id=\'recaptcha_switch_audio_btn\' class="recaptcha_only_if_image"><img id=\'recaptcha_switch_audio\' width="25" height="15" alt="" /></a><a id=\'recaptcha_switch_img_btn\' class="recaptcha_only_if_audio"><img id=\'recaptcha_switch_img\' width="25" height="15" alt=""/></a>\n<a id=\'recaptcha_whatsthis_btn\'><img id=\'recaptcha_whatsthis\' width="25" height="16" /></a>\n</td>\n<td style="padding: 18px 7px 18px 7px;">\n<img id=\'recaptcha_logo\' alt="" width="71" height="36" />\n</td>\n</tr>\n<tr>\n<td style="padding-left: 7px;">\n<div class="recaptcha_input_area" style="padding-top: 2px; padding-bottom: 7px;">\n<input style="border: 1px solid #3c3c3c; width: 302px;" name="recaptcha_response_field" id="recaptcha_response_field" type="text" />\n</div>\n</td>\n<td></td>\n<td style="padding: 4px 7px 12px 7px;">\n<img id="recaptcha_tagline" width="71" height="17" />\n</td>\n</tr>\n</table>\n',CleanCss : '.recaptchatable td img {\ndisplay: block;\n}\n.recaptchatable .recaptcha_image_cell center img { height:57px;}\n.recaptchatable .recaptcha_image_cell center { height:57px;}\n.recaptchatable .recaptcha_image_cell {\nbackground-color:white; height:57px; \npadding: 7px !important;\n}\n.recaptchatable, #recaptcha_area tr, #recaptcha_area td, #recaptcha_area th {\nmargin:0px !important;\nborder:0px !important;\nborder-collapse: collapse !important;\nvertical-align: middle !important;\n}\n.recaptchatable * {\nmargin:0px;\npadding:0px;\nborder:0px;\ncolor:black;\nposition:static;\ntop:auto;\nleft:auto;\nright:auto;\nbottom:auto;\ntext-align:left !important;\n}\n.recaptchatable #recaptcha_image {\nmargin:auto;\nborder: 1px solid #dfdfdf !important;\n}\n.recaptchatable a img {\nborder:0px;\n}\n.recaptchatable a, .recaptchatable a:hover {\n-moz-outline:none;\nborder:0px !important;\npadding:0px !important;\ntext-decoration:none;\ncolor:blue;\nbackground:none !important;\nfont-weight: normal;\n}\n.recaptcha_input_area {\nposition:relative !important;\nbackground:none !important;\n}\n.recaptchatable label.recaptcha_input_area_text {\nborder:1px solid #dfdfdf !important;\nmargin:0px !important;  \npadding:0px !important;\nposition:static !important;\ntop:auto !important;\nleft:auto !important;\nright:auto !important;\nbottom:auto !important;\n}\n.recaptcha_theme_red label.recaptcha_input_area_text,\n.recaptcha_theme_white label.recaptcha_input_area_text {\ncolor:black !important;\n}\n.recaptcha_theme_blackglass label.recaptcha_input_area_text {\ncolor:white !important;\n}\n.recaptchatable #recaptcha_response_field  {\nfont-size:11pt;\n}\n.recaptcha_theme_blackglass #recaptcha_response_field,\n.recaptcha_theme_white #recaptcha_response_field {\nborder: 1px solid gray;\n}\n.recaptcha_theme_red #recaptcha_response_field {\nborder:1px solid #cca940;\n}\n.recaptcha_audio_cant_hear_link {\nfont-size:7pt;\ncolor:black;\n}\n.recaptchatable {\nline-height:1em;\nborder: 1px solid #dfdfdf !important;\n}\n.recaptcha_error_text {\ncolor:red;\n}\n'};
var RecaptchaStr_en = {
visual_challenge : "Get a visual challenge",
audio_challenge : "Get an audio challenge",
refresh_btn : "Get a new challenge",
instructions_visual : "Type the two words:",
instructions_audio : "Type what you hear:",
help_btn : "Help",
play_again : "Play sound again",
cant_hear_this : "Download sound as MP3",
incorrect_try_again : "Incorrect. Try again."
};
var RecaptchaStr_de = {
visual_challenge : "Visuelle Aufgabe generieren",
audio_challenge : "Audio-Aufgabe generieren",
refresh_btn : "Neue Aufgabe generieren",
instructions_visual : "Gib die 2 W\u00f6rter ein:",
instructions_audio : "Gib die 8 Ziffern ein:",
help_btn : "Hilfe",
incorrect_try_again: "Falsch. Nochmals versuchen!"
};
var RecaptchaStr_es = {
visual_challenge : "Obt\u00e9n un reto visual",
audio_challenge : "Obt\u00e9n un reto audible",
refresh_btn : "Obt\u00e9n un nuevo reto",
instructions_visual : "Escribe las 2 palabras:",
instructions_audio : "Escribe los 8 n\u00fameros:",
help_btn : "Ayuda",
incorrect_try_again: "Incorrecto. Otro intento."
};
var RecaptchaStr_fr = {
visual_challenge : "D\u00e9fi visuel",
audio_challenge : "D\u00e9fi audio",
refresh_btn : "Nouveau d\u00e9fi",
instructions_visual : "Entrez les deux mots:",
instructions_audio : "Entrez les huit chiffres:",
help_btn : "Aide",
incorrect_try_again: "Incorrect."
};
var RecaptchaStr_nl = {
visual_challenge : "Test me via een afbeelding",
audio_challenge : "Test me via een geluidsfragment",
refresh_btn : "Nieuwe uitdaging",
instructions_visual : "Type de twee woorden:",
instructions_audio : "Type de acht cijfers:",
help_btn : "Help",
incorrect_try_again: "Foute invoer."
};
var RecaptchaStr_pt = {
visual_challenge : "Obter um desafio visual",
audio_challenge : "Obter um desafio sonoro",
refresh_btn : "Obter um novo desafio",
instructions_visual : "Escreva as 2 palavras:",
instructions_audio : "Escreva os 8 numeros:",
help_btn : "Ajuda",
incorrect_try_again: "Incorrecto. Tenta outra vez."
};
var RecaptchaStr_ru = {
visual_challenge : "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0432\u0438\u0437\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",
audio_challenge : "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u0437\u0432\u0443\u043a\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",
refresh_btn : "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u0437\u0430\u0434\u0430\u0447\u0443",
instructions_visual : "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0434\u0432\u0430 \u0441\u043b\u043e\u0432\u0430:",
instructions_audio : "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u043e\u0441\u0435\u043c\u044c \u0447\u0438\u0441\u0435\u043b:",
help_btn : "\u041f\u043e\u043c\u043e\u0449\u044c",
incorrect_try_again: "\u041d\u0435\u043f\u0440\u0430\u0432\u0438\u043b\u044c\u043d\u043e."
};
var RecaptchaStr_tr = {
visual_challenge : "G\u00f6rsel deneme",
audio_challenge : "\u0130\u015Fitsel deneme",
refresh_btn : "Yeni deneme",
instructions_visual : "\u0130ki kelimeyi yaz\u0131n:",
instructions_audio : "Sekiz numaray\u0131 yaz\u0131n:",
help_btn : "Yard\u0131m (\u0130ngilizce)",
incorrect_try_again: "Yanl\u0131\u015f. Bir daha deneyin."
};
var RecaptchaLangMap = {
en: RecaptchaStr_en,
de: RecaptchaStr_de,
es: RecaptchaStr_es,
fr: RecaptchaStr_fr,
nl: RecaptchaStr_nl,
pt: RecaptchaStr_pt,
ru: RecaptchaStr_ru,
tr: RecaptchaStr_tr
};
var RecaptchaStr = RecaptchaStr_en;
var RecaptchaOptions;
var RecaptchaDefaultOptions = {
tabindex: 0,
theme: 'red',
callback: null,
lang: 'en',
custom_theme_widget : null,
custom_translations : null
};
var Recaptcha = {
widget: null,
timer_id: -1,
style_set: false,
theme: null,
type: 'image',
ajax_verify_cb : null,
$: function(id) {
if (typeof(id) == "string") {
return document.getElementById(id);
}
else {
return id;
}
},
create: function(public_key, element, options) {
Recaptcha.destroy();
if (element) {
Recaptcha.widget = Recaptcha.$(element);
}
Recaptcha._init_options(options);
Recaptcha._call_challenge(public_key);
},
destroy: function() {
var challengefield = Recaptcha.$('recaptcha_challenge_field');
if (challengefield) {
challengefield.parentNode.removeChild(challengefield);
}
if (Recaptcha.timer_id != -1) {
clearInterval(Recaptcha.timer_id);
}
Recaptcha.timer_id = -1;
var imagearea = Recaptcha.$('recaptcha_image');
if (imagearea) {
imagearea.innerHTML = "";
}
// don't clear the area if it's custom, the caller might want to
// reuse the dom elements.
if (Recaptcha.widget) {
if (Recaptcha.theme != "custom") {
Recaptcha.widget.innerHTML = "";
} else {
Recaptcha.widget.style.display = "none";
}
Recaptcha.widget = null;
}
},
focus_response_field: function() {
var $ = Recaptcha.$;
var field = $('recaptcha_response_field');
field.focus();
},
get_challenge: function() {
if (typeof(RecaptchaState) == "undefined") {
return null;
}
return RecaptchaState.challenge;
},
get_response: function() {
var $ = Recaptcha.$;
var field = $('recaptcha_response_field');
if (!field) {
return null;
}
return field.value;
},
ajax_verify: function(callback) {
Recaptcha.ajax_verify_cb = callback;
var scriptURL = Recaptcha._get_api_server() + "/ajaxverify" +
"?c=" + encodeURIComponent(Recaptcha.get_challenge()) +
"&response=" + encodeURIComponent(Recaptcha.get_response());
Recaptcha._add_script(scriptURL);
},
_ajax_verify_callback : function(data) {
Recaptcha.ajax_verify_cb(data);
},
_get_api_server : function() {
var protocol = window.location.protocol;
var server;
if (typeof(_RecaptchaOverrideApiServer) != "undefined") {
server = _RecaptchaOverrideApiServer;
} else if (protocol == 'https:') {
server = "api-secure.recaptcha.net";
} else {
server = "api.recaptcha.net";
}
return protocol + "//" + server;
},
_call_challenge: function(public_key) {
var scriptURL = Recaptcha._get_api_server() + "/challenge?k=" + public_key + "&ajax=1&cachestop=" + Math.random();
if (typeof(RecaptchaOptions.extra_challenge_params) != "undefined") {
scriptURL += "&" + RecaptchaOptions.extra_challenge_params;
}
Recaptcha._add_script(scriptURL);
},
_add_script: function(scriptURL) {
var scriptTag = document.createElement("script");
scriptTag.type = "text/javascript";
scriptTag.src = scriptURL;
Recaptcha._get_script_area().appendChild(scriptTag);
},
_get_script_area: function() {
var parentElement = document.getElementsByTagName("head");
if (!parentElement || parentElement.length < 1) {
parentElement = document.body;
}
else {
parentElement = parentElement[0];
}
return parentElement;
},
_hash_merge : function(hashes) {
var r = {};
for (var h in hashes) {
for (var k in hashes[h]) {
r[k] = hashes[h][k]
}
}
return r;
},
_init_options: function(opts) {
RecaptchaOptions = Recaptcha._hash_merge([RecaptchaDefaultOptions, opts || {}]);
},
challenge_callback: function() {
var element = Recaptcha.widget;
Recaptcha._reset_timer ();
RecaptchaStr = Recaptcha._hash_merge([
RecaptchaStr_en,
RecaptchaLangMap[RecaptchaOptions.lang] || {},
RecaptchaOptions.custom_translations || {}]);
/* Try to avoid back/forward cache problems */
// firefox
if (window.addEventListener) {
window.addEventListener('unload', function(e){ Recaptcha.destroy(); }, false );
}
// IE
if (Recaptcha._is_ie() && window.attachEvent) {
window.attachEvent('onbeforeunload', function () {
// I think this may be causing some errors -- it seems
// that sometimes IE isn't submitting the form fully
// This may be breaking the back button functionality
// :-(
//Recaptcha.destroy();
});
}
// safari
if (navigator.userAgent.indexOf("KHTML") > 0) {
var iframe = document.createElement('iframe');
iframe.src = "about:blank";
iframe.style.height = "0px";
iframe.style.width = "0px";
iframe.style.visibility = "hidden";
iframe.style.border = "none";
var textNode = document.createTextNode("This frame prevents back/forward cache problems in Safari.");
iframe.appendChild(textNode);
document.body.appendChild(iframe);
}
Recaptcha._finish_widget();
},
_add_css : function(css) {
var styleTag = document.createElement("style");
styleTag.type = "text/css";
if (styleTag.styleSheet) { // IE only
if (navigator.appVersion.indexOf("MSIE 5") != -1) { // IE 5 crashes if we add a style tag to the DOM
document.write("<style type='text/css'>" + css + "</style>");
}
else {
styleTag.styleSheet.cssText = css;
}
} else if (navigator.appVersion.indexOf("MSIE 5") != -1) {
document.write("<style type='text/css'>" + css + "</style>");
}
else {
var textNode = document.createTextNode(css);
styleTag.appendChild(textNode);
}
Recaptcha._get_script_area().appendChild(styleTag);
},
_set_style: function(css) {
// We only allow the style to be set once, because IE behaves
// poorly otherwise.  Same goes for Recaptcha.theme.
if (Recaptcha.style_set) {
return;
}
Recaptcha.style_set = true;
Recaptcha._add_css(css + "\n\n" +
".recaptcha_is_showing_audio .recaptcha_only_if_image," +
".recaptcha_isnot_showing_audio .recaptcha_only_if_audio," +
".recaptcha_had_incorrect_sol .recaptcha_only_if_no_incorrect_sol," +
".recaptcha_nothad_incorrect_sol .recaptcha_only_if_incorrect_sol" +
"{display:none !important}");
},
_init_builtin_theme : function() {
var $ = Recaptcha.$;
var $_ = RecaptchaStr;
var $ST = RecaptchaState;
var css, html, imgfmt;
var server_no_slash = $ST.server;
if (server_no_slash[server_no_slash.length - 1] == "/")
server_no_slash = server_no_slash.substring (0, server_no_slash.length - 1);
var IMGROOT = server_no_slash + "/img/" + Recaptcha.theme;
if (Recaptcha.theme == 'clean') {
css = RecaptchaTemplates.CleanCss;
html = RecaptchaTemplates.CleanHtml;
imgfmt = 'png';
}
else {
css = RecaptchaTemplates.VertCss;
html = RecaptchaTemplates.VertHtml;
imgfmt = 'gif';
}
css = css.replace (/IMGROOT/g, IMGROOT);
Recaptcha._set_style(css);
Recaptcha.widget.innerHTML = "<div id='recaptcha_area'>" + html + "</div>";
$('recaptcha_reload').src = IMGROOT + "/refresh." + imgfmt;
$('recaptcha_switch_audio').src = IMGROOT + "/audio." + imgfmt;
$('recaptcha_switch_img').src = IMGROOT + "/text." + imgfmt;
$('recaptcha_whatsthis').src = IMGROOT + "/help." + imgfmt;
if (Recaptcha.theme == 'clean') {
$('recaptcha_logo').src = IMGROOT + "/logo." + imgfmt;
$('recaptcha_tagline').src = IMGROOT + "/tagline." + imgfmt;
}
$('recaptcha_reload').alt = $_.refresh_btn;
$('recaptcha_switch_audio').alt = $_.audio_challenge;
$('recaptcha_switch_img').alt = $_.visual_challenge;
$('recaptcha_whatsthis').alt = $_.help_btn;
$('recaptcha_reload_btn').href = "javascript:Recaptcha.reload ();";
$('recaptcha_reload_btn').title = $_.refresh_btn;
$('recaptcha_switch_audio_btn').href = "javascript:Recaptcha.switch_type('audio');";
$('recaptcha_switch_audio_btn').title = $_.audio_challenge;
$('recaptcha_switch_img_btn').href = "javascript:Recaptcha.switch_type('image');";
$('recaptcha_switch_img_btn').title = $_.visual_challenge;
$('recaptcha_whatsthis_btn').href = Recaptcha._get_help_link();
$('recaptcha_whatsthis_btn').target = "_blank";
$('recaptcha_whatsthis_btn').title = $_.help_btn;
$('recaptcha_whatsthis_btn').onclick = function () {
Recaptcha.showhelp();
return false;
};
$('recaptcha_table').className = "recaptchatable " + "recaptcha_theme_" + Recaptcha.theme;
if ($("recaptcha_instructions_image")) {
$("recaptcha_instructions_image").appendChild(document.createTextNode($_.instructions_visual));
}
if ($("recaptcha_instructions_audio")) {
$("recaptcha_instructions_audio").appendChild(document.createTextNode($_.instructions_audio));
}
if ($("recaptcha_instructions_error")) {
$("recaptcha_instructions_error").appendChild(document.createTextNode($_.incorrect_try_again));
}
},
_finish_widget: function() {
var $ = Recaptcha.$;
var $_ = RecaptchaStr;
var $ST = RecaptchaState;
var $OPT = RecaptchaOptions;
var theme = $OPT.theme;
switch (theme) {
case 'red': case 'white': case 'blackglass': case 'clean': case 'custom':
break;
default:
theme = 'red';
break;
}
if (!Recaptcha.theme) {
Recaptcha.theme = theme;
}
if (Recaptcha.theme != "custom") {
Recaptcha._init_builtin_theme();
} else {
// get the rules for audio/visual error/no error
Recaptcha._set_style("");
}
var challengeFieldHolder = document.createElement("span");
challengeFieldHolder.id = "recaptcha_challenge_field_holder";
challengeFieldHolder.style.display = "none";
$('recaptcha_response_field').parentNode.insertBefore(challengeFieldHolder, $('recaptcha_response_field'));
$('recaptcha_response_field').setAttribute("autocomplete", "off");
$('recaptcha_image').style.width = '300px';
$('recaptcha_image').style.height = '57px';
Recaptcha.should_focus = false;
Recaptcha._set_challenge($ST.challenge, 'image');
if ($OPT.tabindex) {
$('recaptcha_response_field').tabIndex = $OPT.tabindex;
if (Recaptcha.theme != "custom") {
$('recaptcha_whatsthis_btn').tabIndex = $OPT.tabindex;
$('recaptcha_switch_img_btn').tabIndex = $OPT.tabindex;
$('recaptcha_switch_audio_btn').tabIndex = $OPT.tabindex;
$('recaptcha_reload_btn').tabIndex = $OPT.tabindex;
}
}
if (Recaptcha.widget) {
Recaptcha.widget.style.display = '';
}
if ($OPT.callback) {
$OPT.callback();
}
},
switch_type : function (new_type) {
var $C = Recaptcha;
$C.type = new_type;
$C.reload ($C.type == 'audio' ? 'a' : 'v');
},
reload: function (reason) {
var $C = Recaptcha;
var $ = $C.$;
var $ST = RecaptchaState;
if (typeof(reason) == "undefined")
reason = 'r';
var scriptURL = $ST.server + "reload?c=" + $ST.challenge + "&k=" + $ST.site + "&reason=" + reason + "&type=" + $C.type + "&lang=" + RecaptchaOptions.lang;
if (typeof(RecaptchaOptions.extra_challenge_params) != "undefined") {
scriptURL += "&" + RecaptchaOptions.extra_challenge_params;
}
if ($C.type == 'audio') {
if (RecaptchaOptions.audio_beta_12_08) {
scriptURL += "&audio_beta_12_08=1";
} else {
scriptURL += "&new_audio_default=1";
}
}
$C.should_focus = reason != 't';
$C._add_script(scriptURL);
},
finish_reload: function(new_challenge, type) {
RecaptchaState.is_incorrect = false;
Recaptcha._set_challenge(new_challenge, type);
},
_set_challenge: function (new_challenge, type)
{
var $C = Recaptcha;
var $ST = RecaptchaState;
var $ = $C.$;
$ST.challenge = new_challenge;
// this should really be the case already...
$C.type = type;
// using innerHTML prevents back/forward from caching this
$('recaptcha_challenge_field_holder').innerHTML = "<input type='hidden' name='recaptcha_challenge_field' id='recaptcha_challenge_field' value='" + $ST.challenge + "'/>";
if (type == 'audio') {
$("recaptcha_image").innerHTML = Recaptcha.getAudioCaptchaHtml();
} else if (type == 'image') {
var imageurl = $ST.server + 'image?c=' + $ST.challenge;
// display:block due to http://developer.mozilla.org/en/docs/Images%2C_Tables%2C_and_Mysterious_Gap
// use innerHTML to avoid triggering a firefox dom preference
$('recaptcha_image').innerHTML = "<img style='display:block;' height='57' width='300' src='" + imageurl + "'/>";
}
Recaptcha._css_toggle("recaptcha_had_incorrect_sol", "recaptcha_nothad_incorrect_sol", $ST.is_incorrect);
Recaptcha._css_toggle("recaptcha_is_showing_audio", "recaptcha_isnot_showing_audio", type == 'audio');
$C._clear_input ();
if ($C.should_focus) {
$C.focus_response_field();
}
$C._reset_timer ();
},
_reset_timer : function () {
var $ST = RecaptchaState;
clearInterval(Recaptcha.timer_id);
Recaptcha.timer_id = setInterval ("Recaptcha.reload('t');", ($ST.timeout - 60*5) * 1000);
},
showhelp : function () {
window.open(Recaptcha._get_help_link(),"recaptcha_popup","width=460,height=570,location=no,menubar=no,status=no,toolbar=no,scrollbars=yes,resizable=yes");
},
_clear_input : function () {
var resp=Recaptcha.$('recaptcha_response_field');
resp.value = "";
},
_displayerror : function(msg) {
var $=Recaptcha.$;
$('recaptcha_image').innerHTML = '';
$('recaptcha_image').appendChild (document.createTextNode(msg));
},
reloaderror : function (msg) {
Recaptcha._displayerror(msg);
},
_is_ie : function () { return (navigator.userAgent.indexOf("MSIE") > 0) && !window.opera; },
_css_toggle : function (classT, classF, isset) {
// try to do these CSS toggles just on the recaptcha widget. But,
// if that wasn't passed in, go for the document body.
var element = Recaptcha.widget;
if (!element)
element = document.body;
var classname = element.className;
classname = classname.replace(
new RegExp("(^|\\s+)"+ classT + "(\\s+|$)"), ' ');
classname = classname.replace(
new RegExp("(^|\\s+)"+ classF + "(\\s+|$)"), ' ');
classname += " " + (isset ? classT : classF);
element.className = classname;
},
_get_help_link : function () {
var lang = RecaptchaOptions.lang;
return 'http://recaptcha.net/popuphelp/' + (lang == 'en' ? "" : (lang + ".html"));
},
playAgain : function () {
var $ = Recaptcha.$;
$("recaptcha_image").innerHTML = Recaptcha.getAudioCaptchaHtml();
},
getAudioCaptchaHtml : function () {
var $C = Recaptcha;
var $ST = RecaptchaState;
var $ = Recaptcha.$;
var httpwavurl = $ST.server + "image?c=" + $ST.challenge;
if (httpwavurl.indexOf("https://") == 0) {
httpwavurl = "http://" + httpwavurl.substring(8);
}
var swfUrl = $ST.server + "/img/audiocaptcha.swf?v2";
var embedCode;
if ($C._is_ie()) {
embedCode = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="audiocaptcha" width="0" height="0" codebase="https://fpdownload.macromedia.com/get/flashplayer/current/swflash.cab"><param name="movie" value="' + swfUrl + '" /><param name="quality" value="high" /><param name="bgcolor" value="#869ca7" /><param name="allowScriptAccess" value="always" /></object><br/>';
} else {
embedCode = '<embed src="' + swfUrl + '" quality="high" bgcolor="#869ca7" width="0" height="0" name="audiocaptcha" align="middle" play="true" loop="false" quality="high" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"></embed> ';
}
var cantHearCode = (Recaptcha.checkFlashVer() ? '<br/><a class="recaptcha_audio_cant_hear_link" href="#" onclick="Recaptcha.playAgain(); return false;">' + RecaptchaStr.play_again + '</a>' : '') +
'<br/><a class="recaptcha_audio_cant_hear_link" target="_blank" href="' + httpwavurl + '">' + RecaptchaStr.cant_hear_this + '</a>';
return embedCode + cantHearCode;
},
gethttpwavurl : function () {
var $ST = RecaptchaState;
if (Recaptcha.type == 'audio') {
var httpwavurl = $ST.server + "image?c=" + $ST.challenge;
if (httpwavurl.indexOf("https://") == 0) {
httpwavurl = "http://" + httpwavurl.substring(8);
}
return httpwavurl;
}
return "";
},
checkFlashVer : function () {
var isIE  = (navigator.appVersion.indexOf("MSIE") != -1) ? true : false;
var isWin = (navigator.appVersion.toLowerCase().indexOf("win") != -1) ? true : false;
var isOpera = (navigator.userAgent.indexOf("Opera") != -1) ? true : false;
var flashVer = -1;
if (navigator.plugins != null && navigator.plugins.length > 0) {
if (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
var swVer2 = navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
var flashDescription = navigator.plugins["Shockwave Flash" + swVer2].description;
var descArray = flashDescription.split(" ");
var tempArrayMajor = descArray[2].split(".");
flashVer = tempArrayMajor[0];
}
} else if ( isIE && isWin && !isOpera ) {
try {
// version will be set for 7.X or greater players
var axo = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
var flashVerStr = axo.GetVariable("$version");
flashVer = flashVerStr.split(" ")[1].split(",")[0];
} catch (e) {
}
}
return flashVer >= 9;
},
getlang : function() {
return RecaptchaOptions.lang;
}
};


/* - ++resource++collective.z3cform.datagridfield/datagridfield.js - */
/*global window, console*/

jQuery(function($) {

    // No globals, dude!
    "use strict";

    // Local singleton object containing our functions
    var dataGridField2Functions = {};

    dataGridField2Functions.getInputOrSelect = function(node) {
        /* Get the (first) input or select form element under the given node */

        var inputs = node.getElementsByTagName("input");
        if(inputs.length > 0) {
            return inputs[0];
        }

        var selects = node.getElementsByTagName("select");
        if(selects.length > 0) {
            return selects[0];
        }

        return null;
    };

    dataGridField2Functions.getWidgetRows = function(currnode) {
        /* Return primary nodes with class of datagridwidget-row,
           they can be any tag: tr, div, etc. */
        var tbody = this.getParentByClass(currnode, "datagridwidget-body");
        return this.getRows(tbody);
    };

    dataGridField2Functions.getRows = function(tbody) {
        /* Return primary nodes with class of datagridwidget-row,
           they can be any tag: tr, div, etc. */

        var rows = $(tbody).children('.datagridwidget-row');

        return rows;
    };


    /**
     * Get all visible rows of DGF
     *
     * Incl. normal rows + AA row
     */
    dataGridField2Functions.getVisibleRows = function(tbody) {

        var rows = this.getRows(tbody);
        // We rape jQuery.filter here, because of
        // IE8 Array.filter http://kangax.github.com/es5-compat-table/

        // Consider "real" rows only
        var filteredRows = $(rows).filter(function() {
            var $tr = $(this);
            return !$tr.hasClass("datagridwidget-empty-row");
        });

        return filteredRows;
    };

    /**
     * Handle auto insert events by auto append
     */
    dataGridField2Functions.onInsert = function(e) {
        var currnode = e.currentTarget;
        this.autoInsertRow(currnode);
    },

    /**
     * Add a new row when changing the last row
     *
     * @param {Boolean} ensureMinimumRows we insert a special minimum row so the widget is not empty
     */
    dataGridField2Functions.autoInsertRow = function(currnode, ensureMinimumRows) {

        // fetch required data structure
        var dgf = $(dataGridField2Functions.getParentByClass(currnode, "datagridwidget-table-view"));
        var tbody = dataGridField2Functions.getParentByClass(currnode, "datagridwidget-body");
        var thisRow = dataGridField2Functions.getParentRow(currnode); // The new row we are working on
        var $thisRow = $(thisRow);

        var autoAppendMode = $(tbody).data("auto-append");

        if($thisRow.hasClass("minimum-row")) {
            // The change event was not triggered on real AA row,
            // but on a minimum ensured row (row 0).
            // 1. Don't add new row
            // 2. Make widget to "normal" state now as the user has edited the empty row so we assume it's a real row
            this.supressEnsureMinimum(tbody);
            return;
        }

        // Remove the auto-append functionality from the all rows in this widget
        var autoAppendHandlers = dgf.find('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell');
        autoAppendHandlers.unbind('change.dgf');
        $thisRow.removeClass('auto-append');

        // Create a new row
        var newtr = dataGridField2Functions.createNewRow(thisRow), $newtr = $(newtr);
        // Add auto-append functionality to our new row
        $newtr.addClass('auto-append');

        /* Put new row to DOM tree after our current row.  Do this before
         * reindexing to ensure that any Javascript we insert that depends on
         * DOM element IDs (such as plone.formwidget.autocomplete) will
         * pick up this row before any IDs get changed.  At this point,
         * we techinically have duplicate TT IDs in our document
         * (one for this new row, one for the hidden row), but jQuery
         * selectors will pick up elements in this new row first.
         */

        dgf.trigger("beforeaddrowauto", [dgf, newtr]);

        if(ensureMinimumRows) {
            // Add a special class so we can later deal with it
            $newtr.addClass("minimum-row");
            $newtr.insertBefore(thisRow);
        } else {
            $newtr.insertAfter(thisRow);
        }

        // Re-enable auto-append change handler feature on the new auto-appended row
        if(autoAppendMode) {
            $(dgf).find('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell').bind("change.dgf", $.proxy(dataGridField2Functions.onInsert, dataGridField2Functions));
        }

        dataGridField2Functions.reindexRow(tbody, newtr, 'AA');

        // Update order index to give rows correct values
        dataGridField2Functions.updateOrderIndex(tbody, true, ensureMinimumRows);

        dgf.trigger("afteraddrowauto", [dgf, newtr]);
    };

    /**
     * Creates a new row after the the target row.
     *
     * @param {Object} currnode DOM <tr>
     */
    dataGridField2Functions.addRowAfter = function(currnode) {

        // fetch required data structure
        var tbody = this.getParentByClass(currnode, "datagridwidget-body");
        var dgf = $(dataGridField2Functions.getParentByClass(currnode, "datagridwidget-table-view"));

        var thisRow = this.getParentRow(currnode);

        var newtr = this.createNewRow(thisRow);

        dgf.trigger("beforeaddrow", [dgf, newtr]);

        var filteredRows = this.getVisibleRows(currnode);

        // If using auto-append we add the "real" row before AA
        // We have a special case when there is only one visible in the gid
        if (thisRow.hasClass('auto-append') && !thisRow.hasClass("minimum-row")) {
            $(newtr).insertBefore(thisRow);
        } else {
            $(newtr).insertAfter(thisRow);
        }

        // Ensure minimum special behavior is no longer needed as we have now at least 2 rows
        if(thisRow.hasClass("minimum-row")) {
            this.supressEnsureMinimum(tbody);
        }

        // update orderindex hidden fields
        this.updateOrderIndex(tbody, true);

        dgf.trigger("afteraddrow", [dgf, newtr]);

    };

    /**
     * Creates a new row.
     *
     * The row is not inserted to the table, but is returned.
     *
     * @param {Object} <tr> or <tbody> DOM node in a table where we'll be adding the new row
     */
    dataGridField2Functions.createNewRow = function(node) {

        var tbody = this.getParentByClass(node, "datagridwidget-body");

        // hidden template row
        var emptyRow = $(tbody).children('.datagridwidget-empty-row').first();

        if(emptyRow.size() === 0) {
            // Ghetto assert()
            throw new Error("Could not locate empty template row in DGF");
        }

        var new_row = emptyRow.clone(true).removeClass('datagridwidget-empty-row');

        return new_row;
    };


    dataGridField2Functions.removeFieldRow = function(node) {
        /* Remove the row in which the given node is found */
        var tbody = this.getParentByClass(node, "datagridwidget-body");
        var row = this.getParentRow(node);
        $(row).remove();
        this.updateOrderIndex(tbody,false);
    };

    dataGridField2Functions.moveRow = function(currnode, direction){
        /* Move the given row down one */
        var nextRow;

        var dgf = $(dataGridField2Functions.getParentByClass(currnode, "datagridwidget-table-view"));

        var tbody = this.getParentByClass(currnode, "datagridwidget-body");

        var rows = this.getWidgetRows(currnode);

        var row = this.getParentRow(currnode);
        if(!row) {
            throw new Error("Couldn't find DataGridWidget row");
        }

        var idx = null;

        // We can't use nextSibling because of blank text nodes in some browsers
        // Need to find the index of the row

        rows.each(function (i) {
            if (this == row[0]) {
                idx = i;
            }
        });

        // Abort if the current row wasn't found
        if (idx == null)
            return;


        // The up and down should cycle through the rows, excluding the auto-append and
        // empty-row rows.
        var validrows = 0;
        rows.each(function (i) {
            if (!$(this).hasClass('datagridwidget-empty-row') && !$(this).hasClass('auto-append')) {
                validrows+=1;
            }
        });

        if (idx+1 == validrows) {
            if (direction == "down") {
                this.moveRowToTop(row);
            } else {
                nextRow = rows[idx-1];
                this.shiftRow(nextRow, row);
            }

        } else if (idx === 0) {
            if (direction == "up") {
                this.moveRowToBottom(row);
            } else {
                nextRow = rows[parseInt(idx+1, 10)];
                this.shiftRow(row, nextRow);
            }

        } else {
            if (direction == "up") {
                nextRow = rows[idx-1];
                this.shiftRow(nextRow, row);
            } else {
                nextRow = rows[parseInt(idx+1, 10)];
                this.shiftRow(row, nextRow);
            }
        }

        this.updateOrderIndex(tbody);

        dgf.trigger("aftermoverow", [dgf, row]);
    };

    dataGridField2Functions.moveRowDown = function(currnode){
        this.moveRow(currnode, "down");
    };

    dataGridField2Functions.moveRowUp = function(currnode){
        this.moveRow(currnode, "up");
    };

    dataGridField2Functions.shiftRow = function(bottom, top){
        /* Put node top before node bottom */
        $(top).insertBefore(bottom);
    };

    dataGridField2Functions.moveRowToTop = function (row) {
        var rows = this.getWidgetRows(row);
        $(row).insertBefore(rows[0]);
    };

    dataGridField2Functions.moveRowToBottom = function (row) {
        var rows = this.getWidgetRows(row);

        // make sure we insert the directly above any auto appended rows
        var insert_after = 0;
        rows.each(function (i) {
            if (!$(this).hasClass('datagridwidget-empty-row')  && !$(this).hasClass('auto-append')) {
                insert_after = i;
            }
        });
        $(row).insertAfter(rows[insert_after]);
    };

    /**
     * Fixup all attributes on all child elements that contain
     * the row index. The following attributes are scanned:
     * - name
     * - id
     * - for
     * - href
     * - data-fieldname
     *
     * On the server side, the DGF logic will rebuild rows based
     * on this information.
     *
     * If indexing for some reasons fails you'll get double
     * input values and Zope converts inputs to list, failing
     * in funny ways.
     *
     * @param  {DOM} tbody
     * @param  {DOM} row
     * @param  {Number} newindex
     */
    dataGridField2Functions.reindexRow = function (tbody, row, newindex) {
        var name_prefix = $(tbody).data('name_prefix') + '.';
        var id_prefix = $(tbody).data('id_prefix') + '-';
        var $row = $(row);
        var oldindex = $row.data('index');

        function replaceIndex(el, attr, prefix) {
            if (el.attr(attr)) {
                var val = el.attr(attr);
                var pattern = new RegExp('^' + prefix + oldindex);
                el.attr(attr, val.replace(pattern, prefix + newindex));
                if (attr.indexOf('data-') === 0) {
                    var key = attr.substr(5);
                    var data = el.data(key);
                    el.data(key, data.replace(pattern, prefix + newindex));
                }
            }
        }

        // update index data
        $row.data('index', newindex);
        $row.attr('data-index', newindex);

        $row.find('[id^="formfield-' + id_prefix + '"]').each(function(i, el) {
            replaceIndex($(el), 'id', 'formfield-' + id_prefix);
        });

        $row.find('[name^="' + name_prefix +'"]').each(function(i, el) {
            replaceIndex($(el), 'name', name_prefix);
        });

        $row.find('[id^="' + id_prefix +'"]').each(function(i, el) {
            replaceIndex($(el), 'id', id_prefix);
        });

        $row.find('[for^="' + id_prefix +'"]').each(function(i, el) {
            replaceIndex($(el), 'for', id_prefix);
        });

        $row.find('[href*="#' + id_prefix +'"]').each(function(i, el){
            replaceIndex($(el), 'href', '#' + id_prefix);
        });

        $row.find('[data-fieldname^="' + name_prefix + '"]').each(function(i, el) {
            replaceIndex($(el), 'data-fieldname', name_prefix);
        });
    };

    /**
     * Stop ensure miminum special behavior.
     *
     * The caller is responsible to check there was one and only one minimum-row in the table.
     *
     * Call when data is edited for the first time or a row added.
     */
    dataGridField2Functions.supressEnsureMinimum = function(tbody) {

        var autoAppendHandlers = $(tbody).find('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell');
        autoAppendHandlers.unbind('change.dgf');

        tbody.children().removeClass("auto-append");
        tbody.children().removeClass("minimum-row");


        dataGridField2Functions.updateOrderIndex(tbody, true, false);
    };

    /**
     * Update all row indexes on a DGF table.
     *
     * Each <tr> and input widget has recalculated row index number in its name,
     * so that the server can then parsit the submitted data in the correct order.
     *
     * @param  {Object} tbody     DOM of DGF <tbody>
     * @param  {Boolean} backwards iterate rows backwards
     * @param  {Boolean} ensureMinimumRows We have inserted a special auto-append row
     */
    dataGridField2Functions.updateOrderIndex = function (tbody, backwards, ensureMinimumRows) {

        var $tbody = $(tbody);
        var name_prefix = $tbody.attr('data-name_prefix') + '.';
        var i, idx, row, $row, $nextRow;

        // Was this auto-append table
        var autoAppend = false;

        var rows = this.getRows(tbody);
        for (i=0; i<rows.length; i++) {
            idx = backwards ? rows.length-i-1 : i;
            row = rows[idx], $row = $(row);

            if ($row.hasClass('datagridwidget-empty-row')) {
                continue;
            }

            if($row.hasClass('auto-append')) {
                autoAppend = true;
            }

            this.reindexRow(tbody, row, idx);
        }

        // Handle a special case where
        // 1. Widget is empty
        // 2. We don't have AA mode turned on
        // 3. We need to have minimum editable row count of 1
        if(ensureMinimumRows) {
            this.reindexRow(tbody, rows[0], "AA");
            autoAppend = true;
        }

        // Add a special first and class row classes
        // to hide manipulation handles
        // AA handling is different once again
        var visibleRows = this.getVisibleRows(tbody);

        for (i=0; i<visibleRows.length; i++) {
            row = visibleRows[i], $row = $(row);

            if(i<visibleRows.length-2) {
                $nextRow = $(visibleRows[i+1]);
            }

            if(i===0) {
                $row.addClass("datagridfield-first-filled-row");
            } else {
                $row.removeClass("datagridfield-first-filled-row");
            }

            // Last visible before AA
            if(autoAppend) {
                if($nextRow && $nextRow.hasClass("auto-append")) {
                    $row.addClass("datagridfield-last-filled-row");
                } else {
                    $row.removeClass("datagridfield-last-filled-row");
                }
            } else {
                if(i==visibleRows.length-1) {
                    $row.addClass("datagridfield-last-filled-row");
                } else {
                    $row.removeClass("datagridfield-last-filled-row");
                }
            }
        }


        // Set total visible row counts and such and hint CSS
        var vis = this.getVisibleRows(tbody).length;
        $tbody.attr("data-count", this.getRows(tbody).length);
        $tbody.attr("data-visible-count", this.getVisibleRows(tbody).length);
        $tbody.attr("data-many-rows", vis >= 2 ? "true" : "false");

        $(document).find('input[name="' + name_prefix + 'count"]').each(function(){
            // do not include the TT and the AA rows in the count
            var count = rows.length;
            if ($(rows[count-1]).hasClass('datagridwidget-empty-row')) {
                count--;
            }
            if ($(rows[count-1]).hasClass('auto-append')) {
                count--;
            }
            this.value = count;
        });
    };

    dataGridField2Functions.getParentElement = function(currnode, tagname) {
        /* Find the first parent node with the given tag name */

        tagname = tagname.toUpperCase();
        var parent = currnode.parentNode;

        while(parent.tagName.toUpperCase() != tagname) {
            parent = parent.parentNode;
            // Next line is a safety belt
            if(parent.tagName.toUpperCase() == "BODY")
                return null;
        }

        return parent;
    };

    dataGridField2Functions.getParentRow = function (node) {
        return this.getParentByClass(node, 'datagridwidget-row');
    };

    dataGridField2Functions.getParentByClass = function(node, klass) {
        var parent = $(node).closest("." + klass);

        if (parent.length) {
            return parent;
        }

        return null;
    };

    /**
     * Find the first parent node with the given id
     *
     * Id is partially matched: the beginning of
     * an element id matches parameter id string.
     *
     * @param  {DOM} currnode Node where ascending in DOM tree beings
     * @param  {String} id       Id string to look for.
     * @return {DOM} Found node or null
     */
    dataGridField2Functions.getParentElementById = function(currnode, id) {
        /*
        */

        id = id.toLowerCase();
        var parent = currnode.parentNode;

        while(true) {

            var parentId = parent.getAttribute("id");
            if(parentId) {
                 if(parentId.toLowerCase().substring(0, id.length) == id) break;
            }

            parent = parent.parentNode;
            // Next line is a safety belt
            if(parent.tagName.toUpperCase() == "BODY")
                return null;
        }

        return parent;
    };


    /**
     * Make sure there is at least one visible row available in DGF
     * to edit in all the time.
     *
     * We need a lot of special logic for the case where
     * we have empty datagridfield and need to have one OPTIONAL
     * row present there for the editing when the user opens
     * the form for the first time.
     *
     * There are cases where one doesn't want to have the count of DGF
     * rows to go down to zero. Otherwise there no insert handle left
     * on the edit mode and the user cannot add any more rows.
     *
     * One should case is when
     *
     * - DGF is empty on new form
     *
     * - Auto append is set to false (initial row is not visible)
     *
     * We fix this situation by checking the available rows
     * and generating one empty AA row if needed.
     *
     * ... or simply when the user removes all the rows
     *
     * @param {Object} tbody DOM object of <tbody>
     */
    dataGridField2Functions.ensureMinimumRows = function(tbody) {
        var rows = this.getRows(tbody);
        var filteredRows = this.getVisibleRows(tbody);
        var self = this;

        // Rows = 0 -> make one AA row available
        if(filteredRows.length === 0) {
            // XXX: make the function call signatures more sane
            var child = rows[0];
            this.autoInsertRow(child, true);

        }
    },


    /**
     * When DOM model is ready execute this actions to wire up page logic.
     */
    dataGridField2Functions.init = function() {

        // Reindex all rows to get proper row classes on them
        $(".datagridwidget-body").each(function() {

            // Initialize widget data on <tbody>
            // We keep some mode attributes around
            var $this = $(this);
            var aa;

            // Check if this widget is in auto-append mode
            // and store for later usage
            aa = $this.children(".auto-append").size() > 0;
            $this.data("auto-append", aa);

            // Hint CSS
            if(aa) {
                $this.addClass("datagridwidget-body-auto-append");
            } else {
                $this.addClass("datagridwidget-body-non-auto-append");
            }

            dataGridField2Functions.updateOrderIndex(this, false);

            if(!aa) {
                dataGridField2Functions.ensureMinimumRows(this);
            }
        });

        // Bind the handlers to the auto append rows
        // Use namespaced jQuery events to avoid unbind() conflicts later on
        $('.auto-append .datagridwidget-cell, .auto-append .datagridwidget-block-edit-cell').bind("change.dgf", $.proxy(dataGridField2Functions.onInsert, dataGridField2Functions));

        $(document).trigger("afterdatagridfieldinit");
    };


    $(document).ready(dataGridField2Functions.init);

    // Export module for customizers to mess around
    window.dataGridField2Functions = dataGridField2Functions;


});


/* - ++resource++collective.cookiecuttr/jquery.cookie.js - */
// http://www.larzep.com/portal_javascripts/++resource++collective.cookiecuttr/jquery.cookie.js?original=1
(function($){$.cookie=function(key,value,options){if(arguments.length>1&&(!/Object/.test(Object.prototype.toString.call(value))||value===null||value===undefined)){options=$.extend({},options);if(value===null||value===undefined){options.expires=-1}
if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days)}
value=String(value);return(document.cookie=[encodeURIComponent(key),'=',options.raw?value:encodeURIComponent(value),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))}
options=value||{};var decode=options.raw? function(s){return s}:decodeURIComponent;var pairs=document.cookie.split('; ');for(var i=0,pair;pair=pairs[i]&&pairs[i].split('=');i++){if(decode(pair[0])===key) return decode(pair[1]||'')}
return null}})(jQuery);

/* - ++resource++collective.cookiecuttr/jquery.cookiecuttr.js - */
// http://www.larzep.com/portal_javascripts/++resource++collective.cookiecuttr/jquery.cookiecuttr.js?original=1
(function($){$.cookieCuttr=function(options){var defaults={cookieCutter:false,cookieCutterDeclineOnly:false,cookieAnalytics:true,cookieDeclineButton:false,cookieAcceptButton:true,cookieResetButton:false,cookieOverlayEnabled:false,cookiePolicyLink:'/privacy-policy/',cookieMessage:'We use cookies on this website, you can <a href="{{cookiePolicyLink}}" title="read about our cookies">read about them here</a>. To use the website as intended please...',cookieAnalyticsMessage:'We use cookies, just to track visits to our website, we store no personal details.',cookieErrorMessage:"We\'re sorry, this feature places cookies in your browser and has been disabled. <br>To continue using this functionality, please",cookieWhatAreTheyLink:"http://www.allaboutcookies.org/",cookieDisable:'',cookieExpires:365,cookieAcceptButtonText:"ACCEPT COOKIES",cookieDeclineButtonText:"DECLINE COOKIES",cookieResetButtonText:"RESET COOKIES FOR THIS WEBSITE",cookieWhatAreLinkText:"What are cookies?",cookieNotificationLocationBottom:false,cookiePolicyPage:false,cookiePolicyPageMessage:'Please read the information below and then choose from the following options',cookieDiscreetLink:false,cookieDiscreetReset:false,cookieDiscreetLinkText:"Cookies?",cookieDiscreetPosition:"topleft",cookieNoMessage:false,cookieDomain:""};var options=$.extend(defaults,options);var message=defaults.cookieMessage.replace('{{cookiePolicyLink}}',defaults.cookiePolicyLink);defaults.cookieMessage='We use cookies on this website, you can <a href="'+defaults.cookiePolicyLink+'" title="read about our cookies">read about them here</a>. To use the website as intended please...';var cookiePolicyLinkIn=options.cookiePolicyLink;var cookieCutter=options.cookieCutter;var cookieCutterDeclineOnly=options.cookieCutterDeclineOnly;var cookieAnalytics=options.cookieAnalytics;var cookieDeclineButton=options.cookieDeclineButton;var cookieAcceptButton=options.cookieAcceptButton;var cookieResetButton=options.cookieResetButton;var cookieOverlayEnabled=options.cookieOverlayEnabled;var cookiePolicyLink=options.cookiePolicyLink;var cookieMessage=message;var cookieAnalyticsMessage=options.cookieAnalyticsMessage;var cookieErrorMessage=options.cookieErrorMessage;var cookieDisable=options.cookieDisable;var cookieWhatAreTheyLink=options.cookieWhatAreTheyLink;var cookieExpires=options.cookieExpires;var cookieAcceptButtonText=options.cookieAcceptButtonText;var cookieDeclineButtonText=options.cookieDeclineButtonText;var cookieResetButtonText=options.cookieResetButtonText;var cookieWhatAreLinkText=options.cookieWhatAreLinkText;var cookieNotificationLocationBottom=options.cookieNotificationLocationBottom;var cookiePolicyPage=options.cookiePolicyPage;var cookiePolicyPageMessage=options.cookiePolicyPageMessage;var cookieDiscreetLink=options.cookieDiscreetLink;var cookieDiscreetReset=options.cookieDiscreetReset;var cookieDiscreetLinkText=options.cookieDiscreetLinkText;var cookieDiscreetPosition=options.cookieDiscreetPosition;var cookieNoMessage=options.cookieNoMessage;var $cookieAccepted=$.cookie('cc_cookie_accept')=="cc_cookie_accept";$.cookieAccepted=function(){return $cookieAccepted};var $cookieDeclined=$.cookie('cc_cookie_decline')=="cc_cookie_decline";$.cookieDeclined=function(){return $cookieDeclined};if(cookieAcceptButton){var cookieAccept=' <a href="#accept" class="cc-cookie-accept">'+cookieAcceptButtonText+'</a> '} else{var cookieAccept=""}
if(cookieDeclineButton){var cookieDecline=' <a href="#decline" class="cc-cookie-decline">'+cookieDeclineButtonText+'</a> '} else{var cookieDecline=""}
if(cookieOverlayEnabled){var cookieOverlay='cc-overlay'} else{var cookieOverlay=""}
if((cookieNotificationLocationBottom)||(cookieDiscreetPosition=="bottomright")||(cookieDiscreetPosition=="bottomleft")){var appOrPre=true} else{var appOrPre=false}
if(($cookieAccepted)||($cookieDeclined)){if((cookieResetButton)&&(cookieDiscreetReset)){if(appOrPre){$('body').append('<div class="cc-cookies cc-discreet"><a class="cc-cookie-reset" href="#" title="'+cookieResetButtonText+'">'+cookieResetButtonText+'</a></div>')} else{$('body').prepend('<div class="cc-cookies cc-discreet"><a class="cc-cookie-reset" href="#" title="'+cookieResetButtonText+'">'+cookieResetButtonText+'</a></div>')}
if(cookieDiscreetPosition=="topleft"){$('div.cc-cookies').css("top","0");$('div.cc-cookies').css("left","0")}
if(cookieDiscreetPosition=="topright"){$('div.cc-cookies').css("top","0");$('div.cc-cookies').css("right","0")}
if(cookieDiscreetPosition=="bottomleft"){$('div.cc-cookies').css("bottom","0");$('div.cc-cookies').css("left","0")}
if(cookieDiscreetPosition=="bottomright"){$('div.cc-cookies').css("bottom","0");$('div.cc-cookies').css("right","0")}} else if(cookieResetButton){if(appOrPre){$('body').append('<div class="cc-cookies"><a href="#" class="cc-cookie-reset">'+cookieResetButtonText+'</a></div>')} else{$('body').prepend('<div class="cc-cookies"><a href="#" class="cc-cookie-reset">'+cookieResetButtonText+'</a></div>')}} else{var cookieResetButton=""}} else{if((cookieNoMessage)&&(!cookiePolicyPage)){} else if((cookieDiscreetLink)&&(!cookiePolicyPage)){if(appOrPre){$('body').append('<div class="cc-cookies cc-discreet"><a href="'+cookiePolicyLinkIn+'" title="'+cookieDiscreetLinkText+'">'+cookieDiscreetLinkText+'</a></div>')} else{$('body').prepend('<div class="cc-cookies cc-discreet"><a href="'+cookiePolicyLinkIn+'" title="'+cookieDiscreetLinkText+'">'+cookieDiscreetLinkText+'</a></div>')}
if(cookieDiscreetPosition=="topleft"){$('div.cc-cookies').css("top","0");$('div.cc-cookies').css("left","0")}
if(cookieDiscreetPosition=="topright"){$('div.cc-cookies').css("top","0");$('div.cc-cookies').css("right","0")}
if(cookieDiscreetPosition=="bottomleft"){$('div.cc-cookies').css("bottom","0");$('div.cc-cookies').css("left","0")}
if(cookieDiscreetPosition=="bottomright"){$('div.cc-cookies').css("bottom","0");$('div.cc-cookies').css("right","0")}} else if(cookieAnalytics){if(appOrPre){$('body').append('<div class="cc-cookies '+cookieOverlay+'">'+cookieAnalyticsMessage+cookieAccept+cookieDecline+'<a href="'+cookieWhatAreTheyLink+'" title="Visit All about cookies (External link)">'+cookieWhatAreLinkText+'</a></div>')} else{$('body').prepend('<div class="cc-cookies '+cookieOverlay+'">'+cookieAnalyticsMessage+cookieAccept+cookieDecline+'<a href="'+cookieWhatAreTheyLink+'" title="Visit All about cookies (External link)">'+cookieWhatAreLinkText+'</a></div>')}}
if(cookiePolicyPage){if(appOrPre){$('body').append('<div class="cc-cookies '+cookieOverlay+'">'+cookiePolicyPageMessage+" "+' <a href="#accept" class="cc-cookie-accept">'+cookieAcceptButtonText+'</a> '+' <a href="#decline" class="cc-cookie-decline">'+cookieDeclineButtonText+'</a> '+'</div>')} else{$('body').prepend('<div class="cc-cookies '+cookieOverlay+'">'+cookiePolicyPageMessage+" "+' <a href="#accept" class="cc-cookie-accept">'+cookieAcceptButtonText+'</a> '+' <a href="#decline" class="cc-cookie-decline">'+cookieDeclineButtonText+'</a> '+'</div>')}} else if((!cookieAnalytics)&&(!cookieDiscreetLink)){if(appOrPre){$('body').append('<div class="cc-cookies '+cookieOverlay+'">'+cookieMessage+cookieAccept+cookieDecline+'</div>')} else{$('body').prepend('<div class="cc-cookies '+cookieOverlay+'">'+cookieMessage+cookieAccept+cookieDecline+'</div>')}}}
if((cookieCutter)&&(!cookieCutterDeclineOnly)&&(($cookieDeclined)||(!$cookieAccepted))){$(cookieDisable).html('<div class="cc-cookies-error">'+cookieErrorMessage+' <a href="#accept" class="cc-cookie-accept">'+cookieAcceptButtonText+'</a> '+'</div>')}
if((cookieCutter)&&(cookieCutterDeclineOnly)&&($cookieDeclined)){$(cookieDisable).html('<div class="cc-cookies-error">'+cookieErrorMessage+' <a href="#accept" class="cc-cookie-accept">'+cookieAcceptButtonText+'</a> '+'</div>')}
if((cookieNotificationLocationBottom)&&(!cookieDiscreetLink)){$('div.cc-cookies').css("top","auto");$('div.cc-cookies').css("bottom","0")}
if((cookieNotificationLocationBottom)&&(cookieDiscreetLink)&&(cookiePolicyPage)){$('div.cc-cookies').css("top","auto");$('div.cc-cookies').css("bottom","0")}
$('.cc-cookie-accept, .cc-cookie-decline').click(function(e){e.preventDefault();if($(this).is('[href$=#decline]')){$.cookie("cc_cookie_accept",null,{path:'/'});$.cookie("cc_cookie_decline","cc_cookie_decline",{expires:cookieExpires,path:'/'});if(options.cookieDomain){$.cookie("__utma",null,{domain:'.'+options.cookieDomain,path:'/'});$.cookie("__utmb",null,{domain:'.'+options.cookieDomain,path:'/'});$.cookie("__utmc",null,{domain:'.'+options.cookieDomain,path:'/'});$.cookie("__utmz",null,{domain:'.'+options.cookieDomain,path:'/'})}} else{$.cookie("cc_cookie_decline",null,{path:'/'});$.cookie("cc_cookie_accept","cc_cookie_accept",{expires:cookieExpires,path:'/'})}
$(".cc-cookies").fadeOut(function(){location.reload()})});$('a.cc-cookie-reset').click(function(f){f.preventDefault();$.cookie("cc_cookie_accept",null,{path:'/'});$.cookie("cc_cookie_decline",null,{path:'/'});$(".cc-cookies").fadeOut(function(){location.reload()})});$('.cc-cookies-error a.cc-cookie-accept').click(function(g){g.preventDefault();$.cookie("cc_cookie_accept","cc_cookie_accept",{expires:cookieExpires,path:'/'});$.cookie("cc_cookie_decline",null,{path:'/'});location.reload()})}})(jQuery);
