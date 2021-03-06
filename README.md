# CVOline

Computer Vision homepage with demos.

![](homepage.jpg)

## How to run frontend
1. Install NodeJS and NPM from https://nodejs.org/en/download/
2. Use Aliyun NPM mirror from https://developer.aliyun.com/mirror/NPM
3. Open the `/frontend` folder in Terminal and run `npm install` or you can use `npm install --registry=https://registry.npm.taobao.org` to speed up

4. Run `npm start` (Once the installation is complete, skip the previous steps)

## How to run demo (backend)
1. Open the `/backend` folder in Terminal and run `npm install` or you can use `npm install --registry=https://registry.npm.taobao.org` to speed up
2. Install the cv demo package by running `pip install -r requirements.txt` in terminal. You can use `pip install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt` to speed up
3. Run `node app.js`

### GAN demo

1. Open the `/backend/server` folder in Terminal
2. `pip install -r requirements.txt` .     
	You can use `pip install -i https://pypi.tuna.tsinghua.edu.cn/simple -r requirements.txt` to speed up
3. `python serve.py`

## How to add new page
1. Add a new JS file `src/pages/ExamplePage.js`. Use `src/pages/HomePage.js` as template
2. Add a new route entry with unique URL in `Routes.js`
3. Add a new navigation bar entry in `App.js`

## Some considerations when writing a page
1. If you want to add a introduction at the beginning of the page, wrap it by `<div class="introduction">The introduction</div>`
2. If you wand to add a description of image or video, wrap it by `<div class="center"><div class="img">The description</div></div>`
3. Wrap title by `<hx>Title</hx>` where x = {1,2,3}, Wrap content by `<p>Content<\p>`
