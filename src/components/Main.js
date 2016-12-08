import {el, Component, ConnectedComponent} from 'simpledom-component';

import {Todo} from './Todo';

import {UPDATE_COMPLETE, UPDATE_TODO_LIST, UPDATE_FILTER, toggleAll} from '../services/todo';

export class Main extends ConnectedComponent {
	eventsToSubscribe() {
		return [UPDATE_TODO_LIST, UPDATE_FILTER];
	}

	filterForTodo() {
		if (this.state.filter === 'active') {
			return todo => !todo.completed
		} else if (this.state.filter === 'completed') {
			return todo => todo.completed
		}
		return todo => true;
	}

	render() {
		if (!this.state.todos.length) {
			return undefined;
		}
		return (
			<section class="main">
				<ToggleButton />
				<label for="toggle-all">Mark all as complete</label>
				<ul class="todo-list">
					{this.state.todos.filter(this.filterForTodo()).map(todo =>
						<Todo todoId={todo.id}/>
					)}
				</ul>
			</section>
		);
	}
}

export class ToggleButton extends ConnectedComponent {
	eventsToSubscribe() {
		return [UPDATE_COMPLETE]
	}

	toggleAll(event) {
		toggleAll(this.store, event.target.checked);
	}

	isChecked() {
		return !this.state.todos.filter(todo => !todo.completed).length;
	}

	render() {
		return (
			<input class="toggle-all" type="checkbox"
				   onChange={this.toggleAll}
				   checked={this.isChecked() ? 'checked' : undefined}
			/>
		)
	}
}
