# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

<br><br>

---

## Study React + TypeScript + CRA + Material UI

- ### CRA vs Next.js

  - CRA : CSR 기반 FE 프로젝트, Backend가 따로 존재
  - Next.js : SSR 기반 FE 프로젝틎, SEO(Search Engine Optimization), API 핸들링이 필요할 경우 사용
    - SEO는 SSR이 유리!

- ### React-Router-Dom [Outlet]

  - react-router-dom에서, 중첩 라우팅을 할 수 있도록 해주는 컴포넌트
  - 부모 경로와 일치하는 자식 경로를 렌더링하거나, 없
  - Outlet : react-router-dom에서, 중첩 라우팅을 할 수 있도록 해주는 컴포넌트

- ### createTheme vs useTheme
  - createTheme은 테마 생성 함수
  - ThemeProvider 컴포넌트로 children을 감쌀 경우, 해당 테마 적용
  - useTheme은 상위의 ThemeProvider를 상속
  - 참고 : https://velog.io/@soongle/mui-Theming-with-createTheme-ThemeProvider-useTheme
