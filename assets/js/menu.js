document.querySelectorAll('.menu-title').forEach(title => {
  title.addEventListener('click', () => {
    const submenu = title.nextElementSibling;
    submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
  });
});
