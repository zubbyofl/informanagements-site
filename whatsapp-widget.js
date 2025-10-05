
(function(){
  try {
    var cfg = (window.IM_CONFIG||{});
    var num = (cfg.whatsappNumber||"").replace(/[^0-9]/g, "");
    var msg = encodeURIComponent(cfg.whatsappMessage || "Hello Info Managements — I’d like to talk.");
    if(!num){ return; }
    var href = "https://wa.me/" + num + "?text=" + msg;

    var btn = document.createElement('a');
    btn.href = href;
    btn.setAttribute('target','_blank');
    btn.setAttribute('aria-label','Chat on WhatsApp');
    btn.style.position = 'fixed';
    btn.style.right = '18px';
    btn.style.bottom = '18px';
    btn.style.width = '56px';
    btn.style.height = '56px';
    btn.style.borderRadius = '50%';
    btn.style.background = '#25D366';
    btn.style.boxShadow = '0 8px 18px rgba(0,0,0,.2)';
    btn.style.display = 'flex';
    btn.style.alignItems = 'center';
    btn.style.justifyContent = 'center';
    btn.style.zIndex = '9999';
    btn.style.textDecoration = 'none';

    // WA icon (inline SVG)
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32" fill="#fff"><path d="M19.11 17.53c-.27-.13-1.61-.79-1.86-.88-.25-.09-.43-.13-.61.13-.18.27-.7.87-.86 1.05-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.17-1.34-.8-.71-1.35-1.58-1.51-1.84-.16-.27-.02-.41.12-.54.12-.12.27-.32.4-.48.13-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.61-1.47-.84-2.02-.22-.53-.45-.46-.61-.47l-.52-.01c-.18 0-.48.07-.73.34s-.96.94-.96 2.28c0 1.34.98 2.63 1.12 2.81.14.18 1.91 2.91 4.62 4.08.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.61-.66 1.84-1.3.23-.64.23-1.19.16-1.3-.07-.11-.25-.18-.52-.31z"/><path d="M26.65 5.35C23.78 2.48 20.02 1 16 1 7.72 1 1 7.72 1 16c0 2.63.69 5.17 2 7.41L1 31l7.78-2.04C11.94 30.3 13.95 31 16 31c8.28 0 15-6.72 15-15 0-4.02-1.48-7.78-4.35-10.65zM16 28.5c-1.82 0-3.59-.49-5.14-1.42l-.37-.22-4.62 1.21 1.23-4.5-.24-.38C5.92 21.55 5.5 18.79 5.5 16 5.5 9.1 11.1 3.5 18 3.5c2.76 0 5.36 1.08 7.32 3.04C27.28 8.5 28.5 12.12 28.5 16c0 6.9-5.6 12.5-12.5 12.5z"/></svg>';

    document.addEventListener('DOMContentLoaded', function(){
      document.body.appendChild(btn);
    });
  } catch(e){ /* no-op */ }
})(); 
