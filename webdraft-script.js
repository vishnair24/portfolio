document.addEventListener('DOMContentLoaded', () => {
  // Dynamic greeting based on current time
  const greetingEl = document.getElementById('wd-time-msg');
  if (greetingEl) {
    const currentHour = new Date().getHours();
    let statusText = 'Welcome!';
    if (currentHour < 12) statusText = 'Good morning, welcome to my site!';
    else if (currentHour < 18) statusText = 'Good afternoon, welcome to my site!';
    else statusText = 'Good evening, welcome to my site!';
    
    greetingEl.textContent = statusText;
  }

  // Visual mode switcher
  const modeBtn = document.getElementById('wd-action-btn');
  if (modeBtn) {
    modeBtn.addEventListener('click', () => {
      document.body.classList.toggle('wd-contrast-active');
    });
  }
});