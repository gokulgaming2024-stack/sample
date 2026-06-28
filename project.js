// Project Factory
function createProject(name) {
    return {
        id: crypto.randomUUID(),
        name,
        createdAt: new Date().toISOString(),
        
        updateName(newName) {
            this.name = newName;
        },
        
        // Convert to plain object for storage
        toJSON() {
            return {
                id: this.id,
                name: this.name,
                createdAt: this.createdAt
            };
        }
    };
}

// Rehydrate project from stored data
function rehydrateProject(data) {
    const project = createProject(data.name);
    project.id = data.id;
    project.createdAt = data.createdAt;
    return project;
}

export { createProject, rehydrateProject };
