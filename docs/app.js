'use strict';
(() => {
  const checks = [...document.querySelectorAll('.prep-check')];
  const updateProgress = () => {
    const completed = checks.filter(input => input.checked).length;
    document.getElementById('progress').value = completed;
    document.getElementById('progress-text').textContent = `已確認 ${completed} / ${checks.length} 項`;
  };
  checks.forEach(input => input.addEventListener('change', updateProgress));
  window.addEventListener('pageshow', updateProgress);
  function validHttps(value) {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' && !url.username && !url.password ? url.href : null;
    } catch { return null; }
  }
  const config = window.DEST_CONFIG || {};
  const lottery = validHttps(config.lotteryUrl);
  if (lottery) document.getElementById('lottery-link').href = lottery;
  const pedigree = validHttps(config.pedigreeUrl);
  if (pedigree) {
    const link = document.getElementById('pedigree-link');
    link.href = pedigree;
    link.hidden = false;
    document.getElementById('pedigree-unavailable').hidden = true;
    document.getElementById('pedigree-status').textContent = '系統入口';
    document.getElementById('pedigree-note').textContent = '在新分頁開啟，保留此工作台';
  }
  updateProgress();
})();
