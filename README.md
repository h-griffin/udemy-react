## udemy react app guide

## Useful Resources & Links
[create-react-app: ](https://github.com/facebookincubator/create-react-app)
[Introducing JSX: ](https://reactjs.org/docs/introducing-jsx.html)
[Rendering Elements: ](https://reactjs.org/docs/rendering-elements.html)
[Components & Props: ](https://reactjs.org/docs/components-and-props.html)
[Listenable Events: ](https://reactjs.org/docs/events.html)


### set up
> $ npm install create-react-app -g
> $ create-react-app udemy-react --scripts-version 1.1.5
> $ npm start

## file structure
**node_modules**
dont touch

**public**
- root folder that gets surfed by web server, holds files to edit
- only one html file
    - div id root : attach react things here to the html page

**src** :react application
- index.js gives access to root div in html
    imports app object from app file
    render one root component (app)
- app.js 


## edits
- app.js - remove app div and say hello world
- remove logo.svg
- clear app.css
app.js remove logo import
- app.js app component
    - component must return one root element (big div)
    - return ( more than one line )
- new person folder
    components capital folders
- add state to class to use change name button
- add button event handler
    - do not use () when referring to event handler, use reference only do not invoke
- function based components with hooks
    - replace state
- class based components modify state
- to use onclick in coponent, pass ref in as prop
- inline and component styling

- radium

- styled-components

> $ npm run eject

**webpack.config.dev.js**
```
            test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIdentName: '[name]__[local]__[hash:base64:5]'
                },
              },
```
**webpack.config.prod.js**

```
            test: /\.css$/,
            loader: ExtractTextPlugin.extract(
              Object.assign(
                {
                  fallback: {
                    loader: require.resolve('style-loader'),
                    options: {
                      hmr: false,
                    },
                  },
                  use: [
                    {
                      loader: require.resolve('css-loader'),
                      options: {
                        importLoaders: 1,
                        minimize: true,
                        sourceMap: shouldUseSourceMap,
                        modules: true,
                        localIdentName: '[name]__[local]__[hash:base64:5]'
                      },
                    },
```