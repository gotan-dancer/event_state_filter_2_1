import React from 'react';
import Toolbar from '../Toolbar/Toolbar';
import ProjectList from '../ProjectList/ProjectList';

class Portfolio extends React.Component {

    function handlerList(){
        return state.selected === "All"
          ? props.list
          : props.list.filter((item) => item.category === state.selected);
    }

    render() {
        
        return (
            <div>
                <Toolbar
                    filters={filters}
                    selected={state.selected}
                    onSelectFilter={(filter) => {
                        handlerClick(filter);
                    }
                }
            />
            <ProjectList projects={handlerList()} />
          </div>
        );
    }

}

export default Portfolio;