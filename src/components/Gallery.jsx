function Gallery(props) {

    return(
        <div className="gallery-container">
            {props.images.map((image, index) => (<img key={index} src={image}></img>))}
        </div>
    );
}

export default Gallery