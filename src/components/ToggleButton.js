import {el, ConnectedComponent} from 'simpledom-component';
import {UPDATE_COMPLETE, toggleAll} from '../model/todo';

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
