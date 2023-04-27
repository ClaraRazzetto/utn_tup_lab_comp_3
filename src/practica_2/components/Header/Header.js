import Title from "../Title/Title"

const Header = ({pageTitle}) => {
  return (
    <div className=".header-container">
      <Title pageTitle={pageTitle}/>
    </div>
  )
}

export default Header