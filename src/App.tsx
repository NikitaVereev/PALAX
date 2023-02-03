import Layout from './components/layout/Layout'
import Home from './components/screens/home/Home'
import { Provider } from 'react-redux'
import { store } from './components/redux'

function App() {
	return (
		<Provider store={store}>
			<Layout>
				<Home />
			</Layout>
		</Provider>
	)
}

export default App
