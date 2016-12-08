
import {el, Component} from 'simpledom-component';

import {addTodo} from '../services/todo';

export class Header extends Component {

	addTodo(event) {
		const todoVal = event.target.value;
		if (todoVal) {
			event.target.value = '';
			addTodo(this.store, todoVal);
		}
	}

	refInput(inputNode) {
		this.inputNode = inputNode;
	}

	componentDidMount() {
		this.inputNode.focus();
	}

	render() {
		return (
			<header class="header">
				<h1>todos</h1>
				<input ref={this.refInput} class="new-todo" placeholder="What needs to be done?"
					   onChange={this.addTodo}
				/>
			</header>
		);
	}
}
