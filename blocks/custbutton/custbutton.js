export default function decorate(block) {
  // Create a <button>
  const button = document.createElement('button');
//   button.className = '';
  button.textContent = 'Click me!';

  // Add behavior
  button.addEventListener('click', async () => {
    console.log('aqui')
    let res = await fetch("https://publish-p131012-e1277260.adobeaemcloud.com/graphql/execute.json/bimbodam/second-query",{
      method: "GET",
      credentials: "include",
      headers: { "Accept": "application/json" }
    })
    let data = await res.json()
    console.log('data',data)
  });

  // Clear any existing content in the block (optional)
  block.textContent = '';

  // Append the button
  block.append(button);
}