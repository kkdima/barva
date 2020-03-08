import React from 'react';
import Layout from '../src/components/Layout';
import ContactForm from '../src/components/ContactForm';
import HeadlineOvals from '../src/components/projects/HeadlineOvals';
import Project from '../src/components/projects/Project';

function getProjects() {
	return [
		{
			id: 1,
			name: 'Ever Two Films',
			link: 'https://www.evertwofilms.com/',
			text:
				'Wedding video and photo production company based in Los Angeles. The guys need to tell their stories not only through video and photo thus site is very important part for storytelling too.',
			pic: `/images/EverTwo-Films-Vasquez-Rocks-Engagement-Shoot-135-1.jpg`,
			direction: 'fade-left'
		},
		{
			id: 2,
			name: 'Cinestory Films',
			link: 'https://www.cinestoryfilms.com/',
			text:
				'Cinstory Films is a very high-end video production company. With the same high expectations for aesthetics when it comes to the web presence.',
			pic: '/images/projects/cinestory_films.jpg',
			direction: 'fade-right'
		}
	];
}

const Projects = props => (
	<Layout>
		<HeadlineOvals />
		{getProjects().map(project => (
			<Project
				name={project.name}
				text={project.text}
				link={project.link}
				pic={project.pic}
				id={project.id}
				key={project.id}
				direction={project.direction}
			/>
		))}
		<ContactForm />
	</Layout>
);

export default Projects;
