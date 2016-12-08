import {el, ConnectedComponent, predicate} from 'simpledom-component';
import {UPDATE_COMPLETE, deleteCompleted} from '../model/todo'

export class ClearAllButton extends ConnectedComponent {
	eventsToSubscribe() {
		return [UPDATE_COMPLETE];
	}

	clearCompleted() {
		deleteCompleted(this.store);
	}

	render() {
		return predicate(!!this.state.todos.filter(todo => todo.completed).length,
			<button class="clear-completed" onClick={this.clearCompleted}>Clear completed</button>
		);
	}

}
