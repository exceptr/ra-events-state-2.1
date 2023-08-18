import '../App.css'

export default function ProjectList({files}) {
    console.log(files)
    return (
        <div className="projects">
            {files.map(element => {
                return (<img className="project" src={element.img} alt={element.category}></img>)
            })}
        </div>
    )
}