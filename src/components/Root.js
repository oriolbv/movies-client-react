import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import List from '../movies/components/List';
import Detail from './modals/Detail';
import { Provider } from "react-redux";
import store from "../config/store";

const Root = () => (
	<BrowserRouter>
		<Routes>
			<Route exact path="/" element={<List />}/>
			<Route exact path="/:id" element={<Detail />}/>
		</Routes>
	</BrowserRouter>
	// <Provider store={store}>
	// 	<List/>
	// 	<Detail/>
	// </Provider>
);

export default Root;