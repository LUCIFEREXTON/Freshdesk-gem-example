import React from 'react'
import './style.css';
import Layout from '../Components/Tickets/Layout';
import AllTickets from '../Components/Tickets/AllTickets';
import Filter from '../Components/Tickets/Filter';
import { Routes, Route, useLocation  } from "react-router-dom";
import Ticket from './Ticket';
// import Faq from './Faq';

import Modal from '../Components/Modal'
import Create from './Create';

const MainPage = () =>{
		return(
		<Routes>
			<Route
				path='/'
				element={
					<Layout>
						<Filter />
						<AllTickets />
					</Layout>
				}
			/>
			<Route
				path='/new'
				element={
					<Create/>
				}
			/>
			<Route
				path='/view/:user_id/:id'
				element={
					<Layout>
					<Ticket />
					</Layout>
				}
			/>
		</Routes>
		// <Routes>
		// 	<Route path="/faq/*" element={<Faq/>} />
		// 	<Route
		//	 	path='/'
		//	 	element={
		//	 		<Layout>
		//	 			<Filter />
		//	 			<AllTickets />
		//	 		</Layout>
		//	 	}
		//	 />
		//	 <Route
		//	 	path='/new'
		//	 	element={
		//	 		<Create/>
		//	 		// <Create />
		//	 	}
		//	 />
		//	 <Route
		//	 	path='/view/:user_id/:id'
		//	 	element={
		//	 		<Ticket />
		//	 	}
		//	 />
		// </Routes>
	)
}

export default MainPage
