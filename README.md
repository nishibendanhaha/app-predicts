# app-predicts
repo为 https://github.com/nishibendanhaha/app-web-services 配套的前端UI界面，需要和后端web服务一起配套使用，用于展示[行人重识别模型AGW](https://github.com/mangye16/ReID-Survey/tree/master)/Clip大模型等模型的预测结果。
## 使用方法
repo含有项目需要的依赖包文件package.json
```
git clone https://github.com/nishibendanhaha/app-predicts
cd app-predicts
npm install
npm start
```
##### 注意： 如果项目启动报错，显示找不到某个包的时候，可以手动使用“npm install 需要安装的包名 --save”安装的同时，将信息写入package.json中 （有的依赖包可能在安装包的时候并未加“--save”保存到package.json中）
## 使用界面
ReID AGW模型使用界面如下所示：
<img width="1434" alt="image" src="https://github.com/nishibendanhaha/app-predicts/assets/75249365/40eeccae-cd4a-478d-b723-a7ed6ddcf5d7">
Clip模型使用界面如下所示：
<img width="1430" alt="image" src="https://github.com/nishibendanhaha/app-predicts/assets/75249365/58b96b32-6134-40e1-80af-0701d56809e4">
##### 注意：目前展示案例基于query gallery为 https://github.com/nishibendanhaha/app-web-services/tree/main/test_images 中的少量图片产生


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
