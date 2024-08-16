import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../src/paginas/Login/Login';
import Cadastro from '../src/paginas/cadastro/Cadastro';
import Home from '../src/paginas/home/Home';
import { AuthProvider } from './contexts/AuthContext';
import ListaTemas from './temas/listaTemas/ListaTemas';
import FormularioTema from '../src/temas/formularioTema/FormularioTema'
import DeletarTema from './temas/deletarTema/DeletarTema';
import ListaPostagens from './postagens/listaPostagens/ListaPostagens';
import FormularioPostagem from './postagens/formularioPostagem/FormularioPostagem';
import DeletarPostagem from './postagens/deletarPostagem/DeletarPostagem';
import Perfil from './paginas/perfil/Perfil';
import { ToastContainer } from 'react-toastify';


function App() {
  
  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/home" element={<Home />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastroTema" element={<FormularioTema />} />
              <Route path="/editarTema/:id" element={<FormularioTema />} />
              <Route path="/deletarTema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
              <Route path="/cadastroPostagem" element={<FormularioPostagem />} />
              <Route path="/editarPostagem/:id" element={<FormularioPostagem />} />
              <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />
              <Route path="/perfil" element={<Perfil />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;