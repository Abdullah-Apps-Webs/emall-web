// Splash screen timeout
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
    document.getElementById('app').innerHTML = `
      <h2>اختر دورك</h2>
      <button onclick="loadRole('customer')">عميل</button>
      <button onclick="loadRole('driver')">سائق</button>
      <button onclick="loadRole('admin')">مدير</button>
    `;
  }, 2000);
});

// Role-based content loader
function loadRole(role) {
  let content = '';
  switch (role) {
    case 'customer':
      content = '<h3>مرحبا أيها العميل</h3><p>ابدأ التسوق الآن.</p>';
      break;
    case 'driver':
      content = '<h3>مرحبا أيها السائق</h3><p>تحقق من الطلبات الجديدة.</p>';
      break;
    case 'admin':
      content = '<h3>مرحبا أيها المدير</h3><p>لوحة التحكم جاهزة.</p>';
      break;
  }
  document.getElementById('app').innerHTML = content;
}
