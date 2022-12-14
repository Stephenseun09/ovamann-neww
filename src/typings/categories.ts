import { ProjectsEntity } from "./projects";

export interface CategoriesData {
  categories?: CategoriesEntity[] | null;
}
export interface CategoriesEntity {
  name: string;
  projects?: ProjectsEntity[] | null;
}
