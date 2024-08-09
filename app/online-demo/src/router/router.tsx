import { createBrowserRouter } from 'react-router-dom'
import BaseLayout from '../components/base-layout/base-layout'
import Home from '../pages/home/home'
const router = createBrowserRouter([
	{
		path: '/text-search-engine',
		element: <BaseLayout />,
		children: [
			{
				index: true,
				path: '/text-search-engine',
				element: <Home />,
			},
		],
	},
])

export default router