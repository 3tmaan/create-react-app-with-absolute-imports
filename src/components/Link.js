export default function Link({ href, target = "_blank", children }) {
  return (
    <a
      className="App-link"
      href={href}
      target={target}
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}
