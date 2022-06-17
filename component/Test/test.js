export default (name) => {
  const h1 = document.createElement('h1');
  h1.innerText = `Hi ${name}`
  return h1;
}
