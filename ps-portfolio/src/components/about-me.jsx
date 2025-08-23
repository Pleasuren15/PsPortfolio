import '../styles/about-me.css';

export default function AboutMe() {
    return (
        <>
            <div className="navbar">
                <div className="navbar-reset">
                    <img src="https://avatars.githubusercontent.com/u/77783514?v=4" alt="sbu avatar" />
                </div>
                <div className="navbar-links">
                    <ul>
                        <li><a href="#techstack">Tech Stack</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>

            </div>

            <div className='about-me-container'>
                <div className='about-me-container-information'>
                    <h1>Hi, I'm Pleasure Sibusiso Ndhlovu</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aperiam assumenda ut veritatis ducimus autem sed unde eaque! Consequatur, nobis q
                        uam provident aliquid ullam cupiditate quod nisi quas illo delectus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo aperiam assumenda 
                        ut veritatis ducimus autem sed unde eaque! Consequatur, nobis q uam provident aliquid ullam cupiditate quod nisi quas illo delectus?
                    </p>
                    <div className='about-me-container-buttons'>
                        <button className='btn-primary'>Download CV</button>
                        <button className='btn-primary'>Projects</button>
                        <button className='btn-primary'>Get In Touch</button>
                    </div>
                    <div className='about-me-container-socials' >
                        <ul>
                            <li><a href="#"><img src='https://img.icons8.com/?size=100&id=sbhfmWq4KRr1&format=png&color=000000' /></a></li>
                            <li><a href="#"><img src='https://img.icons8.com/?size=100&id=fFbCvS8wxZFo&format=png&color=000000' /></a></li>
                            <li><a href="#"><img src='https://img.icons8.com/?size=100&id=67570&format=png&color=000000' /></a></li>
                        </ul>
                    </div>
                </div>
                <div className='about-me-container-avatar'>
                    <img src="https://avatars.githubusercontent.com/u/77783514?v=4" alt="sbu avatar" />
                </div>
            </div>
        </>
    );
}