import React, { PropTypes } from 'react';

import AppBarComponent from '../components/AppBar';

export const MainLayout = ({content}) => ( 
	<div className="main-layout">
		<AppBarComponent title={  content.props.pageTitle  || 'Desenvolvedor Multiplataforma'} />
		<main>
			{ content }
		</main>
	</div>
);