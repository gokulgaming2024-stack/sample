import { createTodo, rehydrateTodo } from './todo';
import { createProject, rehydrateProject } from './project';

// Storage Module - IIFE for localStorage management
const Storage = (() => {
    const STORAGE_KEY_PROJECTS = 'todoApp_projects';
    const STORAGE_KEY_TODOS = 'todoApp_todos';

    const saveProjects = (projects) => {
        try {
            const data = projects.map(p => p.toJSON());
            localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(data));
        } catch (e) {
            console.error('Failed to save projects:', e);
        }
    };

    const saveTodos = (todos) => {
        try {
            const data = todos.map(t => t.toJSON());
            localStorage.setItem(STORAGE_KEY_TODOS, JSON.stringify(data));
        } catch (e) {
            console.error('Failed to save todos:', e);
        }
    };

    const loadProjects = () => {
        try {
            const data = localStorage.getItem(STORAGE_KEY_PROJECTS);
            if (!data) return [];
            const parsed = JSON.parse(data);
            return parsed.map(p => rehydrateProject(p));
        } catch (e) {
            console.error('Failed to load projects:', e);
            return [];
        }
    };

    const loadTodos = () => {
        try {
            const data = localStorage.getItem(STORAGE_KEY_TODOS);
            if (!data) return [];
            const parsed = JSON.parse(data);
            return parsed.map(t => rehydrateTodo(t));
        } catch (e) {
            console.error('Failed to load todos:', e);
            return [];
        }
    };

    const clearAll = () => {
        try {
            localStorage.removeItem(STORAGE_KEY_PROJECTS);
            localStorage.removeItem(STORAGE_KEY_TODOS);
        } catch (e) {
            console.error('Failed to clear storage:', e);
        }
    };

    return {
        saveProjects,
        saveTodos,
        loadProjects,
        loadTodos,
        clearAll
    };
})();

export default Storage;
