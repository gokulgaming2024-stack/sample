// Todo Factory
function createTodo(title, description = '', dueDate = null, priority = 'medium', notes = '', projectId = null) {
    return {
        id: crypto.randomUUID(),
        title,
        description,
        dueDate,
        priority,
        notes,
        projectId,
        completed: false,
        createdAt: new Date().toISOString(),
        
        toggleComplete() {
            this.completed = !this.completed;
        },
        
        updateTitle(newTitle) {
            this.title = newTitle;
        },
        
        updateDescription(newDescription) {
            this.description = newDescription;
        },
        
        updateDueDate(newDate) {
            this.dueDate = newDate;
        },
        
        updatePriority(newPriority) {
            this.priority = newPriority;
        },
        
        updateNotes(newNotes) {
            this.notes = newNotes;
        },
        
        // Convert to plain object for storage
        toJSON() {
            return {
                id: this.id,
                title: this.title,
                description: this.description,
                dueDate: this.dueDate,
                priority: this.priority,
                notes: this.notes,
                projectId: this.projectId,
                completed: this.completed,
                createdAt: this.createdAt
            };
        }
    };
}

// Rehydrate todo from stored data
function rehydrateTodo(data) {
    const todo = createTodo(
        data.title,
        data.description,
        data.dueDate,
        data.priority,
        data.notes,
        data.projectId
    );
    
    todo.id = data.id;
    todo.completed = data.completed;
    todo.createdAt = data.createdAt;
    
    return todo;
}

export { createTodo, rehydrateTodo };
