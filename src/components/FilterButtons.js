
import {el, Component} from 'simpledom-component';

import {UPDATE_FILTER} from '../model/todo';

export class FilterButtons extends Component {
	eventsToSubscribe() {
		return [UPDATE_FILTER];
	}

	render() {
		return (
			<ul class="filters">
				<li>
					<a class={{selected: this.state.filter === 'all'}} href="#/">All</a>
				</li>
				<li>
					<a class={{selected: this.state.filter === 'active'}} href="#/active">Active</a>
				</li>
				<li>
					<a class={{selected: this.state.filter === 'completed'}} href="#/completed">Completed</a>
				</li>
			</ul>
		);
	}
}
