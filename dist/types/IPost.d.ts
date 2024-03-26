export interface IPost {
    id: number;
    title: string;
    creationDate: string;
    modificationDate: string;
    image: string;
    featuredImageFile: any;
    shortContent: string;
    longContent: string;
    isActive: boolean;
    slug: string;
    category: Category;
    postDate: string;
}
export interface Category {
    id: number;
    name: string;
    color: string;
}
