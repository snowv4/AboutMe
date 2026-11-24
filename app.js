const textNodes = [...document.querySelectorAll('[data-t]')];
for (const node of textNodes) translations.pt[node.dataset.t] = node.textContent;
const selector = document.querySelector('#lang');
const themeButton = document.querySelector('#theme');
const output = document.querySelector('output');
const amplitude = document.querySelector('#amplitude');
const languages = Object.keys(translations);
const browserLanguage = (navigator.languages || [navigator.language])
  .map(locale => locale.split('-')[0]).find(locale => languages.includes(locale));
let language = preferences.get('language');
if (!languages.includes(language)) language = browserLanguage || 'pt';
let themeChoice = ['light','dark'].includes(savedTheme) ? savedTheme : null;

function updateThemeLabel() {
  const dark = document.documentElement.dataset.theme === 'dark';
  const label = translations[language][dark ? 'light' : 'dark'];
  themeButton.setAttribute('aria-label', label);
  themeButton.title = label;
}
function updateAmplitude() {
  output.value = new Intl.NumberFormat(document.documentElement.lang, {style:'percent'})
    .format(amplitude.valueAsNumber / 100);
  amplitude.setAttribute('aria-valuetext', output.value);
}
function applyLanguage(locale) {
  language = locale;
  const copy = translations[locale];
  for (const node of textNodes) node.textContent = copy[node.dataset.t];
  document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale;
  document.title = 'Victor Sant’Ana Ramos | ' + copy.title;
  document.querySelector('meta[name="description"]').content = copy.lead;
  selector.value = locale;
  selector.setAttribute('aria-label', copy.language);
  document.querySelector('#lang-code').textContent = locale.toUpperCase();
  updateThemeLabel();
  updateAmplitude();
}
selector.addEventListener('change', () => {
  applyLanguage(selector.value);
  preferences.set('language', language);
});
themeButton.addEventListener('click', () => {
  themeChoice = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = themeChoice;
  preferences.set('theme', themeChoice);
  updateThemeLabel();
});
systemTheme.addEventListener('change', event => {
  if (themeChoice) return;
  document.documentElement.dataset.theme = event.matches ? 'dark' : 'light';
  updateThemeLabel();
});
amplitude.addEventListener('input', updateAmplitude);
applyLanguage(language);
