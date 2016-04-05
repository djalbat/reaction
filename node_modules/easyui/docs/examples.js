'use strict';

define(function(require) {

  var easyui = require('./../dist/easyui'),
      Element = easyui.Element,
      Div = easyui.Div,
      Body = easyui.Body,
      Link = easyui.Link,
      Input = easyui.Input,
      Button = easyui.Button,
      Select = easyui.Select,
      Checkbox = easyui.Checkbox,
      TextArea = easyui.TextArea;

  var link = new Link('#link', function(href) {
    console.log('Link click with href: ' + href);
  });

  var input = new Input('#input', function(value) {
    console.log('Input changed with value: ' + value);
  });

  var button = new Button('#button', function() {
    console.log('Button click');
  });

  var select = new Select('#select', function(selectedOptionValue) {
    console.log('Select changed with selected option value: ' + selectedOptionValue)
  });

  var checkbox = new Checkbox('#checkbox', function(checked) {
    console.log('Checkbox change with checked: ' + checked);
  });

  var textArea = new TextArea('#textarea'),
      textAreaIsFocused = textArea.hasFocus();

  textArea.onFocus(function() {
    console.log('Text area has gained the focus');
  });

  textArea.onBlur(function() {
    console.log('Text area has lost the focus');
  });

  textArea.onChange(function(value) {
    console.log('The value of the text area has changed to: ' + value)
  });

  textArea.onScroll(function(scrollTop, scrollLeft) {
    console.log('The text area has been scrolled to: (' + scrollTop + ',' + scrollLeft +')')
  });

  textAreaIsFocused ?
    console.log('Initially the text area has the focus') :
      console.log('Initially the text area does not have the focus');

  textArea.setValue('Initial value');

  checkbox.check();

  checkbox.focus();

  var br1 = Element.fromHTML('<br/>'),
      br2 = br1.clone(),
      br3 = br2.clone(),
      br4 = br3.clone();

  var clonedLink = Link.clone('#link', function(href) {
    console.log('Cloned link click with href: ' + href);
  });

  clonedLink.removeAttribute('id');
  clonedLink.html('Cloned link');

  var clonedButton = button.clone(function() {
    console.log('Cloned button click');
  });

  clonedButton.removeAttribute('id');
  clonedButton.html('Cloned button');

  var selectFromHTML = Select.fromHTML('<select><option>a</option><option>b</option><option>c</option></select>', function(selectedOptionValue) {
    console.log('Select from HTML changed with selected option value: ' + selectedOptionValue)
  });

  selectFromHTML.setSelectedOptionByValue('c');

  var checkboxFromHTML = Checkbox.fromHTML('<input type="checkbox"/>', function(checked) {
    console.log('Checkbox from HTML click with checked: ' + checked);
  });

  checkbox.appendAfter(br1);
  br1.appendAfter(clonedLink);
  clonedLink.appendAfter(br2);
  br2.appendAfter(clonedButton);
  clonedButton.appendAfter(br3);
  br3.appendAfter(selectFromHTML);
  selectFromHTML.appendAfter(br4);
  br4.appendAfter(checkboxFromHTML);

  var body = new Body(),
      outerDiv = Div.fromHTML('<div><div id="firstDiv"></div><div id="secondDiv"><div id="fourthDiv"></div></div><div id="thirdDiv"><div id="fifthDiv"></div></div></div>');

  body.append(outerDiv);

  new Div('#firstDiv');
  new Div('#thirdDiv');

  var outDivChildElements = outerDiv.childElements();

  outDivChildElements.forEach(function(outDivChildElement) {
    var outDivChildElementId = outDivChildElement.getAttribute('id');

    console.log(outDivChildElementId);
  });

  var fourthDiv = new Div('#fourthDiv'),
      fifthDiv = new Div('#fifthDiv'),
      fourthDivParentElement = fourthDiv.parentElement(),
      fourthDivParentElements = fourthDiv.parentElements(),
      fifthDivParentElement = fifthDiv.parentElement(),
      fourthDivParentElementsLength = fourthDivParentElements.length,
      fifthDivParentElementIdAttr = fifthDivParentElement.getAttribute('id');

  console.log('The parent element of the fourth div is ' + fourthDivParentElement);
  console.log('The \'id\' attribute of the parent element of the fifth div is \'' + fifthDivParentElementIdAttr + '\'');
  console.log('There are ' + fourthDivParentElementsLength + ' parent elements of the fourth div');
});
