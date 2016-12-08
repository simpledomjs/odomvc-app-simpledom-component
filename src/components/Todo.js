import {el, ConnectedComponent} from 'simpledom-component';

import {updateCompleted, UPDATE_TODO, deleteTodo, editTodo, updateTodo} from '../services/todo';

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

	static blurIfEnter(event) {
		if (event.keyCode === 13) {
			event.target.blur();
		}
	}

	updateTodo(event) {
		event.preventDefault();
		updateTodo(this.store, this.props.todoId, event.target.value);
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
					<label onDblClick={this.editTodo}>{todo.label}</label>
					<button class="destroy" onClick={this.deleteTodo}/>
				</div>
				<input ref={this.refInputEdit} class="edit" value={todo.label} onKeyUp={Todo.blurIfEnter} onBlur={this.updateTodo}/>
			</li>
		)
	}
}
