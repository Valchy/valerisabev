import { gql } from 'graphql-request';

export const GET_ASSETS = gql`
	query {
		assets {
			fileName
			url
		}
	}
`;
