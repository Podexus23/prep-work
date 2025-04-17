import { Question } from "./Question";

export function Topic({ data, onAddToMain }) {
  function insertTheme(data, theme, depth = 0) {
    if (Array.isArray(data)) {
      return (
        <Theme
          key={theme}
          title={theme}
          //если это массив из первого обхода, на него не будет выставляться падинг
          style={depth > 1 ? `pl-${depth * 2}` : ""}
        >
          {data.map((q) => (
            <Question
              question={q}
              key={q.title ? q.title : q}
              onAddToMain={onAddToMain}
            />
          ))}
        </Theme>
      );
    } else {
      const themes = Object.keys(data);
      return (
        <Theme key={theme} title={theme}>
          {themes.map((theme) => {
            return insertTheme(data[theme], theme, depth + 1);
          })}
        </Theme>
      );
    }
  }

  return <ul>{insertTheme(data)}</ul>;
}

function Theme({ children, title, style }) {
  return (
    <li className={style}>
      {title && <h2 className="text-2xl font-semibold">{title}</h2>}
      <ul>{children}</ul>
    </li>
  );
}
