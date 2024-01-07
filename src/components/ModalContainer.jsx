import { useEffect, useRef } from 'react'
import { getRoomieTurn } from '../utils/roomies'

export default function ModalContainer({ isOpen, onCloseModal }) {
	const modalRef = useRef(null)
	const modalContainerRef = useRef(null)
	
  let cleaner = getRoomieTurn()

	useEffect(() => {
		if (isOpen && modalRef && modalContainerRef) {
			modalRef.current.classList.add(...['block', 'animate-bg-fadeIn'])
			modalRef.current.classList.remove(...['hidden', 'animate-bg-fadeOut'])

			modalContainerRef.current.classList.add(...['animate-modal-scaleIn'])
			modalContainerRef.current.classList.remove(...['animate-modal-scaleOut'])
		} else if (modalRef && modalContainerRef) {
			modalRef.current.classList.add(...['animate-bg-fadeOut'])
			modalRef.current.classList.remove(...['animate-bg-fadeIn'])

			modalContainerRef.current.classList.add(...['animate-modal-scaleOut'])
			modalContainerRef.current.classList.remove(...['animate-modal-scaleIn'])

			setTimeout(() => {
				modalRef.current.classList.add(...['hidden'])
				modalRef.current.classList.remove(...['block'])
			}, 500)
		}
	}, [isOpen, modalRef, modalContainerRef])

  return (
    <div className='fixed inset-0 z-50 hidden' ref={modalRef}>
			<div className='flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center modal-flex-container sm:block sm:p-0'>
				<div className='fixed inset-0 bg-gray-700 bg-opacity-75 modal-bg-container'></div>
				<div className='hidden modal-space-container sm:inline-block sm:align-middle sm:h-screen'></div>

				<div className='inline-block w-full mx-auto overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl modal-container sm:my-8 sm:align-middle sm:max-w-lg' ref={modalContainerRef}>
					<div className='px-4 pt-5 pb-4 bg-white modal-wrapper sm:p-6 sm:pb-4'>
						<div className='modal-wrapper-flex sm:flex sm:items-start'>
							<div className='flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto overflow-hidden text-3xl bg-red-100 rounded-full modal-icon sm:mx-0 sm:h-12 sm:w-12'>
								🥵
							</div>
							
							<div className='mt-3 text-center modal-content sm:mt-0 sm:ml-4 sm:text-left'>
								<h3 className='text-3xl font-medium text-gray-900'>El aseo de hoy</h3>
								
								<div className='mt-2 modal-text'>
									<p className='text-lg text-gray-600'>
										{cleaner.title}{' '}
										<span className={`italic ${cleaner.band ? 'text-gray-700' : 'text-red-700'} text-xl font-medium`}>
											{cleaner.person}
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='px-4 py-3 modal-actions bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse'>
						<button
							className='inline-flex justify-center w-full px-4 py-2 mt-3 font-medium text-gray-100 transition-all bg-red-700 border rounded-md shadow-sm hover:bg-red-600 shadow-gray-500 hover:shadow-none focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-base'
							onClick={onCloseModal}
						>
							Cerrar 🥺
						</button>
					</div>
				</div>
			</div>
		</div>
  )
}
