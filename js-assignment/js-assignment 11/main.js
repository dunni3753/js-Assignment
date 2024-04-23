//1 Mouse Events
// 1 click event
document.getElementById('myButton').addEventListener('click', function() {
  alert('Button clicked!');
});

document.getElementById('myLink').addEventListener('click', function() {
  console.log('Link clicked!');
});

document.getElementById('myDiv').addEventListener('click', function() {
  console.log('Div clicked!');
});


// 2 Double Click Event
document.getElementById('myElement').addEventListener('dblclick', function() {
  alert('Element double-clicked!');
});

document.getElementById('myImage').addEventListener('dblclick', function() {
  console.log('Image double-clicked!');
});

document.getElementById('myParagraph').addEventListener('dblclick', function() {
  console.log('Paragraph double-clicked!');
});


// 3 Mouseover Event
document.getElementById('myElement').addEventListener('mouseover', function() {
  console.log('Mouse over the element!');
});

document.getElementById('imageContainer').addEventListener('mouseover', function() {
  console.log('Mouse over the image container!');
});

document.getElementById('menuButton').addEventListener('mouseover', function() {
  console.log('Mouse over the menu button!');
});


// 4 Mouseout Event
document.getElementById('myElement').addEventListener('mouseout', function() {
  console.log('Mouse out of the element!');
});

document.getElementById('menuButton').addEventListener('mouseout', function() {
  console.log('Mouse out of the menu button!');
});

document.getElementById('imageContainer').addEventListener('mouseout', function() {
  console.log('Mouse out of the image container!');
});


// 5 Mousemove Event
document.getElementById('trackingElement').addEventListener('mousemove', function() {
  console.log('Mouse moving over the element!');
});

document.getElementById('canvas').addEventListener('mousemove', function() {
  console.log('Mouse moving over the canvas!');
});

document.getElementById('header').addEventListener('mousemove', function() {
  console.log('Mouse moving over the header!');
});


// 2 Keyboard events
// 1 Keydown Event
document.addEventListener('keydown', function(event) {
  console.log('Key pressed: ' + event.key);
});

document.getElementById('textInput').addEventListener('keydown', function(event) {
  console.log('Key pressed in the text input: ' + event.key);
});

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    console.log('Enter key pressed!');
  }
});

// 2 Keyup Event
document.addEventListener('keyup', function(event) {
  console.log('Key released: ' + event.key);
});

document.getElementById('textInput').addEventListener('keyup', function(event) {
  console.log('Key released in the text input: ' + event.key);
});

document.addEventListener('keyup', function(event) {
  if (event.key === 'Escape') {
    console.log('Escape key released!');
  }
});


// 3 Keypress Event (deprecated, but still works)
document.addEventListener('keypress', function(event) {
  console.log('Key pressed: ' + event.key);
});

document.getElementById('textInput').addEventListener('keypress', function(event) {
  console.log('Key pressed in the text input: ' + event.key);
});

document.addEventListener('keypress', function(event) {
  if (event.key === 'A') {
    console.log('A key pressed!');
  }
});


// 3 Form Events
// 1 Submit Event
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted!');
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Login form submitted!');
});

document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log('Form submitted!');
});


// 2 Change Event
document.getElementById('myInput').addEventListener('change', function() {
  console.log('Input value changed!');
});

document.getElementById('mySelect').addEventListener('change', function() {
  console.log('Select option changed!');
});

document.getElementById('myCheckbox').addEventListener('change', function() {
  console.log('Checkbox state changed!');
});

// 3 Focus Event
document.getElementById('myInput').addEventListener('focus', function() {
  console.log('Input focused!');
});

document.getElementById('passwordInput').addEventListener('focus', function() {
  console.log('Password input focused!');
});

document.getElementById('emailInput').addEventListener('focus', function() {
  console.log('Email input focused!');
});


// 4 Window Events
// 1 Load Event
window.addEventListener('load', function() {
  console.log('Page loaded!');
});

window.addEventListener('load', function() {
  initializePage(); // Assume there is a function to initialize the page
});

window.addEventListener('load', function() {
  console.log('All resources loaded!');
});


// 2 Resize Event
window.addEventListener('resize', function() {
  console.log('Window resized!');
});

window.addEventListener('resize', function() {
  adjustLayout(); // Assume there is a function to adjust the layout on resize
});

window.addEventListener('resize', function() {
  console.log('Browser window resized!');
});

// 3 Scroll Event
window.addEventListener('scroll', function() {
  console.log('Page scrolled!');
});

window.addEventListener('scroll', function() {
  parallaxEffect(); // Assume there is a function for a parallax scrolling effect
});

window.addEventListener('scroll', function() {
  console.log('Document scrolled!');
});


// 5 Miscellaneous Events
// 1 Contextmenu Event
document.getElementById('myElement').addEventListener('contextmenu', function(event) {
  event.preventDefault();
  console.log('Context menu triggered!');
});

document.getElementById('image').addEventListener('contextmenu', function(event) {
  event.preventDefault();
  console.log('Image context menu triggered!');
});

document.getElementById('link').addEventListener('contextmenu', function(event) {
  event.preventDefault();
  console.log('Link context menu triggered!');
});


// 2 Cut Event 
document.getElementById('myInput').addEventListener('cut', function() {
  console.log('Text cut!');
});

document.getElementById('editableDiv').addEventListener('cut', function() {
  console.log('Content cut!');
});

document.getElementById('cutButton').addEventListener('cut', function() {
  console.log('Button content cut!');
});


// 3 Copy Event
document.getElementById('myInput').addEventListener('copy', function() {
  console.log('Text copied!');
});

document.getElementById('copyParagraph').addEventListener('copy', function() {
  console.log('Paragraph copied!');
});

document.getElementById('copyButton').addEventListener('copy', function() {
  console.log('Button content copied!');
});

// 4 paste event 
document.getElementById('myInput').addEventListener('paste', function(event) {
  console.log('Text pasted: ' + event.clipboardData.getData('text'));
});

document.getElementById('editableDiv').addEventListener('paste', function(event) {
  console.log('Content pasted: ' + event.clipboardData.getData('text/html'));
});

document.getElementById('myTextarea').addEventListener('paste', function(event) {
  console.log('Text pasted in textarea: ' + event.clipboardData.getData('text/plain'));
});

