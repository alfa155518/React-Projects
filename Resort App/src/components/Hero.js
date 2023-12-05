


const Hero = ({ children, hero }) => {


    return  (
        <header className={hero}>
        {children}
        </header>
    )

}

Hero.defaultProps = {
    hero:'defaultHero'
}

export default Hero;