function Pagination({ news, currentPage, handleChangePage }) {
    return (
        <nav aria-label="..." className="mt-3 d-flex justify-content-end">
            <ul class="pagination pagination-sm">
                {
                    (() => {
                        const numbers = [];
                        for (let i = 0; i < Math.floor(news.length / 4); i++) {
                            numbers.push(
                                <li className={currentPage === i + 1 ? "page-item active" : "page-item"} onClick={() => handleChangePage(i + 1)}>
                                <span className="page-link">
                                    {i + 1}
                                </span>
                            </li>
                            )
                        }
                        return numbers
                    })()
                }
            </ul>
        </nav>
    )
}

export default Pagination