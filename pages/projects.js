import Layout from "../src/components/Layout";
import styled from "styled-components";
import { device } from "../src/theme/GlobalStyle";
import React from "react";
import { motion } from "framer-motion";
import HeadlineOvals from "../src/components/projects/HeadlineOvals";
import Project from "../src/components/projects/Project";

const Projects = () => (
	<Layout>
		<HeadlineOvals />
		<Project />
	</Layout>
);

export default Projects;
