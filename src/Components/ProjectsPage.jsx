
const ProjectsPage = () => {
    const projectTabs = [
        {
            title: 'Restaurant Site',
            thumbnail: '/projects_com/res-min.png'
        },
        {
            title: 'Artist Portfolio',
            thumbnail: '/projects_com/art-min.png'
        },
        {
            title: 'B2B Web App',
            thumbnail: '/projects_com/tech-min.png'
        },
        {
            title: 'Food Delivery Site',
            thumbnail: '/projects_com/del-min.png'
        },
    ]
  return (
    <div className=' image_tabs-container' >
            <div className='container_header'>
                <h1 className='text-3xl text-center text_heading  '>PROJECTS</h1>
                <h2 className="text_para">- Scroll</h2>
            </div>
            <div className='container_content'>
                <div className=' image-screen '>
                    <img src={projectTabs[0].thumbnail} alt={projectTabs[0].title} className='image-tab' />
                </div>
                <div className=' image-screen '>
                    <img src={projectTabs[2].thumbnail} alt={projectTabs[2].title} className='image-tab' />
                </div>
                <div className=' image-screen '>
                    <img src={projectTabs[1].thumbnail} alt={projectTabs[1].title} className='image-tab' />
                </div>
                <div className=' image-screen '>
                    <img src={projectTabs[3].thumbnail} alt={projectTabs[3].title} className='image-tab' />
                </div>
            </div>
        </div>
  )
}

export default ProjectsPage
