export function Navigation({ children }) {
  return (
    <nav>
      <ul className="flex gap-2">{children}</ul>
    </nav>
  );
}

export function NavButton({ theme, onCLick }) {
  return (
    <li key={theme.id} className="bg-orange-300 px-2 py-1">
      <button onClick={() => onCLick(theme.id)}>{theme.title}</button>
    </li>
  );
}
