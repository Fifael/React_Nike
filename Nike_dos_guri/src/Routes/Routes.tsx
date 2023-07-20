import { Routes, Route} from 'react-router-dom';
import Home from '../Pages/Home';

const Routies = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default Routies;