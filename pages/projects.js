import React from "react";
import Layout from "../src/components/Layout";
import ContactForm from '../src/components/ContactForm';
import styled from "styled-components";
import { device } from "../src/theme/GlobalStyle";
import { motion } from "framer-motion";
import HeadlineOvals from "../src/components/projects/HeadlineOvals";
import Project from "../src/components/projects/Project";

function getProjects() {
	return [
		{
			id: 1,
			name: 'Ever Two Films',
			link: 'https://www.evertwofilms.com/',
			text: 'Adobe Creative Cloud is a set of applications and services from Adobe Systems that gives subscribers access to a collection of software used for graphic design, video editing, web development, photography, along with a set of mobile applications and also some optional cloud services. ',
			pic: `../static/images/EverTwo-Films-Vasquez-Rocks-Engagement-Shoot-135-1.jpg`
		},
		{
			id: 2,
			name: 'Cinestory Films',
			link: 'https://www.cinestoryfilms.com/',
			text: 'Lorem Ipsum',
			pic: `../../static/images/service2.png`
		},
		{
			id: 3,
			pic: `../../static/images/service.png`
		},
		{
			id: 4,
			pic: `../../static/images/service2.png`
		}
	];
}

const Projects = props => (
	<Layout>
		<HeadlineOvals />
		{getProjects().map(project => (
			<Project name={project.name} text={project.text} link={project.link} pic={project.pic} id={project.id} key={project.id} />
		))}
		<ContactForm />
	</Layout>
);

export default Projects;
