    function showSummary(id) {
      document.querySelectorAll('.summary > div').forEach(div => div.classList.remove('active'));
      const target = document.getElementById('summary-' + id);
      if (target) {
        target.classList.add('active');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }

    }


     function exportToPDF() {
  const content = document.getElementById('summaryContainer').innerHTML;
  const win = window.open('', '', 'height=800,width=800');
  win.document.write('<html><head><title>Download</title></head><body>');
  win.document.write(content);
  win.document.write('</body></html>');
  win.document.close();
  win.print();
}


 function toggleTheme() {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  if (current === 'dark') {
    html.removeAttribute('data-theme');
  } else {
    html.setAttribute('data-theme', 'dark');
  }
}


function openMenu() {
  const menu = document.querySelector(".topics");
  menu.style.display = "flex";

  const ham = document.querySelector(".ham-open");
  ham.style.display = "none";

  const close = document.querySelector(".ham-close");
  close.style.display = "flex";
}

function closeMenu() {
  const menu = document.querySelector(".topics");
  menu.style.display = "none";

    const ham = document.querySelector(".ham-open");
  ham.style.display = "flex";

  const close = document.querySelector(".ham-close");
  close.style.display = "none";
}
