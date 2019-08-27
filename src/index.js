import 'core-js/features/map';
import 'core-js/features/set';
import React from 'react';
import ReactDOM from 'react-dom';
import connect from '@vkontakte/vkui-connect';
import { View, Panel, PanelHeader, Group, List, Cell } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
// import registerServiceWorker from './sw';

// Init VK  Mini App
connect.send('VKWebAppInit', {});

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

ReactDOM.render(<App />, document.getElementById('root'));
