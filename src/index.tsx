import React  from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Provider from 'store';

import { Dashboard, AddTask, NotFound } from 'containers';

import 'styles/main.scss';

ReactDOM.render(
	<Provider>
		<BrowserRouter>
			<div className='todo-app'>
				<Switch>
					<Route path='/' exact component={Dashboard} />
					<Route path='/add' component={AddTask} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</BrowserRouter>
	</Provider>,
	document.getElementById('root'));
