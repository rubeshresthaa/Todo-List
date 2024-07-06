import Footer from "./Footer"

const   Total = ({completeTodo,total}) => {
  return (
    <div>
      <h1 className="bg-white text-blue-950 text-center font-bold text-3xl mt-60">Completed TODO List:{completeTodo}</h1>
      <h1 className="bg-white text-blue-950 text-center font-bold text-3xl mt-6" >Total:{total}</h1>
     <Footer />

    </div>

  )
}
export default   Total