        import React, { useState } from 'react';
        import { Project } from './Project';
        import ProjectCard from './ProjectCard';
        import ProjectForm from './ProjectFrom';  

        interface ProjectListProps {
        projects: Project[];
        onSave: (project: Project) => void;

        }

        function ProjectList({ projects,onSave }: ProjectListProps) {
        const [projectBeingEdited, setProjectBeingEdited] = useState({});

        const handleEdit = (project: Project) => {
            setProjectBeingEdited(project);
        };

        const cancelEditing =()=>{
            setProjectBeingEdited({});
        }

    

        const item = projects.map((project) => (
            <div key={project.id} className='col-sm'>
                {project ===  projectBeingEdited ? (
                    <ProjectForm project={project} onSave={onSave} onCancel={cancelEditing}/>
                ) : (
                    <ProjectCard project={project} onEdit={handleEdit}/>
                )}

            </div>
        ));

        return <div className="row">{item}</div>;
        }

        export default ProjectList;
