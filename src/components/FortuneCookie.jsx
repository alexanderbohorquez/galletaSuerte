const FortuneCookie = (props, backgroundImg) => {
    const { phrase, author } = props.data;

    return (
        <article style={{background: backgroundImg}}>
            <h1 className="title">GALLETAS DE LA SUERTE</h1>
            <div className="card">
                <p>{phrase}</p>
            </div>
            <div className="cardAuthor">
                <p>{author}</p>
            </div>
        </article>
    );
};

export default FortuneCookie;