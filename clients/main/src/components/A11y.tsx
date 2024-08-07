

//❌ Bad
export default function BadComponent() {
  return <div role="button">
    <button>Click me</button>
  </div>;
}

//✅ Good
export default function GoodComponent() {
  return <div role="button" tabIndex={0}>
    <button>Click me</button>
  </div>;
}

//✅ Good
export default function GoodComponentWithAria() {
  return <div aria-label="Click me">
    <button>Click me</button>
  </div>;
}