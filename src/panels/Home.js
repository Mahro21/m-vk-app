import React from 'react';
import PropTypes from 'prop-types';
<<<<<<< HEAD
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
=======
import { Panel, ListItem, Button, Group, Div, Avatar, PanelHeader } from '@vkontakte/vkui';

connect.send("VKWebAppInit", {});

const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id}>
		<PanelHeader>Example</PanelHeader>
		{fetchedUser &&
		<Group title="User Data Fetched with VK Connect">
			<ListItem
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</ListItem>
		</Group>}

		<Group title="Navigation Example">
			<Div>
				<Button connect.send("VKWebAppShowWallPostBox", {"message": "Hello!"});">
					Show me the Persik, please
>>>>>>> f99cb4bf98a44c2d6b7928f52d8a9c782ce34ec4
				</Button>
			</Div>
		</Group>
	</Panel>
);
<<<<<<< HEAD
=======

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

>>>>>>> f99cb4bf98a44c2d6b7928f52d8a9c782ce34ec4
export default Home;
