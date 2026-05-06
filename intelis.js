(function () {
  'use strict';

  function wireForm(formId, okId) {
    var form = document.getElementById(formId);
    var ok = document.getElementById(okId);
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (ok) ok.hidden = false;
      form.querySelectorAll('input, select, textarea, button').forEach(function (el) {
        if (el.tagName.toLowerCase() === 'button') return;
        if (el.type === 'submit') return;
        el.value = '';
      });
    });
  }

  wireForm('i-hero-form', 'i-hero-ok');
  wireForm('i-lead-form', 'i-lead-ok');
  wireForm('i-lp-form', 'i-lp-ok');
})();

