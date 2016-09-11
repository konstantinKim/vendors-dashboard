import React, { PropTypes, Component } from 'react'
import ActiveProjects from '../components/ActiveProjects'
import CompletedProjects from '../components/CompletedProjects'
import AddTicketForm from '../components/AddTicketForm'
import EditTicketForm from '../components/EditTicketForm'


export default class Projects extends Component {
    onTabBtnClick(e) {                                    
        e.preventDefault()        
        
        if(e.currentTarget.id == 'completedList'){
             this.props.getCompletedProjects()
        }
        if(e.currentTarget.id == 'activeList'){
            this.props.getActiveProjects()
        }
    
        return this.props.switchTab(e.currentTarget.id)
    }    

    highlightTab(tabId){
        if(this.props.activeTab == tabId){
            return('tabs-projects-selected border');        
        }
        return('tabs-projects border');                
    }

    renderTab(){
        const { projects } = this.props.projects        
        const { imgHost, activeTab, projectsActions } = this.props        
        const { completed } = this.props                        

        if(activeTab == 'activeList'){
            return(<ActiveProjects projects={projects} imgHost={imgHost} addTicketFormActions={this.props.addTicketFormActions} editTicketFormActions={this.props.editTicketFormActions} projectsActions={projectsActions} />);                    
        }
        if(activeTab == 'completedList'){
            return(<CompletedProjects completed={completed} imgHost={imgHost} />);                    
        }        
    }

    syncData(){                
        if(this.props.projects.sync == 'False'){
            this.props.getActiveProjects()
            this.props.projectsActions.getCompletedCount()
            this.props.projectsActions.getMaterials()
        }        
    }

    render() {                                      
        const { projects, disableAddTicketForm } = this.props.projects                        
        const { imgHost, projectsPage, activeProjectsActions, addTicketForm, addTicketFormActions, projectsActions, editTicketForm, editTicketFormActions } = this.props                
        return <div className='componentActiveProjects'>
            <div className="container-gh" id="global-main-top-bar">
                <div className="row">
                    <div className="col-ghgrid-3">
                        <div style={{float: 'left'}}>
                            <img style={{margin: 0, padding: '11px 0px 0px 12px'}}
                                 src={imgHost + "/_images/icons/content/header-list.png"}/>

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
                        <a id='activeList' onClick={::this.onTabBtnClick} href="haulsub-projects-active.html" className="link-regular">
                            <span className={this.highlightTab('activeList')}><img
                                style={{padding: '0px 8px 0px 0px', position: 'relative', top: '-2px'}}
                                src={imgHost + "/_images/icons/nav/tab-statistics.png"}/>Active Projects (<span
                                className="blue-text">{projects.length}</span>)</span>
                        </a>
                    </div>
                    <div className="col-gh-5">
                        <a id='completedList' onClick={::this.onTabBtnClick} href="haulsub-projects-completed.html" className="link-regular">
                            <span className={this.highlightTab('completedList')}><img
                                style={{padding: '0px 8px 0px 0px', position: 'relative', top: '-2px'}}
                                src={imgHost + "/_images/icons/nav/tab-check.png"}/>Completed (<span
                                className="blue-text">{projectsPage.completedCount}</span>)</span>
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
                {
                    this.renderTab()                    
                }                                                
            </div>
            {this.syncData()}                                    
            <AddTicketForm imgHost={imgHost} projectsPage={projectsPage} activeProjectsActions={activeProjectsActions} addTicketFormActions={addTicketFormActions} addTicketForm={addTicketForm} projectsActions={projectsActions} disableAddTicketForm={disableAddTicketForm}  />
            <EditTicketForm imgHost={imgHost} projectsPage={projectsPage} editTicketForm={editTicketForm} editTicketFormActions={editTicketFormActions} projectsActions={projectsActions}  />
        </div>
    }
}

Projects.propTypes = {
    activeTab: PropTypes.string.isRequired
}