function Toolbar({ filters, selected, onSelectFilter })
{

return (
    <nav className="toolbar">
        <ul className="toolbar-list">
            {
                filters.map((filter, index) => {
                    return (
                        <li className="toolbar-list-item" key={index}>
                            <button
                                className={
                                    filter === selected ? "toolbar-btn active" : "toolbar-btn"
                                }
                                onClick={() => onSelectFilter(filter)}
                            >
                                {filter}
                            </button>
                        </li>
                    );
                })
            }
        </ul>
    </nav>
)

}

export default Toolbar;
