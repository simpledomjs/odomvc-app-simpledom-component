import {el, renderToDom, Store} from 'simpledom-component';
import {TodoApp} from './components/TodoApp';

import {UPDATE_FILTER} from './services/todo';

import Rlite from 'rlite-router';

const store = new Store(
	{
		todos: [
			{
				id: 1,
				completed: true,
				label: 'Create a TodoMVC template'
			},
			{
				id: 2,
				completed: false,
				label: 'Rule the web'
			}
		],
		filter: 'all'
	}
);

const router = Rlite();

router.add('', () => store.updateState({filter: 'all'}, UPDATE_FILTER));
router.add('active', () => store.updateState({filter: 'active'}, UPDATE_FILTER));
router.add('completed', () => store.updateState({filter: 'completed'}, UPDATE_FILTER));

// Hash-based routing
function processHash() {
	const hash = location.hash || '#';
	router.run(hash.slice(1));
}

window.addEventListener('hashchange', processHash);
processHash();

renderToDom('todoapp', <TodoApp/>, store);

