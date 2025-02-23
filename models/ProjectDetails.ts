import type { GithubInfos } from "./GithubInfos";
import type { Project } from "./Project";

export interface ProjectDetails extends Project{
    description: string;
    technologies: string[];
    github: string | GithubInfos[];
    services: string[];
    img: string;
    imgDetails: string[];
    identifier: string;
    name: string;
    url?: string
    date: string;
}