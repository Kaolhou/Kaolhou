import './index.css'
import {BoxContainer,ItemConteiner} from '../../components/cards/index'
import github from '../../media/github.png'
import instagram from '../../media/instagram.png'
import twitter from '../../media/twitter.png'
import twitch from '../../media/twitch-55.png'
import gmail from '../../media/gmail.png'

function About(){
    return(
        <div id="about-container">
            <h1>Redes Sociais e Contato</h1>
            <BoxContainer>
                <ItemConteiner
                    url={github}
                    title='Github'
                    content={<a href='https://github.com/Kaolhou' target='_blank' rel="noreferrer">Link</a>}
                />
                <ItemConteiner
                    url={instagram}
                    title='Instagram'
                    content={<a href='https://www.instagram.com/andre._.mendess/' target='_blank' rel="noreferrer">Link</a>}
                />
                <ItemConteiner
                    url={twitter}
                    title='Twitter'
                    content={<a href='https://twitter.com/Kaolhou' target='_blank' rel="noreferrer">Link</a>}
                />
                <ItemConteiner
                    url={twitch}
                    title='Twitch'
                    content={<a href='https://www.twitch.tv/kaolhou' target='_blank' rel="noreferrer">Link</a>}
                />
                <ItemConteiner
                    url={gmail}
                    title='E-mail'
                    content='xdroid42@gmail.com'
                />
            </BoxContainer>
        </div>
    )
}
export default About