import {el, renderToDom, Store} from 'simpledom-component';
import {TodoApp} from './components/TodoApp';


renderToDom('todoapp', <TodoApp/>, new Store(
	{
		todos: [
			{
				id: 1,
				completed: true,
				label: 'Create a TodoMVC template'
			},
			{
				id: 2,
				completed: false,
				label: 'Rule the web'
			}
		]
	}
));


