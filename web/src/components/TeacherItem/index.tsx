import React from 'react'
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://scontent-gru2-2.xx.fbcdn.net/v/t1.0-9/37680762_1842341062521595_6217034314228432896_n.jpg?_nc_cat=100&_nc_sid=09cbfe&_nc_eui2=AeFWBMo1hG-kdrXwai62waw0hwwj5BaA5SqHDCPkFoDlKmCS0IPLmybseWEi5S5dE6gnwQ1ZKMglATIFqo7IY6sp&_nc_ohc=ZwJui2URq-EAX-RBQY_&_nc_ht=scontent-gru2-2.xx&oh=49144b5b9ce308233fe347338d4b3708&oe=5F502D18" 
                    alt="Rafael Campos" 
                />
                <div>
                    <strong>Rafael Campos</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Instrutor de Matemática, minha missão de vida é levar conhecimento e contribuir para o crescimento de quem se interessar.
                <br /> <br />
                Comecei minha jornada ainda no ensino fundamental, quando minha professora me indicava para dar aulas particulares para meus colégas de classe.
            </p>

            <footer>
                <p>
                    Preço/Hora        
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Ícone whatsapp" />
                    Entrar em contato
                </button>
            </footer>
		</article>
    );
}

export default TeacherItem;