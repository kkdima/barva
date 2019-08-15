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
			title: 'Ever Two Films',
			pic: `../static/images/EverTwo-Films-Vasquez-Rocks-Engagement-Shoot-135-1.jpg`
		},
		{
			id: 2,
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
			<Project pic={project.pic} key={project.id} />
		))}
		<ContactForm />
	</Layout>
);

export default Projects;
