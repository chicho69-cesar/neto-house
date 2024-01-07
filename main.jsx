import './src/styles/style.css'
import './src/index.css'

import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'

import App from './src/App'

const root = document.getElementById('app')
const reactRoot = createRoot(root)

reactRoot.render(
	<StrictMode>
		<App />
	</StrictMode>
)
