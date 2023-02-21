# 🪐 React-Spring을 타입스크립트를 이용하여 만든 연습 페이지입니다.

:octocat: 바로 가기 : https://light9639.github.io/React-Spring-Ts/

![light9639 github io_React-Spring-Ts_](https://user-images.githubusercontent.com/95972251/218046285-925e7a97-f171-45fb-8368-f77befc2cad2.png)

:sparkles: 🪐 React-Spring을 타입스크립트를 이용하여 만든 연습 페이지입니다. :sparkles:
## :tada: React 프로젝트 생성
- React 생성
```bash
npm create-react-app my-app
# or
yarn create react-app my-app
```

- vite를 이용하여 프로젝트를 생성하려면
```bash
npm create vite@latest
# or
yarn create vite
```
- 터미널에서 실행 후 프로젝트 이름 만든 후 React 선택, Typescirpt-SWC 선택하면 생성 완료.
## ☄️ 'react-spring', 'sass', 'react-router-dom' 관련 라이브러리 설치
- 리액트를 이용한 애니메이션을 만들 때 쓰는 `React-Spring`을 이용하여 애니메이션 효과를 구현할 것이다. 
- 스타일링은 `SCSS`를 이용하며, `react-router-dom`을 이용하여 라우팅 기능을 구현해보겠다. 그럼, 아래의 명령어로 라이브러리를 설치한다.
```bash
$ npm install @react-spring/parallax @react-spring/web react-use-gesture react-use-measure sass
# or
$ yarn add @react-spring/parallax @react-spring/web react-use-gesture react-use-measure sass
```
## ✒️ App.tsx, main.tsx, index.css 수정 및 작성
### ⚡ App.tsx
- `src/router` 폴더 안에 있는 컴포넌트들을 `import` 하여 라우팅 기능을 구현한다.
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
### ⚡ App.tsx
- `HashRouter`를 `import` 하여 `<App />` 하위 컴포넌트에서 라우팅 기능 구현.
- `Header` 컴포넌트를 `import` 하여 `HashRouter`에 넣어준다.
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

### ⚡ index.css
- 전체적인 `CSS` 스타일링하기.
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
## 📝 components 파일 속 Header.tsx, Style.module.scss 수정 및 작성
### ⚡ Header.tsx
- 'Header' 컴포넌트 안에 `<Link to="링크"></Link>`를 사용하여 라우팅 기능 구현.
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
### ⚡ Style.module.scss
- `Header.tsx`의 반응형 스타일 작성하기.
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

## ⚙️ 'src/router' 파일 속 수많은 컴포넌트 작성법.
- `router` 파일 속 컴포넌트 각각의 컴포넌트에서 확인하여 작성하면 된다.
