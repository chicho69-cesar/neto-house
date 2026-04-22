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
			<div className='modal-flex-container flex min-h-screen items-end justify-center px-4 pb-6 pt-4 text-center sm:items-center sm:p-6'>
				<div className='modal-bg-container fixed inset-0 bg-slate-950/70 backdrop-blur-sm'></div>
				<div className='hidden sm:inline-block sm:h-screen sm:align-middle'></div>

				<div className='modal-container relative inline-block w-full max-w-xl overflow-hidden rounded-[2rem] border border-white/10 bg-white text-left align-bottom shadow-[0_30px_90px_rgba(15,23,42,0.28)] transition-all dark:border-white/10 dark:bg-slate-950 sm:my-8 sm:align-middle' ref={modalContainerRef}>
					<div className='modal-wrapper relative overflow-hidden p-5 sm:p-7'>
						<div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(14,165,233,0.14),_transparent_32%),radial-gradient(circle_at_bottom_left,_rgba(16,185,129,0.12),_transparent_28%)]'></div>
						<div className='modal-wrapper-flex relative flex flex-col gap-5 sm:flex-row sm:items-start'>
							<div className='modal-icon flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl border border-white/15 bg-slate-950 text-3xl shadow-lg dark:bg-white'>
								🥵
							</div>
							
							<div className='modal-content min-w-0 flex-1 text-center sm:text-left'>
								<div className='inline-flex items-center rounded-full border border-black/10 bg-black/5 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.35em] text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300'>
									Turno de hoy
								</div>
								<h3 className='mt-4 text-3xl font-black tracking-tight text-slate-900 dark:text-white'>
									El aseo de hoy
								</h3>
								
								<div className='modal-text mt-3'>
									<p className='text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg'>
										{cleaner.title}{' '}
										<span className={`text-xl font-semibold italic ${cleaner.band ? 'text-slate-900 dark:text-white' : 'text-red-600 dark:text-red-400'}`}>
											{cleaner.person}
										</span>
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className='modal-actions flex items-center justify-end gap-3 border-t border-slate-200 bg-slate-50 px-5 py-4 dark:border-white/10 dark:bg-white/5 sm:px-7'>
						<button
							className='inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200'
							onClick={onCloseModal}
						>
							Cerrar
						</button>
					</div>
				</div>
			</div>
		</div>
  )
}
