// Apply the theme before the first paint. Preferences remain optional in private browsing.
const preferences = {
  get(key) {
    try { return localStorage.getItem('victor-portfolio:' + key); }
    catch { return null; }
  },
  set(key, value) {
    try { localStorage.setItem('victor-portfolio:' + key, value); }
    catch { /* Current-page controls still work without storage. */ }
  }
};
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
const savedTheme = preferences.get('theme');
document.documentElement.dataset.theme = ['dark', 'light'].includes(savedTheme)
  ? savedTheme : (systemTheme.matches ? 'dark' : 'light');
