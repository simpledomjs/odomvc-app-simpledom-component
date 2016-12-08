import {el, ConnectedComponent} from 'simpledom-component';
import {UPDATE_COMPLETE} from '../services/todo';

export class TodoCounter extends ConnectedComponent {

	eventsToSubscribe() {
		return [UPDATE_COMPLETE];
	}

	render() {
		return (
			<span class="todo-count"><strong>{this.state.todos.filter(todo => !todo.completed).length}</strong> item left</span>
		);
	}

}
