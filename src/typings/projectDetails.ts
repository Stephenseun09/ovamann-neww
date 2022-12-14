export interface ProjectDetailsData {
  projectDetails: ProjectDetails;
}
export interface ProjectDetails {
  coverImage: GalleryEntityOrCoverImageOrProjectBrochure;
  gallery?: GalleryEntityOrCoverImageOrProjectBrochure[] | null;
  overview: string;
  projectBrochure: GalleryEntityOrCoverImageOrProjectBrochure;
  slug: string;
  title: string;
  yearCompleted: string;
  whatWeDid: WhatWeDidOrProjectOverview;
  projectOverview: WhatWeDidOrProjectOverview;
  categories?: CategoriesEntity[] | null;
  date: string;
  client: string;
  location: string;
}
export interface GalleryEntityOrCoverImageOrProjectBrochure {
  url: string;
}
export interface WhatWeDidOrProjectOverview {
  raw: Raw;
}
export interface Raw {
  children?: ChildrenEntity[] | null;
}
export interface ChildrenEntity {
  type: string;
  children?: ChildrenEntity1[] | null;
}
export interface ChildrenEntity1 {
  text: string;
}
export interface CategoriesEntity {
  name: string;
}
