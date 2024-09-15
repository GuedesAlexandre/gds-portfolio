import type { Project } from "./Project";

export interface ProjectDetails extends Project{
    description: string;
    technologies: string[];
    github: string;
    services: string[];
    img: string;
    imgDetails: string[];
    identifier: string;
    name: string;
}