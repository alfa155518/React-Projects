
import { useState } from 'react';
import Title from '../components/Title'










const Services = () => {
    const [setServices] = useState({
        services:[
            {
                icon:<i className='fa-solid fa-cocktail'></i>,
                title:'free cocktails',
                info:"lorem ipues Dolor sit amet Door Cat Lion Manege Engla"
            },
            {
                icon:<i className='fa-solid fa-hiking'></i>,
                title:'Endless Hiking',
                info:"lorem ipues Dolor sit amet Door Cat Lion Manege Engla"
            },
            {
                icon:<i className='fa-solid fa-shuttle-van'></i>,
                title:'Free Shuttle',
                info:"lorem ipues Dolor sit amet Door Cat Lion Manege Engla"
            },
            {
                icon:<i className='fa-solid fa-beer'></i>,
                title:'Strongest Beer',
                info:"lorem ipues Dolor sit amet Door Cat Lion Manege Engla"
            }
        ]
    })

    

    return (
    <section className="services">
        <Title title='Services'/>
        <div className='services-center'>
        {setServices.services.map((item,i) => {
            return (
                <article key={i} className='service'>

                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>

                
            )
        })}
        </div>
    </section>
    )
};

export default Services;
