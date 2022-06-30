import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import "../../css/landing/LandingPage.css";
import { ChooseAim } from "../dialogs/ChooseAimDialog";
import { ChooseSkillDialog } from "../dialogs/ChooseSkillDialog";
import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";

export const LandingPage = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["skill"]);
	const navigate = useNavigate();

	const [Aim, setAim] = useState("Freelance Jobs");
	const [skill, setSkill] = useState("ui ux design");
	const [isChooseAimDialogOpen, setIsChooseAimDialogOpen] = useState(false);
	const [isChooseSkillDialogOpen, setIsChooseSkillDialogOpen] = useState(false);

	var data = {
		aim: Aim,
		skill: skill,
	};
	var nextDestRoute = "";
	if (Aim === "Hackathons") nextDestRoute = "/hackathons";
	if (Aim === "Freelance Jobs") nextDestRoute = "/jobs";
	if (Aim === "Courses") nextDestRoute = "/courses";

	return (
		<div className="landingpage">
			<ChooseAim
				isChooseAimDialogOpen={isChooseAimDialogOpen}
				setAim={setAim}
				setIsChooseAimDialogOpen={setIsChooseAimDialogOpen}
			/>
			<ChooseSkillDialog
				isChooseSkillDialogOpen={isChooseSkillDialogOpen}
				setSkill={setSkill}
				setIsChooseSkillDialogOpen={setIsChooseSkillDialogOpen}
			/>
			<div className="heroelement">
				<div className="herotext">
					<div className="hero-title">
						Find resources to learn and opportunities to earn.
						<br />
						All at one place
					</div>
					<div className="hero-description">
						We help you find all the courses, freelance job posts &amp;
						hackathons from all the major platforms and list them on just one
						window, saving your time of keeping an eye on every platform one by
						one.
					</div>
				</div>
				<div className="hero-cta">
					<div className="i-want-to-find--text">I want to find</div>
					<div
						className="dropdown-container"
						onClick={() => {
							setIsChooseAimDialogOpen(true);
						}}
					>
						<div className="dropdown-content">
							<div className="dropdown-text">{Aim}</div>
							<svg
								className="dropdown-icon"
								width="12"
								height="7"
								viewBox="0 0 12 7"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M10.8129 1.14646C11.129 1.46251 11.129 1.97494 10.8129 2.29099L6.49666 6.60726C6.18061 6.92331 5.66819 6.92331 5.35214 6.60726L1.03587 2.29099C0.719815 1.97494 0.719815 1.46251 1.03587 1.14646C1.35192 0.830411 1.86434 0.830411 2.18039 1.14646L5.9244 4.89047L9.66841 1.14646C9.98446 0.830411 10.4969 0.830411 10.8129 1.14646Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>

					<div className="for-text">for</div>
					<div
						className="dropdown-container"
						onClick={() => {
							setIsChooseSkillDialogOpen(true);
						}}
					>
						<div className="dropdown-content">
							<div className="dropdown-text">{skill}</div>
							<svg
								className="dropdown-icon"
								width="12"
								height="7"
								viewBox="0 0 12 7"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M10.8129 1.14646C11.129 1.46251 11.129 1.97494 10.8129 2.29099L6.49666 6.60726C6.18061 6.92331 5.66819 6.92331 5.35214 6.60726L1.03587 2.29099C0.719815 1.97494 0.719815 1.46251 1.03587 1.14646C1.35192 0.830411 1.86434 0.830411 2.18039 1.14646L5.9244 4.89047L9.66841 1.14646C9.98446 0.830411 10.4969 0.830411 10.8129 1.14646Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>
					<Link
						to={nextDestRoute}
						className="search-button"
						state={data}
						onClick={() => {
							setCookie("skill", skill, {
								path: "/",
							});
						}}
					>
						<svg
							width="64"
							height="50"
							viewBox="0 0 64 56"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M35.0187 31.8427C31.857 34.375 27.2289 34.1757 24.298 31.2448C21.1533 28.1 21.1533 23.0014 24.298 19.8566C27.4428 16.7119 32.5414 16.7119 35.6862 19.8566C38.6171 22.7875 38.8164 27.4156 36.2841 30.5773L42.4347 36.7279C42.7841 37.0773 42.7841 37.6439 42.4347 37.9933C42.0852 38.3427 41.5187 38.3427 41.1693 37.9933L35.0187 31.8427ZM25.5634 29.9794C23.1174 27.5335 23.1174 23.5679 25.5634 21.122C28.0093 18.6761 31.9749 18.6761 34.4208 21.122C36.8649 23.5661 36.8667 27.5277 34.4262 29.974C34.4244 29.9758 34.4226 29.9776 34.4208 29.9794C34.419 29.9812 34.4172 29.983 34.4154 29.9848C31.9691 32.4253 28.0075 32.4236 25.5634 29.9794Z"
								fill="white"
							/>
						</svg>
					</Link>
				</div>
			</div>
			<div className="navbar">
				<div className="logotext">13bhai</div>
				<div className="menulist">
					<a
						className="about-text"
						href="https://github.com/rounaksingh1694/13bhai-frontend/#readme"
					>
						About
					</a>
					<a
						className="github-text"
						href="https://github.com/rounaksingh1694/13bhai-frontend/"
					>
						Github
					</a>
					<a
						className="blog-text"
						href="https://rounaksingh1694.hashnode.dev/13bhai-find-resources-to-learn-and-opportunities-to-earn-all-at-one-place"
					>
						Blog
					</a>
					<a
						className="demo--text"
						href="https://www.youtube.com/watch?v=7uJjK7qH-3s"
					>
						Demo
					</a>
				</div>
				<div
					className="get-started-button"
					onClick={() => {
						navigate("/jobs");
					}}
				>
					<div className="get-started--text">get started</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};
