function Service(props) {
    return (
        <div className="ServiceContainer" data-aos="fade-up">
            <div className="image">
            <img src={props.image} alt={"webDesign" }/>
            </div>
           <div className="glass">
            <div className="cont">
            <h1>{props.title}</h1>
            <p>{props.desc}</p>
            </div>
           </div>
        </div>
    )
}

export default Service;