// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Menu category filter tabs (menu.html only)
  var tabs = document.querySelectorAll('.menu-tab');
  var categories = document.querySelectorAll('.menu-category');
  if (tabs.length && categories.length) {
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('active'); });
        tab.classList.add('active');
        var target = tab.getAttribute('data-target');
        categories.forEach(function (cat) {
          if (target === 'all' || cat.getAttribute('data-category') === target) {
            cat.style.display = '';
          } else {
            cat.style.display = 'none';
          }
        });
      });
    });
  }

  // Ember particle positions (hero)
  document.querySelectorAll('.ember-dot').forEach(function (dot, i) {
    dot.style.left = (5 + Math.random() * 90) + '%';
    dot.style.animationDelay = (i * 0.9) + 's';
    dot.style.animationDuration = (7 + Math.random() * 5) + 's';
  });
});
