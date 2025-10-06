# Info Managements - WhatsApp Auto‑Open Pack

This pack updates your site to use WhatsApp **+1 213 642 5934** and auto-opens WhatsApp for visitors (once per session).

Files:
- theme.css — same premium style
- site-config.js — number set to +12136425934
- whatsapp-widget.js — floating WhatsApp button
- auto-open-whatsapp.js — redirects to WhatsApp ~0.9s after load (once per session)
- _headers — extra security headers

## Install
1) Upload all files to the **root** of your GitHub repo (replace if prompted).
2) Ensure these tags are present before `</body>` in `index.html`:

```html
<link rel="stylesheet" href="/theme.css">
<script src="/site-config.js"></script>
<script src="/whatsapp-widget.js" defer></script>
<script src="/auto-open-whatsapp.js" defer></script>
```

Notes:
- Auto-open uses a same-tab redirect to avoid popup blockers and only runs **once per browser session**.
- To disable auto-open later, simply remove the `<script src="/auto-open-whatsapp.js" defer></script>` line.
