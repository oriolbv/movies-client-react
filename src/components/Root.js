import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from './List';
import Detail from './Detail';

const Root = () => (
	<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<List />}/>
			<Route exact path="/:id" element={<Detail />}/>
		</Routes>
	</BrowserRouter>
);

export default Root;