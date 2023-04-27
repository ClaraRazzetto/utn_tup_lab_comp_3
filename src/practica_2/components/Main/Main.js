import BlogPost from '../BlogPost/BlogPost';
import Body from '../Body/Body'

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
            <Body pageBody={pageBody}/>
            <BlogPost/>
            {/* <p>hola buen dia</p> */}
        </>
    )
}

export default Main;