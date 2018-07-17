# Pool Math

> A Vue.js project

This is a Vue.js application that allows a user to practice math problems that they need to be a successful pool operator.

#### Deployed at https://pool-math.firebaseapp.com

# features

* Random problem generator - after answering a problem correctly, the user has the option to create a new problem. The new problem will be the same type as the current problem but have different numbers or other factors.  This allows the user to create an (almost) unlimited number of problems for each problem type.

* Utilizes Vue-Router for routing

* Utilizes Vuex for state management

* Utilizes Vuetify for UI features

* Re-usable components utilized where possible

## IE 11 and this project

This project was initially compatible with Internet Explorer 11 with the help of ES-6 Promise and Babel Polyfills.  I had to later remove these becase they caused other issues.  I have decided that I will not be adding them back into this project.

I know that some developers may consider it a bad practice not to support IE.  So much development time and energy goes in to IE compatibility that I believe it is time for developers to stop supporting it.  With the upcoming changes to Vue.js 3.x, including proxies which are not polyfillable (is that a word?) it is time for IE to take it's place in the history books.

## contribute to this project

``` bash
# clone the repository
git clone https://github.com/SmellydogCoding/pool-math.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

