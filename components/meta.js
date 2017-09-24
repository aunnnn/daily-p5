import Head from 'next/head';

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>

  {/* global styles */}
  <style jsx global>{`
    * {
      margin: 0;
      box-sizing: border-box;
    }

    body {
      font: 16px Verdana;
    }
    
    a {
      text-decoration: none;
    }

    a:hover {
      color: blue;
    }

    .primary-button {
      display: inline-block !important;
      padding: 2px 4px !important;
      background-color: blue;
      color: white !important;
      cursor: pointer;
      border: none;
      outline: inherit;
      font: 18px "Courier New";
    }

    .primary-button:disabled, 
    .primary-button[disabled] {
      background-color: grey;
      cursor: default;
    }
  `}</style>
  </div>
)
