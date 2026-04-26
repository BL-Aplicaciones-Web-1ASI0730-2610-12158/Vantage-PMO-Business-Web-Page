/**
 * Internationalization module for Vantage PMO website.
 *
 * Manages language switching, translation loading, and DOM updates
 * for English and Spanish content.
 *
 * @module i18n
 * @author Vantage PMO Development Team
 * @version 1.0.0
 * @license © 2026 Vantage PMO. All rights reserved.
 */

const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = ['en', 'es'];
const STORAGE_KEY = 'vantage-pmo-lang';

// Capturar base al momento del parseo (document.currentScript es null dentro de funciones)
var _scriptBase = (function () {
  var s = document.currentScript;
  return s ? s.src.replace(/\/js\/[^/]+$/, '') : '';
}());

let currentLang = DEFAULT_LANG;

/**
 * Resolves a nested object property using dot notation.
 *
 * @param {Object} obj - The object to traverse
 * @param {string} key - The dot-separated key path
 * @returns {*} The resolved value or undefined if not found
 * @private
 */
function resolve(obj, key) {
  return key.split('.').reduce(function (acc, part) {
    return acc !== undefined ? acc[part] : undefined;
  }, obj);
}

/**
 * Applies loaded translations to the DOM.
 *
 * @param {Object} translations - The translation object for the current language
 * @private
 */
function applyTranslations(translations) {
  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    var value = resolve(translations, key);
    if (value !== undefined) {
      el.textContent = value;
    }
  });
  document.documentElement.lang = currentLang;
}

/**
 * Loads translation JSON file for the specified language.
 *
 * @param {string} lang - The language code to load
 * @returns {Promise<Object>} Promise resolving to the translation object
 * @private
 */
function loadTranslations(lang) {
  return fetch(_scriptBase + '/i18n/' + lang + '.json')
    .then(function (res) {
      if (!res.ok) throw new Error('No se pudo cargar: ' + lang);
      return res.json();
    });
}

/**
 * Updates the language switcher button text.
 *
 * @param {string} lang - The current language code
 * @private
 */
function updateSwitcher(lang) {
  var btn = document.getElementById('langSwitcher');
  if (btn) {
    btn.textContent = lang.toUpperCase();
  }
}

/**
 * Changes the active language and applies translations.
 *
 * @param {string} lang - The language code to switch to
 * @public
 */
function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) return;
  loadTranslations(lang)
    .then(function (translations) {
      currentLang = lang;
      localStorage.setItem(STORAGE_KEY, lang);
      applyTranslations(translations);
      updateSwitcher(lang);
    })
    .catch(function (err) {
      console.error('[i18n]', err);
    });
}

/**
 * Gets the currently active language code.
 *
 * @returns {string} The current language code
 * @public
 */
function getCurrentLang() {
  return currentLang;
}

/**
 * Initializes the i18n system.
 *
 * @private
 */
function init() {
  var saved = localStorage.getItem(STORAGE_KEY);
  var browser = (navigator.language || '').substring(0, 2);
  var initial = saved || (SUPPORTED_LANGS.includes(browser) ? browser : DEFAULT_LANG);

  var switcher = document.getElementById('langSwitcher');
  if (switcher) {
    switcher.addEventListener('click', function () {
      setLanguage(currentLang === 'en' ? 'es' : 'en');
    });
  }

  setLanguage(initial);
}

document.addEventListener('DOMContentLoaded', init);

/* Public API */
window.i18n = { setLanguage: setLanguage, getCurrentLang: getCurrentLang };
