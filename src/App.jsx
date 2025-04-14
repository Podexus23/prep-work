import { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { Aside } from "./components/Aside";
import { Main } from "./components/Main";

const URL = "http://localhost:3000";

function App() {
  const [data, setData] = useState([]);

  useEffect(function () {
    (async () => {
      const res = await fetch(`${URL}/data`);
      const data = await res.json();
      setData(() => data);
    })();
  }, []);

  return (
    <div className="grid h-screen grid-cols-[auto_1fr] grid-rows-[auto_1fr]">
      <Header />
      <Aside themesData={data} />
      <Main />
    </div>
  );
}

export default App;

/**
 * *aside - список с темами, если тема разваливается на больеш тем во вы валиваем ещё темы
 * *main - описание вопроса, расписывание оветов на вопрос/ы,
 * поле для вопросов по теме которые можно добавить если они появятся?
 */
