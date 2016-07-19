import React from 'react';

import AppBarComponent from '../components/AppBar';

export const MainLayout = ({content}) => ( 
	<div className="main-layout">
		<AppBarComponent title="Workshops" />
		<main>
			{ content }
		</main>
	</div>
);