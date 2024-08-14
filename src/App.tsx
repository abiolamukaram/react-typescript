import Count from "./components/Count"
import Form from "./components/Form"
// import Test from "./components/Test"


const App: React.FC = () => {
  return (
    <>
    {/* <Test firstName= "Abiola"  job="Senior Developer"/>
    <Test firstName= "Juwon"  job="Frontend Developer"/>
    <Test firstName= "Abisola"  job="Backend Developer"/>
    <Test firstName= "Lola"  job="Mobile Developer"/> */}
    <div className="h-screen flex flex-col items-center justify-center gap-10">
    <Count/>
    <Form/>
    </div>

    </>
  )
}

export default App
