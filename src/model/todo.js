export const UPDATE_COMPLETE = 'UPDATE_COMPLETE';

export const UPDATE_TODO_LIST = 'UPDATE_TODO_LIST';

export const UPDATE_TODO = todoId => 'UPDATE_TODO_' + todoId;

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const SYNC_TO_LOCALSTORAGE = 'SYNC_TO_LOCALSTORAGE';

export function editTodo(store, todoId) {
	store.updateState({
		todos: store.state.todos.map(storeTodo => {
			return (storeTodo.id === todoId ? {...storeTodo, editing: true} : storeTodo)
		})
	}, UPDATE_TODO(todoId));
}

export function updateTodo(store, todoId, title) {
	store.updateState({
		todos: store.state.todos.map(storeTodo => {
			return (storeTodo.id === todoId ? {...storeTodo, editing: false, title} : storeTodo)
		})
	}, UPDATE_TODO(todoId), SYNC_TO_LOCALSTORAGE);
}

export function updateCompleted(store, todoId) {
	store.updateState({
		todos: store.state.todos.map(storeTodo => {
			return (storeTodo.id === todoId ? {...storeTodo, completed: !storeTodo.completed} : storeTodo)
		})
	}, UPDATE_COMPLETE, UPDATE_TODO(todoId), SYNC_TO_LOCALSTORAGE);
}

export function toggleAll(store, completed) {
	const events = [UPDATE_COMPLETE, SYNC_TO_LOCALSTORAGE].concat(
		...store.state.todos.map(todo => todo.id).map(UPDATE_TODO)
	);
	store.updateState({
		todos: store.state.todos.map(todo => {
			return {...todo, completed};
		})
	}, ...events);
}

export function deleteTodo(store, todoId) {
	store.updateState({
		todos: store.state.todos.filter(todo => todo.id !== todoId)
	}, UPDATE_TODO_LIST, SYNC_TO_LOCALSTORAGE);
}

export function deleteCompleted(store) {
	store.updateState({
		todos: store.state.todos.filter(todo => !todo.completed)
	}, UPDATE_TODO_LIST, SYNC_TO_LOCALSTORAGE);
}

export function addTodo(store, todoMessage) {
	const nextId = Math.max(0, ...store.state.todos.map(todo => todo.id)) + 1;
	store.updateState({
		todos: [...store.state.todos, {
			id: nextId,
			completed: false,
			title: todoMessage
		}]
	}, UPDATE_TODO_LIST, SYNC_TO_LOCALSTORAGE)
}
