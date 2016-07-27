import React, { Component } from 'react'
import ActiveProjects from '../components/ActiveProjects'
import CompletedProjects from '../components/CompletedProjects'


export default class Projects extends Component {
    render() {                                      
        const { projects } = this.props.projects        
        const { host } = this.props        
        const { completed } = this.props        
        
        return <div className='componentActiveProjects'>
            <div className="container-gh" id="global-main-top-bar">
                <div className="row">
                    <div className="col-ghgrid-3">
                        <div style={{float: 'left'}}>
                            <img style={{margin: 0, padding: '11px 0px 0px 12px'}}
                                 src={host + "/_images/icons/content/header-list.png"}/>

                            <p>My Projects List</p>
                        </div>
                        <div style={{float: 'left'}}>
                            <span className="divider">&nbsp;</span>
                        </div>
                    </div>
                    <div className="col-ghgrid-3">&nbsp;</div>
                    <div className="col-ghgrid-2"></div>
                </div>
            </div>

            <div style={{marginTop: '-2px'}} id="global-main-tabs" className="container-gh">
                <div style={{position: 'relative', top: '-2px'}} className="row">
                    <div className="col-gh-5">
                        <a href="haulsub-projects-active.html" className="link-regular">
                            <span className="tabs-projects-selected border"><img
                                style={{padding: '0px 8px 0px 0px', position: 'relative', top: '-2px'}}
                                src={host + "/_images/icons/nav/tab-statistics.png"}/>Active Projects (<span
                                className="blue-text">{projects.length}</span>)</span>
                        </a>
                    </div>
                    <div className="col-gh-5">
                        <a href="haulsub-projects-completed.html" className="link-regular">
                            <span className="tabs-projects border"><img
                                style={{padding: '0px 8px 0px 0px', position: 'relative', top: '-2px'}}
                                src={host + "/_images/icons/nav/tab-check.png"}/>Completed (<span
                                className="blue-text">{completed.length}</span>)</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-gh" id="global-main-content">
                <div id="settings-container">
                    <div className="titles">
                        <div className="column-31">Project Address</div>
                        <div className="column-19">Turner Project #</div>
                        <div className="column-50 no-border">Tickets</div>
                    </div>
                </div>                                                
                <ActiveProjects projects={projects} host={host} />                
                <CompletedProjects completed={completed} host={host} />                
            </div>
        </div>
    }
}