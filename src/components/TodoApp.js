
import {el, Component, predicate} from 'simpledom-component';
import {Header} from './Header';
import {Main} from './Main';
import {Footer} from './Footer';

export class TodoApp extends Component {
	render() {
		return <div>
			<Header />
			<Main />
			<Footer />
		</div>;
	}
}
