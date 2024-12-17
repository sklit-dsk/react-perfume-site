import Card from '../components/Card';;

function Home({
    items,
    searchValue,
    setSearchValue,
    handleSort,
    onAddToFavorites,
    onAddToCart,
    isReady,
}) {
    
    
    const renderItems = () => {
        const filteredItems = items.filter((item) =>
            item.title.toLowerCase().includes(searchValue.toLowerCase()),
        );
        return (isReady ? [...Array(12)] : filteredItems).map((item, index) => (
            <Card
                key={index}
                onFavorite={(obj) => onAddToFavorites(obj)}
                onPlus={(obj) => onAddToCart(obj)}
                loading={isReady}
                {...item}
            />
        ));
    };

    
    return (
        <div className="content p-40">
            <div className="d-flex align-center mb-40 justify-between">
                <h1>{searchValue ? `Search by "${searchValue}"` : 'All perfume'}</h1>
                <div className="search-block d-flex">
                    <img src="img/search.svg" alt="Search" />
                    {searchValue && (
                        <img
                            onClick={() => setSearchValue('')}
                            className="clear cu-p"
                            src="img/btn-remove.svg"
                            alt="Clear"
                        />
                    )}
                    <input onChange={handleSort} value={searchValue} placeholder="Search..." />
                </div>
            </div>
            <div className="d-flex flex-wrap">{renderItems()}</div>
        </div>
    );
}

export default Home;
