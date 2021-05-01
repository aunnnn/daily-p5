import React, { Component } from 'react';
import Link from 'next/link';

const Main = ({ children }) => (
  <div className="main">
    <div className="logo">
      <Link href="/"><a>daily p5</a></Link>
    </div>

    { children }

    { /* local styles */ }
    <style jsx>{`
      .main {
        padding: 25px 50px;
      }

      .logo {
        padding-bottom: 20px;
      }

      .logo a:hover {
        color: black;
      }

      .logo a {
        text-decoration: none;
        font-size: 2em;
      }

      .logo a:active {
        color: black;
      }

      @media (max-width: 500px) {
        .main {
          padding: 25px 15px;
        }

        .logo {
          padding-bottom: 20px;
        }
      }
    `}</style>
  </div>
)
export default Main;