import { useState } from "react";

export function Aside({ themesData }) {
  const [chosenTopic, setChosenTopic] = useState("");

  function handleChooseTopic(id) {
    setChosenTopic(JSON.stringify(themesData[+id - 1]["themes"]), null, "\n");
  }

  return (
    <aside className="row-start-1 -row-end-1 flex flex-col bg-slate-400 p-4 pt-2">
      <ul className="flex gap-2">
        {themesData.map((theme) => (
          <li key={theme.id} className="bg-orange-300 px-2 py-1">
            <button onClick={() => handleChooseTopic(theme.id)}>
              {theme.title}
            </button>
          </li>
        ))}
      </ul>
      <div>{chosenTopic}</div>
    </aside>
  );
}
