import {el, ConnectedComponent} from 'simpledom-component';
import {UPDATE_COMPLETE} from '../model/todo';

export class TodoCounter extends ConnectedComponent {

	eventsToSubscribe() {
		return [UPDATE_COMPLETE];
	}

	render() {
		return (
			<span class="todo-count"><strong>{this.state.todos.filter(todo => !todo.completed).length}</strong> item left{this.state.todos.length > 1 ? 's' : ''}</span>
		);
	}

}
