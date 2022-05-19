import { gql } from 'graphql-request';

export const CONTENT_API = 'https://api-eu-central-1.graphcms.com/v2/cl3b9biq51ou001xm5zc9ara8/master';

export const GET_MAIN_PAGE = gql`
	query GetMainPage {
		page(where: { url: "index" }) {
			localizations(locales: [en, bg], includeCurrent: true) {
				title
				description
				locale
				favicon {
					url
					fileName
					width
					height
				}
				sections {
					... on NavbarSection {
						display
						initials
						navItems {
							title
							link
							openInNewTab
						}
					}
					... on HeroSection {
						bottomSkills
						callToActionText
						callToActionUrl
						display
						topSkills
						title
						secondaryTitle
						image {
							fileName
							height
							url
							width
						}
					}
					... on AboutSection {
						text
						image {
							fileName
							height
							url
							width
						}
					}
					... on EducationSection {
						achievements
						description
						display
						title
						image {
							fileName
							height
							url
							width
						}
					}
					... on ExperienceSection {
						achievements
						description
						display
						title
						image {
							fileName
							height
							url
							width
						}
					}
					... on ContactSection {
						description
						display
						image {
							fileName
							height
							url
							width
						}
					}
					... on FooterSection {
						display
					}
				}
			}
		}
	}
`;
