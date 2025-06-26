// components/TawkToChat.js
'use client'
import { useEffect } from 'react';

export default function TawkToChat() {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    
    // Make Tawk_API globally accessible
    window.Tawk_API = Tawk_API;
    
    (function(){
      var s1 = document.createElement("script");
      var s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/67c83bdebd0914190e098188/1ilj2jnh3';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin','*');
      s0.parentNode.insertBefore(s1,s0);
    })();
  }, []);

  return null;
}