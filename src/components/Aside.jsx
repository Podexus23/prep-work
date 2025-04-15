import { useState } from "react";
import { NavButton, Navigation } from "./Navigation";

export function Aside({ themesData, onAddToMain }) {
  const [topicData, setTopicData] = useState({});

  function handleChooseTopic(id) {
    const index = themesData.findIndex((data) => data.id === id);
    const data = themesData[index]["themes"];
    const dataToSend = JSON.stringify(data, null, 2);
    // console.log(data);
    onAddToMain(dataToSend);
    setTopicData(data);
  }

  return (
    <aside className="row-start-1 -row-end-1 flex max-w-full flex-col overflow-y-auto bg-slate-400 p-4 pt-2">
      <Navigation>
        {themesData.map((theme) => (
          <NavButton theme={theme} onCLick={handleChooseTopic} key={theme.id} />
        ))}
      </Navigation>
      <Topic data={topicData} />
    </aside>
  );
}

function Topic({ data }) {
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
            <Question question={q} key={q} />
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

function Question({ question }) {
  return (
    <li className="pl-4">
      <p>{question}</p>
    </li>
  );
}
