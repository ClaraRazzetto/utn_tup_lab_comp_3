import BlogPost from '../BlogPost/BlogPost';
import Body from '../Body/Body';
import "./Main.css";

const Main = ({pageBody, links}) => {
    return(
        <>
            <nav>
                <ul>
                    {links.map((link,index)=>(
                        <li key={index}><a href={link}>{link}</a></li>
                    ))}
                </ul> 
            </nav>

            <div className='body'>
                <Body pageBody={pageBody}/>
            </div>
            
            <BlogPost/>
            
            {/* <p>hola buen dia</p> */}
        </>
    )
}

export default Main;