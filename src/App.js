import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import BackGroundImg from './assets/bg1.jpg';


const App =() => {
    const bgc = "red";
    return (
        <>
           <Header
               title='This is title'
               descr='This is description!'
           />
            <Layout
                title='This is title'
                descr='This is description'
                urlBg={BackGroundImg}
                colorBg={null}
            />
            <Layout
                title='This is title'
                descr='This is description'
                urlBg={null}
                colorBg={bgc}
            />
            <Layout
                title='This is title'
                descr='This is description'
                urlBg={BackGroundImg}
                colorBg={null}
            />
            <Footer />
        </>
    )
};

export default App;