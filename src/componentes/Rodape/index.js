import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

import './rodape.css'

const Rodape = () => {
    return (<footer className="footer">
       <section>
       <ul>
            <li>
                <a href="facebook.com" target="_blank">
                    <img src="/imagens/facebook.png" alt="" />
                </a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/gideon-alves/" target="_blank" rel="noreferrer">
                    <AiFillLinkedin color='#f5f5f5f5' size={35} />
                </a>
            </li>
            <li>
                <a href="https://github.com/gideonalves" target="_blank" rel="noreferrer">
                    <AiFillGithub color='#f5f5f5f5' size={35} />
                </a>
            </li>
        </ul>
       </section>
       <section>
       <img src="/imagens/logo.png" alt="" />
       </section>
       <section>
        <p>
            Desenvolvido por Gideon.
        </p>
       </section>
    </footer>)
}

export default Rodape