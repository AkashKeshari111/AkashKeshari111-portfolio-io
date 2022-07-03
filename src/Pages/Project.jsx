import React from 'react'
import { Link } from 'react-router-dom'
import "./Projectc.css"


const projects=[{src:"data:image/jpeg;base64,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",
                title:"Pharmeasy Clone",
                dis:"Pharmeasy is an online web application that provides online medicine and health related products.",
                liveDemo:"//cerulean-macaron-cbc50c.netlify.app",
                github:"//github.com/AkashKeshari111/pharmeasy-project" },



                {src:"data:image/jpeg;base64,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",
                title:"Myntra Clone",
                dis:"  Myntra Clone is a online selling cloths and home & decorative products.",
                liveDemo:"//silly-custard-061700.netlify.app",
                github:"//github.com/AkashKeshari111/Myntra-Clone" },
                
                
                {src:"data:image/jpeg;base64,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",
                title:"Kimaye Clone",
                dis:"Kimaye Clone is online store selling Fruits and Vegitables.",
                liveDemo:"//kimaye-hamara.netlify.app/",
                github:"//github.com/surajDongre-16/Kimaye-Clone" },
          
                {src:"data:image/jpeg;base64,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",
                title:"Other Clone",
                dis:"",
                liveDemo:"//the-awesome-akashkeshari2722000-gmail-com-site-db882.netlify.app",
                github:"" }
              ]

const Project = () => {

  return (

    <div >

    <div className='div_p23'>
      <h1 className='h1p23'>Projects</h1>
    </div>


    <div className='project_div'>

    <div>
      {projects.map((el)=>(
        <div className='div_p'>
          <img className='img_p' src={el.src}/>
          <div>
            <div className='div_p1'>
            <h2 className='h2p'>{el.title}</h2>
            <p className='pp'>{el.dis}</p>
            </div>
            <div className='div_btnp'>
            <Link  to={el.liveDemo}> <button className='btn1p'>Demo</button> </Link>
            <Link  to={el.github}> <button className="btn2p">Github</button> </Link>
            </div>
            </div>
        </div>
      ))}
    </div>
    </div>
    </div>
  )
}

export default Project