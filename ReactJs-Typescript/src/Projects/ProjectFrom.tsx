    import React, {SyntheticEvent, useState} from 'react';
    import { Project } from './Project';


    

    interface ProjectFormProps {
        project: Project;
        onSave: (project:Project) => void;
        onCancel: () => void;
    }

    

    const ProjectForm = ({ project:initialProject, onSave, onCancel }: ProjectFormProps, ) => {

        const [project , setProject] = useState(initialProject);
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSave(project);
    };
    
    const handleChange = (event:any) => {
        const {type , name , value , checked} =  event.target;
        let updatedValue = type === 'CheckBox' ? checked : value;

        if (type === 'number') {
            updatedValue = Number(updatedValue);
        }

        const change = {
            [name]: updatedValue,
        }

        let updatedProject:Project;
        setProject((p) =>{
            updatedProject = new Project({...p,...change})
            return updatedProject;
        })
    }

    return (
        <form className="input-group vertical" onSubmit={handleSubmit}>
        <label htmlFor="name">Project Name</label>
        <input type="text" name="name" placeholder="Enter name" value={project.name} onChange={handleChange} />
        
        <label htmlFor="description">Project Description</label>
        <textarea name="description" placeholder="Enter description"  value={project.description} onChange={handleChange}/>
        
        <label htmlFor="budget">Project Budget</label>
        <input type="number" name="budget" placeholder="Enter budget" value={project.budget} onChange={handleChange} />
        
        <label htmlFor="isActive">Active?</label>
        <input type="checkbox" name="isActive" checked ={project.isActive} onChange={handleChange} />
        
        <div className="input-group">
            <button className="primary bordered medium" type="submit" >
            Save
            </button>
            <button
            className="primary bordered medium"
            type="button"
            onClick={onCancel}
            >
            Cancel
            </button>
        </div>
        </form>
    );
    };

    export default ProjectForm;
