import React,{useState} from 'react';
import logo from '@/assets/svg/logo.svg';

function App() {
    const [title,setTitle] = useState<string>('Vite-React 模板');
    const name:string = 200;
    const age:number = 'kkk';
    const str:number = "kk";
    return (
        <div>
            <h3>{title}</h3>
            <img src={logo} alt=""/>
        </div>
    );
}

export default App;
