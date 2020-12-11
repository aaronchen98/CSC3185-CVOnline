## How to run
1. Install NodeJS and NPM from https://nodejs.org/en/download/
2. Use Aliyun NPM mirror from https://developer.aliyun.com/mirror/NPM
3. Open the root folder in Terminal and run `chmod 777 ./install.sh`
4. Run `sudo ./install.sh`
5. Run `npm start` (Once the installation is complete, skip the previous steps)

## How to add new page
1. Add a new JS file `src/pages/ExamplePage.js`. Use `src/pages/HomePage.js` as template
2. Add a new route entry with unique URL in `Routes.js`
3. Add a new navigation bar entry in `App.js`
