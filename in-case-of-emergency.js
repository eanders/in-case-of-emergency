  javascript: (function() {
    // based on https://github.com/jerryasher/jQuerify
    var jQueryPath = 'https://code.jquery.com/jquery-3.4.0.min.js';
    var s=document.createElement('script');
    document.getElementsByTagName('head')[0].appendChild(s);
    s.onload = function(script) {
      if (typeof jQuery === 'undefined') {
        console.log(jQueryPath + ' loaded but jQuery still undefined');
      } else {
        j$ =jQuery.noConflict();
        console.log(jQueryPath + ' loaded and j$ = jQuery.noConflict() called');
      }
    };
    s.setAttribute('type','text/javascript');
    s.setAttribute('src', jQueryPath);
    })();