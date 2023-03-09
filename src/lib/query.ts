import { gql } from "@apollo/client";

export const GET_PROJECT_BY_CATEGORY = gql`
  query MyQuery($first: Int, $category: String) {
    projectsConnection(
      where: { categories_some: { name: $category } }
      first: $first
    ) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          categories {
            name
          }
          coverImage {
            url
          }
          slug
          title
          excerpt
        }
      }
    }
  }
`;

export const GET_ALL_PROJECTS = gql`
  query MyQuery($first: Int) {
    projectsConnection(first: $first) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          categories {
            name
          }
          coverImage {
            url
          }
          slug
          title
          excerpt
        }
      }
    }
  }
`;

export const GET_PROJECTS_SLUGS = gql`
  query GetProjectsSlugs {
    projects {
      slug
    }
  }
`;

export const GET_PROJECT_DETAILS = gql`
  query GetProjectDetails($slug: String!) {
    project(where: { slug: $slug }) {
      coverImage {
        url
      }
      gallery {
        url
      }
      overview
      projectBrochure {
        url
      }
      slug
      title
      yearCompleted
      whatWeDid {
        raw
      }
      projectOverview {
        raw
      }
      categories {
        name
      }
      date
      client
      yearCompleted
      location
    }
  }
`;

export const CATEGORY_NAMES_QUERY = gql`
  query CategoryNames {
    categories {
      name
    }
  }
`;

export const HOMEPAGE_PROJECTS_QUERY = gql`
  query Projects {
    projects(last: 3) {
      excerpt
      id
      slug
      title
      categories {
        name
      }
      coverImage {
        url
      }
    }
  }
`;

export const GET_RELATED_PROJECTS = gql`
  query Projects($slug: String) {
    projects(last: 3, where: { slug_not: $slug }) {
      excerpt
      id
      slug
      title
      categories {
        name
      }
      coverImage {
        url
      }
    }
  }
`;

export const GET_SEARCH = gql`
  query GetSearchedPost($after: String, $search: String, $first: Int) {
    projectsConnection(
      where: { _search: $search }
      first: $first
      after: $after
    ) {
      edges {
        cursor
        node {
          excerpt
          id
          slug
          title
          categories {
            name
          }
          coverImage {
            url
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;
