export interface IPost {
  id: string;
  date: string;
  poster: string;
  title: string;
  category: string;
  description: string;
  mainColor: string;
  categoryColor: string;
  categoryLink: string;
  type: string;
}

export interface IMyLoaderImg {
  src: string;
}

export interface IPostResponse {
  slug: string;
  frontmatter: IPost;
}

export interface IPaths {
  params: { slug: string };
}
