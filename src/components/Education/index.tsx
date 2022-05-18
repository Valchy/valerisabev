import Image from 'next/image';
// import './Education.module.css';

export default function Education() {
	return (
		<section id="education" className="flex-col-center-center">
			<div className="container">
				<div className="line"></div>
				<h2 className="section-title">EDUCATION</h2>
				<div className="flex-col">
					<div className="flex-row education-item">
						<img /* defer */ src="/imgs/harbour-sapce-university.jpg" alt="Harbour Space University building" />
						<div>
							<h3>Harbour.Space University</h3>
							<h4 className="edu-desktop">Bachelor in Computer Science | Barcelona, Spain | 2021 - Today</h4>
							<h4 className="edu-mobile">
								Bachelor in Computer Science <br />
								Barcelona, Spain | 2021 - Today
							</h4>
							<ul>
								<li>Computer Science Major.</li>
								<li>Cyber Security Minor.</li>
								<li>High-tech Entrepreneurship Minor.</li>
								<li>Created a Volleyball society.</li>
								<li>Class of 2024.</li>
							</ul>
						</div>
					</div>
					<br />
					<br />
					<div className="flex-row education-item">
						<img /* defer */ src="/imgs/it-high-school-exupery.jpg" alt="IT Highschool Exupery building" />
						<div>
							<h3>IT High School &quot;Antoine de Saint-Exupéry&quot;</h3>
							<h4 className="edu-desktop">High School Diploma | Varna, Bulgaria | 2017 - 2021</h4>
							<h4 className="edu-mobile">
								High School Diploma <br />
								Varna, Bulgaria | 2017 - 2021
							</h4>
							<ul>
								<li>Independent form of education for the last four years of school.</li>
								<li>Completed first, the &quot;Google IT Support Professional Certificate&quot;.</li>
								<li>Helped organise school LAN party events.</li>
								<li>Participated in a Computer Science society.</li>
								<li>Attended suggestopedia Spanish classes.</li>
							</ul>
						</div>
					</div>
					<br />
					<br />
					<div className="flex-row education-item">
						<img /* defer */ src="/imgs/vienna-international-school.webp" alt="Vienna International School building" />
						<div>
							<h3>Vienna International School</h3>
							<h4 className="edu-desktop">First to Eighth Grade Education | Vienna, Austria | 2009 - 2017</h4>
							<h4 className="edu-mobile">
								First to Eighth Grade Education <br />
								Vienna, Austria | 2009 - 2017
							</h4>
							<ul>
								<li>Lead multiple group projects to a successful outcome.</li>
								<li>Took part in extracurricular activities and charity events.</li>
								<li>Learned multiple languages within a different culture</li>
								<li>Made friends from all over the world</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
