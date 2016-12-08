

const namespace = 'todos-simpledom-component';
const key = 'todos';

export function fetchTodos() {

	return JSON.parse(localStorage.getItem(namespace + '-' + key) || '[]');
}

export function persistTodos(todos = []) {
	localStorage.setItem(namespace + '-' + key, JSON.stringify(todos.map(todo => {
		return {
			id: todo.id,
			title: todo.title,
			completed: todo.completed
		}
	})));
}


