// whatsapp-widget.js
(function(){
  const cfg = (window.IM_CONFIG||{});
  const n = (cfg.whatsappNumber||"").replace(/[^\d]/g,"");
  if(!n) return;
  const url = `https://wa.me/${n}?text=${encodeURIComponent(cfg.defaultMessage||"Hello")}`;
  const a = document.createElement('a');
  a.id = 'wa-fab';
  a.href = url; a.target = '_blank'; a.rel = 'noopener';
  a.ariaLabel = 'Chat with us on WhatsApp';
  a.innerHTML = `
    <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 .9a10.9 10.9 0 00-9.4 16.4L1 23l5-1.6A10.9 10.9 0 1012 .9zm6.4 15.5c-.3.8-1.7 1.5-2.3 1.5-.6 0-1.3.2-4.4-1.4-3.7-1.8-6-5.9-6.2-6.2s-.5-1.6-.1-2.4c.4-.7 1-1 .9-1.1 0 0 .1-.1.2-.1h.6c.2 0 .4 0 .5.4.2.5.7 1.7.8 1.8.1.2.1.3 0 .5-.1.2-.3.4-.5.6-.1.1-.2.3-.1.5.2.6.9 1.4 1.6 2.2 1.1 1.2 2.1 1.6 2.6 1.8.2.1.5.1.6 0 .2-.1.4-.5.6-.7.1-.2.3-.2.5-.1.2.1 1.5.7 1.8.8.2.1.4.1.5.2.1.2.1.5-.1.8z"/></svg>
    <span>Chat</span>`;
  document.addEventListener('DOMContentLoaded',()=>document.body.appendChild(a));
})();