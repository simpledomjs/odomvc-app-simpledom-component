import {el, ConnectedComponent} from 'simpledom-component';

import {updateCompleted, UPDATE_TODO, deleteTodo, editTodo, updateTodo} from '../model/todo';

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

export class Todo extends ConnectedComponent {

	eventsToSubscribe() {
		return [
			UPDATE_TODO(this.props.todoId)
		];
	}

	updateCompleted() {
		updateCompleted(this.store, this.props.todoId);
	}

	deleteTodo() {
		deleteTodo(this.store, this.props.todoId);
	}

	editTodo() {
		editTodo(this.store, this.props.todoId);
	}

	handleKeyUp(event) {
		if (event.keyCode === ENTER_KEY) {
			event.target.blur();
		} else if (event.keyCode === ESCAPE_KEY) {
			event.target.value = this.currentTodo().title;
			event.target.blur();
		}
	}

	updateTodo(event) {
		event.preventDefault();
		const value = event.target.value && event.target.value.trim();
		if (value) {
			updateTodo(this.store, this.props.todoId, value);
		} else {
			deleteTodo(this.store, this.props.todoId);
		}
	}

	refInputEdit(nodeInputEdit) {
		this.nodeInputEdit = nodeInputEdit;
	}

	componentDidMount() {
		if (this.currentTodo().editing) {
			this.nodeInputEdit.focus();
		}
	}

	currentTodo() {
		return this.state.todos.find(todo => todo.id === this.props.todoId);
	}

	render() {
		const todo = this.currentTodo();

		return (
			<li class={{completed: todo.completed, editing: todo.editing}}>
				<div class="view">
					<input class="toggle" type="checkbox" checked={todo.completed ? 'checked' : undefined}
						   onChange={this.updateCompleted}
					/>
					<label onDblClick={this.editTodo}>{todo.title}</label>
					<button class="destroy" onClick={this.deleteTodo}/>
				</div>
				<input ref={this.refInputEdit} class="edit" value={todo.title} onKeyUp={this.handleKeyUp} onBlur={this.updateTodo}/>
			</li>
		)
	}
}
