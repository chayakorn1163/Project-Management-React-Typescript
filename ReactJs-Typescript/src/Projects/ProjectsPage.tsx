    import React, { Fragment, useState } from 'react'
    import { MOCK_PROJECT } from './MockProject'
    import ProjectList from './ProjectList'
    import { Project } from './Project'

    const ProjectsPage = () => {
        const [projects, setProjects] = useState<Project[]>(MOCK_PROJECT)

        const saveProject = (updatedProject: Project) => {
            let updatedProjects = projects.map((p: Project) => {
                return p.id === updatedProject.id ? updatedProject : p;
            });
            setProjects(updatedProjects);
        }

        return (
            <Fragment>
                <h1>Projects</h1>
                <ProjectList
                    onSave={saveProject}
                    projects={projects}
                />
            </Fragment>
        )
    }

    export default ProjectsPage;
