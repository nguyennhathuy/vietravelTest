function NewsList({ news, currentPage }) {
    return (
        <div className="row row-cols-2 mt-5">
            {
                news.map(function(newsItem, index) {
                    const dateItem = new Date(newsItem.publishedAt)

                    return (
                        <div className="card" key={index} >
                            <img src={newsItem.urlToImage} className="card-img-top" alt="Image" />
                            <div className="card-body">
                                <h5 className="card-title">{newsItem.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">{`${dateItem.getMonth() + 1}/${dateItem.getFullYear()}`}</h6>
                                <p className="card-text">{newsItem.description}</p>
                                <a href="/#" className="btn btn-primary">Go to detail</a>
                            </div>
                        </div>
                    )
                }).slice((currentPage - 1) * 4, ((currentPage - 1) * 4) + 4 ) 
            }
        </div>
    )
}



export default NewsList