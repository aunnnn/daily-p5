import React, { Component } from 'react';
import Link from 'next/link'
import Meta from '../components/meta'

export default ({ children }) => (
  <div className="main">
    <div className="logo">
      <Link prefetch href="/"><a>daily p5</a></Link>
    </div>

    { children }

    { /* global styles and meta tags */ }
    <Meta />

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

      a {
        text-decoration: none;
        font-size: 2em;
      }

      a:active {
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
