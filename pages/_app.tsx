import 'tippy.js/animations/scale.css';
import 'tippy.js/dist/tippy.css';
import '../styles/main.css';
import React from 'react';

export default function MyApp({ Component, pageProps }: any) {
  return (
    <div className="app">
          <Component {...pageProps} />
    </div>
  );
}
