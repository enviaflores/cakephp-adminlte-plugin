/*
 Select2 4.0.0 | https://github.com/select2/select2/blob/master/LICENSE.md */
(function(){if(jQuery&&jQuery.fn&&jQuery.fn.select2&&jQuery.fn.select2.amd)var c=jQuery.fn.select2.amd;return c.define("select2/i18n/et",[],function(){return{inputTooLong:function(a){a=a.input.length-a.maximum;var b="Sisesta "+a+" t\u00e4ht";return 1!=a&&(b+="e"),b+=" v\u00e4hem",b},inputTooShort:function(a){a=a.minimum-a.input.length;var b="Sisesta "+a+" t\u00e4ht";return 1!=a&&(b+="e"),b+=" rohkem",b},loadingMore:function(){return"Laen tulemusi\u2026"},maximumSelected:function(a){var b="Saad vaid "+
a.maximum+" tulemus";return 1==a.maximum?b+="e":b+="t",b+=" valida",b},noResults:function(){return"Tulemused puuduvad"},searching:function(){return"Otsin\u2026"}}}),{define:c.define,require:c.require}})();
