
export interface IPage {
    key: string,
    object: any;
}

export interface IBadge {
    key: string,
    name: string,
    icon: JSX.Element
}

export interface IProject {
    key: string,
    title: string,
    subtitle: string
    github: string | null,
    image: string,
    badges: string[]
}