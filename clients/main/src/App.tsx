
function App() {

// Adding a property to Array prototype
Array.prototype.customProperty = "I'm a custom property";

// ❌ Bad
const numbers = [1, 2, 3];

for (const key in numbers) {
  console.log(key); // Logs: 0, 1, 2, "customProperty"
}
  return <>{"Hello world"}</>;
}

export default App;
