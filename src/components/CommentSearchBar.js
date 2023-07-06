

function CommentSearchBar({searchQuery, searchFilter}) {

    return(
        <>
        <p>Search:
        <span>
        <input 
        className="searchField"
        type="text" 
        value={searchQuery} 
        onChange={(e)=>{
            searchFilter(e.target.value);
        }}
        placeholder="Search comment by name"
        />
        </span>
        </p>
        </>
    )
}

export default CommentSearchBar;