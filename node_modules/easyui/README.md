# EasyUI

A V-framework.

EasyUI is an MVC framework without the M and without the C. It's without a model, only abstracting away from the view, namely the document object model. There is some irony here. It's without a controller, or whatever. It will not help you with the architecture of your large application. It is about the leaves of an application, not its branches. 

It leverages jQuery to provide a very basic set of classes for DOM elements such as buttons, links, etc. It covers up jQuery's idiosyncratic syntax and is more readable. It allows you to associate JavaScript classes directly with static HTML, you don't have to dynamically create DOM elements unless you want to. Few frameworks allow you to do this without fuss.

It's liberating to cast off the dogma that says that an application's view and model always have to be two sides of the exact same coin. And you won't have to wade through hundreds of lines of obscure source code when things slow down or start to go wrong. The nearest thing to EasyUI is ReactJS but EasyUI is an order of magnitude less complex. 

## Related projects

- [EasyUI-Layout](https://github.com/djalbat/EasyUI-Layout) Layout components that work with CSS flexbox.
- [EasyUI-Explorer](https://github.com/djalbat/EasyUI-Explorer) A file explorer with drag and drop functionality. 
- [Florence](https://github.com/jecs-imperial/Florence) A collaborative proof assistant that depends on all three EasyUI projects. 
 
## Installation

If you're running [Node.js](http://nodejs.org) you can install EasyUI with [npm](https://www.npmjs.com/):

    npm install easyui

Client-side you can take the `easyui.js` file in the `dist/` folder put it somewhere and reference it via the usual script element:
 
```html
<script src="scripts/lib/easyui.js"> </script>
```

This will give you a global `easyui` variable which you use directly:
  
```js
var Button = easyui.Button;
```
 
If you're using AMD require client-side or CommonJS server-side the syntax for requiring EasyUI is the same:

```js
var easyui = require('lib/easyui'),
    Select = easyui.Select,
    Checkbox = easyui.Checkbox;
```

## Documentation

See the `examples.html` file in the `docs/` folder for some examples.

#### Working example

Here an element corresponding to the `body` DOM element is constructed and an outer `div` element is appended to that. `Div` elements corresponding to two of the three inner `div`s are then constructed. Note there are no references. These can be recovered by iterating over the child elements of the outer `div`. Note also that there is no second inner `div`, since no corresponding `Div` element has been created for it.   

```js
var body = new Body(),
    outerDiv = Div.fromHTML('<div><div id="firstDiv"></div><div id="secondDiv"></div><div id="thirdDiv"></div></div>');

body.append(outerDiv);

new Div('#firstDiv');
new Div('#thirdDiv');

var outDivChildElements = outerDiv.childElements();

outDivChildElements.forEach(function(outDivChildElement) {
  var outDivChildElementId = outDivChildElement.getAttribute('id');

  console.log(outDivChildElementId);    // firstDiv, thirdDiv
});
```

Essentially you bind instances of EasyUI classes to DOM elements via jQuery, making use of jQuey's selector syntax. 

In the [EasyUI-Explorer](https://github.com/djalbat/EasyUI-Explorer) project this approach is used to good effect. The explorer has no model as such, just a nested collection of elements bound to the DOM. One way to think of it is as a widget for viewing and manipulating file paths. The files themselves are part of the application's model but they are quite separate from the explorer, held in an array somewhere else in fact. 

This is the EasyUI approach, not binding an application's model and view tightly unless it makes sense to do so. 

#### Creating elements 

You can pass jQuery selectors to constructors:

```js
var link = new Link('#link', function(href) {
  console.log('Link click with href ' + href);
});
```

Or you can use HTML snippets with the `fromHTML()` factory method of any relevant class:

```js
var checkboxFromHTML = Checkbox.fromHTML('<input type="checkbox"/>');
```

If constructors take change or click handlers you can pass these to `fromHTML()` methods.

#### Cloning elements

You can call the `clone()` method of an element. If your element has an `id` attribute it's best to remove this from the cloned element:
 
```js
var button = new Button('#button'),
    clonedButton = button.clone();
     
clonedButton.removeAttribute('id');
```

You can also use the `clone()` factory methods of the relevant classes and pass jQuery selectors. Again remove the `id` attribute from the cloned element if necessary:

```js
var clonedButton = Button.clone('#button');
     
clonedButton.removeAttribute('id');
```

When you clone an existing element you will need to re-register any click or change handlers. You can pass these straight to the `clone()` methods if you like.

#### Standard methods

Each element has the following methods. These do nothing much apart from ape jQuery functionality:

- `show`
- `hide`
- `enable`
- `disable`
- `getWidth`
- `getHeight`
- `setWidth`
- `setHeight`
- `getAttribute`
- `addAttribute`
- `removeAttribute`
- `prependBefore`
- `appendAfter`
- `prepend`
- `append`
- `detach`
- `remove`
- `hasClass`
- `addClass`
- `removeClass`
- `removeClasses`
- `html`
- `css`
- `on`

Each input element has the following additional methods:

- `hasFocus`
- `onFocus`
- `onBlur`
- `focus`

#### Other shared methods

- `getBounds`, returns an instance of the `Bounds` class with the `top`, `left`, `bottom` and `right` bounds of the element.
- `onMouseXXX`, each apes jQuery functionality except that it calls the handler with `mouseTop`, `mouseLeft` and `mouseButton` rather than the event object. If you want the event object, use the `on()` method. The value of the `mouseButton` argument is either `Element.LEFT_MOUSE_BUTTON`, `Element.MIDDLE_MOUSE_BUTTON` or `Element.RIGHT_MOUSE_BUTTON`.
- `childElements` returns an array containing all the immediate descendant elements, taking an optional selector
- `findElements` returns an array containing all the descendant elements, taking an optional selector
- `parentElement` returns the immediate ascendant element or null, taking an optional selector
- `parentElements` returns an array containing all the ascendant elements, taking an optional selector

- `sameAs` returns true if the argument and instance share the same DOM element.

#### Other methods

The `Input` and `TextArea` classes both have the following methods:

- `onChange` takes a handler which is invoked every time the value of the element changes by way of a keypress. Note that this is different from the jQuery functionality.
- `getSelectionStart`
- `getSelectionEnd`

The `TextArea` class has the following methods:
 
- `onScroll` takes a handler which is invoked when the text area is scrolled
- `getScrollTop` 
- `getScrollLeft` 
- `setScrollTop` 
- `setScrollLeft`
 
 The `Window`

The methods to add elements to the DOM are hopefully intuitive. Note the difference between the `append()` and `appendAfter()` methods. 

```js
var button = Button.fromHTML('<button/>'),
    select = Select.fromHTML('<select><option>a</option></select>');
    
select.appendAfter(button); // what you want
select.append(button); // probably not what you want
```

The `appendAfter()` call above results in the following HTML:

```html
<select><option>a</option></select></button>
```

The `append()` call above results in the following HTML and is probably not what you want in this instance:

```html
<select><option>a</option></button></select>
```

Similarly for the `prepend()` and `prependBefore()` methods.

#### Supported elements:

- `window`
- `Body`
- `Div`
- `Button`
- `Checkbox`
- `TextArea`
- `Input`
- `Link`
- `Select`

The `Window` class is not exported, only the single `window` instance.
Obviously the list is incomplete. Use the `Element` class if there is no relevant class, submit a pull request or roll your own.

#### Rolling your own elements

This is easily done. We take the `Checkbox` class as an example. Use the `clone()` factory method of the `Element` class to create your own element, passing it your class followed by all the arguments for its constructor:
 
```js
Checkbox.clone = function(selectorOr$Element, clickHandler) {
  return Element.clone(Checkbox, selectorOr$Element, clickHandler);
};
```

The `fromHTML()` method is also boilerplate:

```js
Checkbox.fromHTML = function(html, clickHandler) {
  return Element.fromHTML(Checkbox, html, clickHandler);
};
```

When writing the constructor, the `Element' constructor from within your own:

```js
var Checkbox = function(selectorOr$Element, clickHandler) {
  inherits(this, new Element(selectorOr$Element));

  ...
};
```

The first argument should be `selectorOr$Element` which you don't have to worry about but should pass straight to the constructor of the `Element` class.

You can also create a `clone()` method by passing the private `$element` property to the `clone()` factory method. 

```js
Checkbox.prototype = {
  clone: function(clickHandler) { return Checkbox.clone(this.$element, clickHandler); },
  
  ...
  
  isChecked: function() {
    return this.$element.is(':checked');
  }
};
```

Note that you can also use the `$element` property to ape jQuery functionality, as the `isChecked()` method shows.
    
## Contact

- james.smith@djalbat.com
- http://djalbat.com
