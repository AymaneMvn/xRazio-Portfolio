function Card(props) {
    return (
        <div className="content" data-aos="fade-up">
             <div class="card">
            <div class="card-img">
              <img src={props.image} alt="backgroundImage"/>
            </div>
            <div class="card-info">
              <p class="text-title">{props.name}</p>
              <p class="text-body">{props.desc}</p>
              <button class="card-button">Read More</button>
            </div>
          </div>
        </div>
    )
}

export default Card;