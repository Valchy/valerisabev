import { gql } from 'graphql-request';

export const CONTENT_API = 'https://api-eu-central-1.graphcms.com/v2/cl3b9biq51ou001xm5zc9ara8/master';

export const GET_MAIN_PAGE = gql`
	query GetMainPage {
		page(where: { url: "index" }) {
			localizations(locales: [en, bg], includeCurrent: true) {
				locale
				title
				description
				display
				favicon {
					url
					width
					height
				}
				sections {
					__typename
					... on NavbarSection {
						display
						initials
						navItems {
							title
							link
							openInNewTab
							display
						}
					}
					... on HeroSection {
						topSkills
						bottomSkills
						callToActionText
						callToActionUrl
						display
						title
						secondaryTitle
						image {
							fileName
							url
							width
							height
						}
					}
					... on AboutSection {
						text {
							html
						}
						display
						alt
						image {
							fileName
							url
							width
							height
						}
					}
					... on EducationSection {
						achievements
						description
						display
						title
						alt
						image {
							fileName
							url
							width
							height
						}
					}
					... on ExperienceSection {
						achievements
						description
						display
						title
						link
						alt
						image {
							fileName
							url
							width
							height
						}
					}
					... on ContactSection {
						description
						display
						alt
						image {
							fileName
							url
							width
							height
						}
					}
					... on FooterSection {
						display
						footerItems {
							display
							openInNewTab
							link
							alt
							image {
								fileName
								url
								width
								height
							}
						}
					}
				}
			}
		}
	}
`;
