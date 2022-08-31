import React from 'react'
import Image from 'next/image'
import cryptoImg from '../public/assets/crypto.jpg'
import Link from 'next/link'
import ProjectItem from './ProjectItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
		<div className='max-w-[1240px] mx-auto px-2 py-16'>
			<p className='uppercase text-xl tracking-widest text-[#5651e5]'>Projects</p>
			<h2 className='py-4'>What I've Built</h2>
			<div className='grid md:grid-cols-2 gap-8'>

				<ProjectItem 
					title='First Project' 
					backgroundImg={cryptoImg} 
					projectUrl='/first' />

				<ProjectItem 
					title='Second Project' 
					backgroundImg={cryptoImg} 
					projectUrl='/second' />
				
				<ProjectItem 
					title='Third Project' 
					backgroundImg={cryptoImg} 
					projectUrl='/third' />
				
				<ProjectItem 
					title='Fourth Project' 
					backgroundImg={cryptoImg} 
					projectUrl='/fourth' />

			</div>

		</div>
    </div>
  )
}

export default Projects