import {useState} from 'react';
import logo from '@/assets/svg/logo.svg';

function App() {
    const [title] = useState<string>('Vite-React 模板');
    return (
        <div>
            <h3>{title}</h3>
            <img src={logo} alt=""/>
        </div>
    );
}

export default App;
