/*
 Select2 4.0.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var c=jQuery.fn.select2.amd;return c.define("select2/i18n/es",[],function(){return{errorLoading:function(){return"La carga fall\u00f3"},inputTooLong:function(a){a=a.input.length-a.maximum;var b="Por favor, elimine "+a+" car";return 1==a?b+="\u00e1cter":b+="acteres",b},inputTooShort:function(a){a=a.minimum-a.input.length;var b="Por favor, introduzca "+a+" car";return 1==a?b+="\u00e1cter":b+="acteres",b},loadingMore:function(){return"Cargando m\u00e1s resultados\u2026"},
maximumSelected:function(a){var b="S\u00f3lo puede seleccionar "+a.maximum+" elemento";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No se encontraron resultados"},searching:function(){return"Buscando\u2026"}}}),{define:c.define,require:c.require}})();
