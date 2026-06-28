import { createTodo } from './todo';
import { createProject } from './project';
import Storage from './storage';

// App Controller - IIFE for application logic
const App = (() => {
    let projects = [];
    let todos = [];
    let currentProjectId = null;

    const init = () => {
        // Load data from storage
        projects = Storage.loadProjects();
        todos = Storage.loadTodos();

        // Create default project if none exist
        if (projects.length === 0) {
            const defaultProject = createProject('Inbox');
            projects.push(defaultProject);
            currentProjectId = defaultProject.id;
            saveData();
        } else {
            currentProjectId = projects[0].id;
        }
    };

    const saveData = () => {
        Storage.saveProjects(projects);
        Storage.saveTodos(todos);
    };

    // Project operations
    const createNewProject = (name) => {
        const newProject = createProject(name);
        projects.push(newProject);
        saveData();
        return newProject;
    };

    const deleteProject = (projectId) => {
        projects = projects.filter(p => p.id !== projectId);
        todos = todos.filter(t => t.projectId !== projectId);

        if (currentProjectId === projectId) {
            currentProjectId = projects.length > 0 ? projects[0].id : null;
        }

        saveData();
    };

    const getProjects = () => [...projects];

    const setCurrentProject = (projectId) => {
        if (projects.find(p => p.id === projectId)) {
            currentProjectId = projectId;
        }
    };

    const getCurrentProjectId = () => currentProjectId;

    const getCurrentProjectName = () => {
        const project = projects.find(p => p.id === currentProjectId);
        return project ? project.name : '';
    };

    // Todo operations
    const createNewTodo = (title, description, dueDate, priority, notes) => {
        const newTodo = createTodo(
            title,
            description,
            dueDate,
            priority,
            notes,
            currentProjectId
        );
        todos.push(newTodo);
        saveData();
        return newTodo;
    };

    const updateTodo = (todoId, updates) => {
        const todo = todos.find(t => t.id === todoId);
        if (todo) {
            if (updates.title !== undefined) todo.updateTitle(updates.title);
            if (updates.description !== undefined) todo.updateDescription(updates.description);
            if (updates.dueDate !== undefined) todo.updateDueDate(updates.dueDate);
            if (updates.priority !== undefined) todo.updatePriority(updates.priority);
            if (updates.notes !== undefined) todo.updateNotes(updates.notes);
            saveData();
        }
        return todo;
    };

    const toggleTodoComplete = (todoId) => {
        const todo = todos.find(t => t.id === todoId);
        if (todo) {
            todo.toggleComplete();
            saveData();
        }
        return todo;
    };

    const deleteTodo = (todoId) => {
        todos = todos.filter(t => t.id !== todoId);
        saveData();
    };

    const getTodosForProject = (projectId) => {
        return todos.filter(t => t.projectId === projectId);
    };

    const getTodo = (todoId) => {
        return todos.find(t => t.id === todoId);
    };

    const getAllTodos = () => [...todos];

    return {
        init,
        createNewProject,
        deleteProject,
        getProjects,
        setCurrentProject,
        getCurrentProjectId,
        getCurrentProjectName,
        createNewTodo,
        updateTodo,
        toggleTodoComplete,
        deleteTodo,
        getTodosForProject,
        getTodo,
        getAllTodos
    };
})();

export default App;
