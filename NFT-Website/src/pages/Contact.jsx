
import Hero from '../components/Hero'
import Footer from '../components/Footer'



const Contact = () => {


    return (
        <>
        <Hero title={'Contact Us'}/>
        <section className="contact">
        <div className="contact-head">
        <h1>Drop A Message</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloribus accusamus dolor adipisci? Asperiores, suscipit dolor culpa accusantium eius voluptas?</p>
        </div>

        <form>
            <input type="text" placeholder='Enter Your Name' />
            <input type="email" placeholder='Enter Your Email' />
            <input type="text" placeholder='Enter Your Message' />
            <textarea></textarea>
            <button type='submit' className='btn'>Send A Message</button>
        </form>
        </section>
        <Footer/>
        </>
    )

}



export default Contact;