import {  request, gql} from 'graphql-request'

const graphcmc= process.env.REACT_APP_API

export const getPages = async () => {
    const query =gql`
        query GetPages {
            pages {
                slug
                title
              }
        }
    `

    const result = await request(graphcmc, query);

    return result.pages;
}