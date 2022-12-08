export interface AboutProps {
  data: data;
}

export interface data {
  jobs?: JobsEntity[] | null;
  education?: EducationEntity[] | null;
}
export interface JobsEntity {
  company: string;
  period: string;
  responsibilities: string;
  role: string;
}
export interface EducationEntity {
  description: string;
  name: string;
  period: string;
  type: string;
}
