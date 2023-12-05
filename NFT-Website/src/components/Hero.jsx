import NavBar from "./Nav";






const Hero = ({title}) => {


    return (
        <div className="hero">

        <NavBar/>
        <h1>{title}</h1>
        </div>
    )

}



export default Hero;