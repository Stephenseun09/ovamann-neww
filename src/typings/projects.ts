export interface HomepageProjectData {
  projects?: ProjectsEntity[] | null;
}
export interface ProjectsEntity {
  excerpt: string;
  id?: string;
  slug: string;
  title: string;
  categories?: CategoriesEntity[] | null;
  coverImage: CoverImage;
}
export interface CategoriesEntity {
  name: string;
}
export interface CoverImage {
  url: string;
}

export interface ProjectConnection {
  data: ProjectConnectionData;
}
export interface ProjectConnectionData {
  projectsConnection: ProjectsConnection;
}
export interface ProjectsConnection {
  pageInfo: PageInfo;
  edges?: EdgesEntity[] | null;
}
export interface PageInfo {
  endCursor: string;
  hasNextPage: boolean;
}
export interface EdgesEntity {
  cursor: string;
  node: Node;
}
export interface Node {
  categories?: CategoriesEntity[] | null;
  coverImage: CoverImage;
  slug: string;
  title: string;
  excerpt: string;
}
