


// dynamic_script.js
console.log('This is the dynamic script running on the client\'s store.');

// Example: A function to add a dynamic element to the store's homepage
function addDynamicElement() {
  const element = document.createElement('div');
  element.innerText = 'This is a dynamic element added by my Shopify app!';
  document.body.appendChild(element);
}
