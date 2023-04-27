import Body from "../Body/Body"
import Title from "../Title/Title"

const BlogPost = ({title, body}) => {
  return (
    <div>
        <Title title={title}/>
        <Body body={body}/>
    </div>
  )
}

export default BlogPost