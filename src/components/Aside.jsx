import { useState } from "react";
import { NavButton, Navigation } from "./Navigation";
import { Topic } from "./Topic";

export function Aside({ themesData, onAddToMain }) {
  const [topicData, setTopicData] = useState({});

  function handleChooseTopic(id) {
    const index = themesData.findIndex((data) => data.id === id);
    const data = themesData[index]["themes"];
    // const dataToSend = JSON.stringify(data, null, 2);

    // onAddToMain(dataToSend);
    setTopicData(data);
  }

  return (
    <aside className="max-w- row-start-1 -row-end-1 flex max-w-(--aside-size) flex-col overflow-y-auto bg-slate-400 p-4 pt-2">
      <Navigation>
        {themesData.map((theme) => (
          <NavButton theme={theme} onCLick={handleChooseTopic} key={theme.id} />
        ))}
      </Navigation>
      <Topic data={topicData} onAddToMain={onAddToMain} />
    </aside>
  );
}
