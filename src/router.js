import Rlite from 'rlite-router';

import {UPDATE_FILTER} from './model/todo';

export function initRouter(store) {
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
}
