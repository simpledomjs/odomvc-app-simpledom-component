import {el, renderToDom, Store} from 'simpledom-component';
import {TodoApp} from './components/TodoApp';

import {initRouter} from './router';

import {fetchTodos, persistTodos} from './model/localStorage';
import {SYNC_TO_LOCALSTORAGE} from './model/todo';

const store = new Store(
	{
		todos: fetchTodos(),
		filter: 'all'
	}
);

initRouter(store);

store.subscribe(SYNC_TO_LOCALSTORAGE, (event, state) => {
	persistTodos(state.todos);
});

renderToDom('todoapp', <TodoApp/>, store);

