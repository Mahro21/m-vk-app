import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
<<<<<<< HEAD
import { View, Panel, PanelHeader, Group, List, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
=======
import App from './App';
>>>>>>> f99cb4bf98a44c2d6b7928f52d8a9c782ce34ec4
// import registerServiceWorker from './sw';

// Init VK  Mini App
connect.send('VKWebAppInit', {});

<<<<<<< HEAD
function App () {
  return (
    <View activePanel="main">
      <Panel id="main">
        <PanelHeader>VKUI</PanelHeader>
        <Group title="Items">
          <List>
            <Cell>Hello</Cell>
            <Cell>World</Cell>
          </List>
        </Group>
      </Panel>
    </View>
  );
}
=======
// Если вы хотите, чтобы ваше веб-приложение работало в оффлайне и загружалось быстрее,
// расскомментируйте строку с registerServiceWorker();
// Но не забывайте, что на данный момент у технологии есть достаточно подводных камней
// Подробнее про сервис воркеры можно почитать тут — https://vk.cc/8MHpmT
// registerServiceWorker();
>>>>>>> f99cb4bf98a44c2d6b7928f52d8a9c782ce34ec4

ReactDOM.render(<App />, document.getElementById('root'));
