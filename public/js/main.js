/**
 * Main application bootstrap module for Vantage PMO website.
 *
 * This module initializes all core functionality including navigation,
 * smooth scrolling, feature animations, and scroll-based content reveals.
 *
 * @module main
 * @author Vantage PMO Development Team
 * @version 1.0.0
 * @license © 2026 Vantage PMO. All rights reserved.
 */

/**
 * Initializes the mobile navigation menu functionality.
 *
 * Sets up event listeners for the hamburger menu toggle, outside clicks,
 * and window resize events to ensure proper mobile menu behavior.
 *
 * @function initNav
 * @private
 */
function initNav() {
  var toggle = document.querySelector('.nav__toggle');
  var menu   = document.querySelector('.nav__menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function () {
    var isOpen = menu.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav')) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/**
 * Initializes smooth scrolling for internal anchor links.
 *
 * Finds all anchor elements with href attributes starting with '#'
 * and adds click event listeners to smoothly scroll to the target elements.
 *
 * @function initSmoothScroll
 * @private
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var id = anchor.getAttribute('href');
      var target = document.querySelector(id);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/**
 * Initializes the sticky feature counter animation.
 *
 * Uses Intersection Observer to detect when feature items come into view
 * and updates the sticky counter numbers with fade/blur transitions.
 *
 * @function initFeaturesScroll
 * @private
 */
function initFeaturesScroll() {
  if (!('IntersectionObserver' in window)) return;

  var nums  = document.querySelectorAll('.features__num');
  var items = document.querySelectorAll('.feature-item[data-index]');
  if (!nums.length || !items.length) return;

  var activeIdx = 0;

  /**
   * Activates the specified feature index with animation.
   *
   * @param {number} idx - The index of the feature item to activate
   */
  function activate(idx) {
    if (idx === activeIdx) return;

    /* Salida del número actual */
    var prev = activeIdx;
    nums[prev].classList.remove('is-active');
    nums[prev].classList.add('is-exit');
    items[prev].classList.remove('is-active');
    setTimeout(function () { nums[prev].classList.remove('is-exit'); }, 320);

    /* Entrada del número nuevo */
    activeIdx = idx;
    nums[activeIdx].classList.add('is-active');
    items[activeIdx].classList.add('is-active');
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        activate(+entry.target.getAttribute('data-index'));
      }
    });
  }, { rootMargin: '-35% 0px -35% 0px', threshold: 0 });

  items.forEach(function (item) { observer.observe(item); });

  /* Activar el primero al inicio */
  items[0].classList.add('is-active');
}

/**
 * Initializes scroll-based entrance animations for content sections.
 *
 * Uses Intersection Observer to add 'is-visible' class to elements
 * when they come into view, triggering CSS animations.
 *
 * @function initScrollAnimations
 * @private
 */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  var selectors = [
    '.pillar-card',
    '.step-card',
    '.testimonial-card',
    '.blog-card',
  ];

  document.querySelectorAll(selectors.join(',')).forEach(function (el) {
    el.classList.add('fade-in');
    observer.observe(el);
  });
}

/**
 * Main initialization function.
 *
 * Called when the DOM is fully loaded to set up all application features.
 *
 * @function init
 * @private
 */
function init() {
  initNav();
  initSmoothScroll();
  initFeaturesScroll();
  initScrollAnimations();
}

document.addEventListener('DOMContentLoaded', init);
