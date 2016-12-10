import {el, Component} from 'simpledom-component';

import {TodoCounter} from './TodoCounter';
import {ClearAllButton} from './ClearAllButton';

import {UPDATE_TODO_LIST} from '../model/todo';

import {FilterButtons} from './FilterButtons';

export class Footer extends Component {
	eventsToSubscribe() {
		return [UPDATE_TODO_LIST];
	}

	render() {
		if (!this.state.todos.length) {
			return undefined;
		}
		return (
			<footer class="footer">
				<TodoCounter />
				<FilterButtons />
				<ClearAllButton />
			</footer>
		);
	}

}
