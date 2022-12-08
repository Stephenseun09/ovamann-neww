export interface ProjectDetailProps {
  project: project;
}

export interface project {
  _id: string;
  challenges: string;
  code: string;
  design_process: string;
  desktop_preview: DesktopPreviewOrMobileView1OrMobileView2;
  future_improvements: string;
  libraries?: string[] | null;
  live: string;
  long_description: string;
  mobile_view1: DesktopPreviewOrMobileView1OrMobileView2;
  mobile_view2: DesktopPreviewOrMobileView1OrMobileView2;
  name: string;
  slug: Slug;
  stack?: string[] | null;
  type: string;
}
export interface DesktopPreviewOrMobileView1OrMobileView2 {
  _type: string;
  asset: Asset;
}
export interface Asset {
  _ref: string;
  _type: string;
}
export interface Slug {
  _type: string;
  current: string;
}
