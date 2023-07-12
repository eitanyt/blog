export function ChangePage({page,setPage}) {

    // return(
    //     <div>
    //        {page >=1 && <button onClick={setPage(page => page - 1)}>הקודם</button>}
    //         <span>{page}</span>
    //         <button onClick={setPage(page => page+1)}>הבא</button>
    //     </div>
    // )

    
        const handlePreviousPage = () => {
            page>=1 && setPage(page - 1);
        };
      
        const handleNextPage = () => {
          setPage(page + 1);
        };
      
        return (
          <div className='change-pages center'>
          <div className="ChangePage center">
            <button onClick={handleNextPage}className="next">&laquo; הבא</button>
            <span className="namber-page">{page + 1}</span>
            <button onClick={handlePreviousPage}className="previous">הקודם &raquo;</button>
          </div>
          </div>
        );
      
      
}