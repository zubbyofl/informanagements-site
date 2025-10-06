// auto-open-whatsapp.js
(function(){
  const cfg = (window.IM_CONFIG||{});
  const n = (cfg.whatsappNumber||"").replace(/[^\d]/g,"");
  if(!n) return;
  const url = `https://wa.me/${n}?text=${encodeURIComponent(cfg.defaultMessage||"Hello")}`;
  const KEY = "im_wa_redirect_done";
  document.addEventListener('DOMContentLoaded', function(){
    try{
      if(sessionStorage.getItem(KEY)) return;
      sessionStorage.setItem(KEY, "1");
      // Redirect the current tab after a short delay so users see the brand first
      setTimeout(function(){
        location.href = url;
      }, 900); // 0.9s
    }catch(e){/* ignore */}
  });
})();