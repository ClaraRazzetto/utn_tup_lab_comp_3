import Body from "../Body/Body"
import Title from "../Title/Title"

const title = "La Escuela Oficial de Ballet celebró el Día Internacional de la Danza"
const body = "Dentro del marco de las actividades organizadas por la Secretaria de Cultura y el Instituto de Música y Danza, el cuerpo formativo colmó el Teatro Provincial 'Juan Carlos Saravia'"

const BlogPost = () => {
  return (
    <div>
        <Title title={title}/>
        <Body body={body}/>
    </div>
  )
}

export default BlogPost