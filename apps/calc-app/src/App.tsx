import './App.css'
import Numbers from './components/Numbers'

export default function App() {
    return (
        <Numbers onTypeNumber={n => {console.log(n)}}/>
    )
}
