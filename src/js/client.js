import react from 'react';
import reactDOM from 'react-dom';

class Layout extends React.Component {
    render() {
        return (
            <h1>It Works</h1>
        );
    }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout />, app);