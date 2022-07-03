// styles
import classes from './App.module.scss';

// components
import Sidebar from './components/Sidebar';
import Main from './components/Main';

function App() {
    return (
        <div className={classes.app}>
            <Sidebar />
            <Main />
        </div>
    );
}

export default App;
