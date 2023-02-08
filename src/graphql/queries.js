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



export const getPosts = async () => {
    const query =gql`
        query GetPosts {
          posts(orderBy: publishedAt_DESC) {
            tags
            author {
              name
            }
            content {
              html
            }
            date
            id
            title
            coverImage {
              url
            }
            slug
          }
        }
    `

    const result = await request(graphcmc, query);

    return result.posts;
}



export const getOnePost = async (slug) => {
  const query =gql`
      query GetOnePost($slug: String!) {
        post(where: {slug: $slug }) {
          author {
            name
          }
          content {
            html
          }
          coverImage {
            url
          }
          slug
          tags
          title
        }
      }
  `

  const result = await request(graphcmc, query,{slug});

  return result.post;
}