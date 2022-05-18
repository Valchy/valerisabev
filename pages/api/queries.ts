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
				}
			}
		}
	}
`;
