const SearchModal = ({ isSearchOpen, isSearchCloseModal }) => {

  return (
    <div>
      <div className={`modal-backdrop fade ${isSearchOpen ? 'show' : ''}`} style={{ display: isSearchOpen ? 'block' : 'none' }} onClick={isSearchCloseModal}></div>
      <div className={`modal fade ${isSearchOpen ? 'show' : ''}`} tabIndex="-1" style={{ display: isSearchOpen ? 'block' : 'none' }}>
        <div className="modal-dialog modal-fullscreen modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Search</h5>
              <button type="button" className="btn-close" onClick={isSearchCloseModal} aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Search input field */}
              <input type="text" className="form-control" placeholder="Enter your search" />
            </div>
            {/* Additional content or search results can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
