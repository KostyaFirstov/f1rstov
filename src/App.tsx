import React, { createContext } from 'react'
import { ScrollToTop } from './utils/ScrollToTop'
import { Route, Routes, useLocation } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
import Projects from './pages/Projects'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Gallery from './pages/Gallery'
import ProjectPage from './pages/ProjectPage'
import { AnimatePresence, MotionValue, useSpring } from 'framer-motion'

interface IMouseMove {
	mousePosition: {
		x: MotionValue<any>
		y: MotionValue<any>
	}
	mouseMove: (e: React.MouseEvent<HTMLDivElement>) => void
}

export const MouseMoveContext = createContext<IMouseMove>({} as IMouseMove)

function App() {
	const location = useLocation()

	const spring = {
		stiffness: 150,
		damping: 15,
		mass: 0.1
	}

	const mousePosition = {
		x: useSpring(0, spring),
		y: useSpring(0, spring)
	}

	const mouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const { clientX, clientY } = e
		const targetX = clientX - (window.innerWidth / 2) * 0.26
		const targetY = clientY - (window.innerWidth / 2) * 0.2
		mousePosition.x.set(targetX)
		mousePosition.y.set(targetY)
	}

	return (
		<MouseMoveContext.Provider value={{ mousePosition, mouseMove }}>
			<div className='App'>
				<AnimatePresence mode='wait'>
					<ScrollToTop />
					<Routes location={location} key={location.pathname}>
						<Route path='/' element={<MainLayout />}>
							<Route path='/' element={<Home />} />
							<Route path='/projects' element={<Projects />} />
							<Route path='/projects/*' element={<ProjectPage />} />
							<Route path='/about' element={<About />} />
							<Route path='/gallery' element={<Gallery />} />
							<Route path='/contacts' element={<Contacts />} />
							<Route path='/*' element={<NotFoundPage />} />
						</Route>
					</Routes>
				</AnimatePresence>
			</div>
		</MouseMoveContext.Provider>
	)
}

export default App
