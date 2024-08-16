
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { store } from './src/redux/store';
import { Provider } from 'react-redux';

AppRegistry.registerComponent(appName, () =>
    () => (
        <Provider store={store}>
            <App />
        </Provider>
    )
);
