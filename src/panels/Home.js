import React from 'react';
import PropTypes from 'prop-types';
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader ,HeaderButton} from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader left={<HeaderButton><Icon24Back/></HeaderButton>}>СЕРВИС!!!</PanelHeader>
		{fetchedUser &&
		<Group title="ТЕСТ">
		</Group>}

		<Group title="тест">
			<Div>
				<Button>
					тест персик)
				</Button>
			</Div>
		</Group>
	</Panel>
);
export default Home;
