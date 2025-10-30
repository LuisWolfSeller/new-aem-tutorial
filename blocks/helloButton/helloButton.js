export default function decorate(block) {
  // Create a <button>
  const button = document.createElement('button');
//   button.className = '';
  button.textContent = 'Click me!';

  // Add behavior
  button.addEventListener('click', async () => {
    // alert('You clicked the special button!');
    console.log('aqui')
    let res = await fetch("https://publish-p153442-e1604645.adobeaemcloud.com/graphql/execute.json/aem-demo-assets/getAllPruebaTelcel")
    let data = await res.json()
    console.log('data',data)
  });

  // Clear any existing content in the block (optional)
  block.textContent = '';

  // Append the button
  block.append(button);
}