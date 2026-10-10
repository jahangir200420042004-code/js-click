 const userNameEl = document.getElementById('userName');
  const statusEl = document.getElementById('status');
  const actionBtnEl = document.getElementById('actionBtn');


  userNameEl.textContent = 'Жоха';


  actionBtnEl.addEventListener('click', () => {
    statusEl.textContent = 'В сети';
    statusEl.style.color = 'green';
    actionBtnEl.style.display = 'none'; 
  });