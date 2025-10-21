export default function decorate(block) {
  // Create a <button>
  const button = document.createElement('button');
//   button.className = '';
  button.textContent = 'Click me!';

  // Add behavior
  button.addEventListener('click', () => {
    alert('You clicked the special button!');
  });

  // Clear any existing content in the block (optional)
  block.textContent = '';

  // Append the button
  block.append(button);
}