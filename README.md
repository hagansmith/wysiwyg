# wysiwyg
## Synopsis
wysiwyg is an individual practice project working with arrays and writing content to the DOM using javascript. 

## What to expect
![Demo](https://raw.githubusercontent.com/hagansmith/wysiwyg/master/WYSIWYG.gif)


## Requirements

1. Create an array of objects that represents famous people (see structure below).
1. Create a text input in your DOM.
1. Beneath that, create a container, block element in your DOM.
1. Create a DOM element for each of the objects inside the container. Style your person elements however you like.
1. For every even numbered element, have a light yellow background.
1. For every odd numbered element, have a light blue background.
1. Each element's DOM structure should be as shown below.
1. When you click on one of the person elements, a dotted border should appear around it.
1. When you click on one of the person elements, the text input should immediately gain focus so that you can start typing.
1. When there is a highlighted person element, and you begin typing in the input box, the person's biography should be immediately bound to what you are typing, letter by letter.
1. When you press the enter/return key when typing in the input field, then the content of the input field should immediately be blank.

### How to run (Node must be installed on your machine):
1. Go to: `https://www.npmjs.com/package/http-server` and install "http-server".  
2. Navigate to the project folder in command line interface and type: `http-server -p 8080`  
3. This will show at: `http://localhost:8080` in your internet browser.

```
git clone git@github.com:hagansmith/wysiwyg.git
cd wysiwyg
npm install http-server -g
hs -c-1
```
This will show in your browser at: `http://localhost:8080`
