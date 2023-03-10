# ๐ช React-Spring์ ํ์์คํฌ๋ฆฝํธ๋ฅผ ์ด์ฉํ์ฌ ๋ง๋  ์ฐ์ต ํ์ด์ง์๋๋ค.

:octocat: ๋ฐ๋ก ๊ฐ๊ธฐ : https://light9639.github.io/React-Spring-Ts/

![light9639 github io_React-Spring-Ts_](https://user-images.githubusercontent.com/95972251/218046285-925e7a97-f171-45fb-8368-f77befc2cad2.png)

:sparkles: ๐ช React-Spring์ ํ์์คํฌ๋ฆฝํธ๋ฅผ ์ด์ฉํ์ฌ ๋ง๋  ์ฐ์ต ํ์ด์ง์๋๋ค. :sparkles:
## :tada: React ํ๋ก์ ํธ ์์ฑ
- React ์์ฑ
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite๋ฅผ ์ด์ฉํ์ฌ ํ๋ก์ ํธ๋ฅผ ์์ฑํ๋ ค๋ฉด
```bash
npm create vite@latest
# or
yarn create vite
```
- ํฐ๋ฏธ๋์์ ์คํ ํ ํ๋ก์ ํธ ์ด๋ฆ ๋ง๋  ํ React ์ ํ, Typescirpt-SWC ์ ํํ๋ฉด ์์ฑ ์๋ฃ.
## โ๏ธ 'react-spring', 'sass', 'react-router-dom' ๊ด๋ จ ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น
- ๋ฆฌ์กํธ๋ฅผ ์ด์ฉํ ์ ๋๋ฉ์ด์์ ๋ง๋ค ๋ ์ฐ๋ `React-Spring`์ ์ด์ฉํ์ฌ ์ ๋๋ฉ์ด์ ํจ๊ณผ๋ฅผ ๊ตฌํํ  ๊ฒ์ด๋ค. 
- ์คํ์ผ๋ง์ `SCSS`๋ฅผ ์ด์ฉํ๋ฉฐ, `react-router-dom`์ ์ด์ฉํ์ฌ ๋ผ์ฐํ ๊ธฐ๋ฅ์ ๊ตฌํํด๋ณด๊ฒ ๋ค. ๊ทธ๋ผ, ์๋์ ๋ช๋ น์ด๋ก ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ค์นํ๋ค.
```bash
$ npm install @react-spring/parallax @react-spring/web react-use-gesture react-use-measure sass react-router-dom
# or
$ yarn add @react-spring/parallax @react-spring/web react-use-gesture react-use-measure sass react-router-dom
```
## โ๏ธ App.tsx, main.tsx, index.css ์์  ๋ฐ ์์ฑ
### โก App.tsx
- `src/router` ํด๋ ์์ ์๋ ์ปดํฌ๋ํธ๋ค์ `import` ํ์ฌ ๋ผ์ฐํ ๊ธฐ๋ฅ์ ๊ตฌํํ๋ค.
```typescript
import React, { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import Auto from "@router/Auto/Auto";
import Scroll from "@router/Scroll/Scroll";
import ParallaxPage from "@router/Parallax/Parallax";
import Card from "@router/Card/Card";
import SvgFilter from "@router/SvgFilter/SvgFilter";
import Slider from "@router/Slider/Slider";
import Flip from "@router/Flip/Flip";
import KeyFrames from "@router/KeyFrames/KeyFrames";

export default function App(): JSX.Element {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Auto />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Slider" element={<Slider />} />
        <Route path="/SvgFilter" element={<SvgFilter />} />
        <Route path="/Flip" element={<Flip />} />
        <Route path="/KeyFrames" element={<KeyFrames />} />
        <Route path="/Scroll" element={<Scroll />} />
        <Route path="/Parallax" element={<ParallaxPage />} />
      </Routes>
    </React.Fragment>
  )
}
```
### โก App.tsx
- `HashRouter`๋ฅผ `import` ํ์ฌ `<App />` ํ์ ์ปดํฌ๋ํธ์์ ๋ผ์ฐํ ๊ธฐ๋ฅ ๊ตฌํ.
- `Header` ์ปดํฌ๋ํธ๋ฅผ `import` ํ์ฌ `HashRouter`์ ๋ฃ์ด์ค๋ค.
```typescript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import Header from "@components/Header";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HashRouter>
      <Header />
      <App />
    </HashRouter>
  </React.StrictMode>,
)
```

### โก index.css
- ์ ์ฒด์ ์ธ `CSS` ์คํ์ผ๋งํ๊ธฐ.
```css
html,
body,
#root {
  height: 100%;
  width: 100%;
}

body {
  font-family: system-ui;
  margin: 0;
}

*,
*:after,
*:before {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}
```
## ๐ components ํ์ผ ์ Header.tsx, Style.module.scss ์์  ๋ฐ ์์ฑ
### โก Header.tsx
- 'Header' ์ปดํฌ๋ํธ ์์ `<Link to="๋งํฌ"></Link>`๋ฅผ ์ฌ์ฉํ์ฌ ๋ผ์ฐํ ๊ธฐ๋ฅ ๊ตฌํ.
```typescript
import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Style.module.scss";

export default function Header(): JSX.Element {
    return (
        <div className={styles.Header}>
            <Link to="/"><span>Auto</span></Link>
            <Link to="/Card"><span>Card</span></Link>
            <Link to="/Slider"><span>Slider</span></Link>
            <Link to="/SvgFilter"><span>SvgFilter</span></Link>
            <Link to="/Flip"><span>Flip</span></Link>
            <Link to="/KeyFrames"><span>KeyFrames</span></Link>
            <Link to="/Scroll"><span>Scroll</span></Link>
            <Link to="/Parallax"><span>Parallax</span></Link>
        </div>
    )
}
```
### โก Style.module.scss
- `Header.tsx`์ ๋ฐ์ํ ์คํ์ผ ์์ฑํ๊ธฐ.
```scss
@mixin mobile {
    @media (max-width: 767px) {
        @content;
    }
}

.Header {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    position: absolute;
    top: 3%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;

    @include mobile {
        max-width: 98%;
        width: 100%;
        gap: 5px;
        margin: 0 auto;
        flex-wrap: wrap;
    }
}

.Header span {
    font-size: 18px;
    font-weight: 600;
    color: #3b82f6;

    @include mobile {
        font-size: 14px;
    }
}
```

## โ๏ธ 'src/router' ํ์ผ ์ ์๋ง์ ์ปดํฌ๋ํธ ์์ฑ๋ฒ.
- `router` ํ์ผ ์ ์ปดํฌ๋ํธ ๊ฐ๊ฐ์ ์ปดํฌ๋ํธ์์ ํ์ธํ์ฌ ์์ฑํ๋ฉด ๋๋ค.

## ๐ ์ถ์ฒ
- <a href="https://www.react-spring.dev/examples">React-Spring Examples</a>
