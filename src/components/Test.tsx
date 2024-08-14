interface TestProps{
    firstName: string
    lastName?: string
    job: string
}

const Test:React.FC <TestProps> = ({firstName,lastName="Abdulrahman", job}) => {
  return (
    <div>
      <h1>my name is {firstName} {lastName}, i'm a {job}</h1>
    </div>
  )
}

export default Test
