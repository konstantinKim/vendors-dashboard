import React, { PropTypes, Component } from 'react'
import ActiveProjects from '../components/ActiveProjects'
import CompletedProjects from '../components/CompletedProjects'
import AddTicketForm from '../components/AddTicketForm'
import AddTicketSrForm from '../components/AddTicketSrForm'
import EditTicketForm from '../components/EditTicketForm'
import EditTicketSrForm from '../components/EditTicketSrForm'


export default class Projects extends Component {
    onTabBtnClick(e) {                                    
        e.preventDefault()                        
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
        const { imgHost, activeTab, projectsActions, activeProjectsActions, projectsPage, getCompletedProjects } = this.props        
        const { completed } = this.props                        

        if(activeTab == 'activeList'){
            return(<ActiveProjects activeProjectsActions={activeProjectsActions} projects={projects} imgHost={imgHost} addTicketFormActions={this.props.addTicketFormActions} editTicketFormActions={this.props.editTicketFormActions} projectsActions={projectsActions} projectsPage={projectsPage} editTicketSrFormActions={this.props.editTicketSrFormActions} />);                    
        }
        if(activeTab == 'completedList'){
            return(<CompletedProjects completed={completed} imgHost={imgHost} getCompletedProjects={getCompletedProjects} />);                    
        }        
    }

    componentWillMount(){                                
        this.props.projectsActions.getCompletedCount()
        this.props.projectsActions.getMaterials()        
        this.props.projectsActions.getSalvageMaterials()        
    }

    render() {                                      
        const { projects, disableAddTicketForm, isDisableEditTicketForm, isDisableEditTicketSrForm, addTicketError, editTicketError, editTicketSrError } = this.props.projects                        
        const { imgHost, projectsPage, activeProjectsActions, addTicketForm, addTicketFormActions, projectsActions, editTicketForm, editTicketFormActions, addTicketSrForm, addTicketSrFormActions, editTicketSrForm, editTicketSrFormActions } = this.props                
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
                        <div className="column-19">Project #</div>
                        <div className="column-50 no-border">Tickets</div>
                    </div>
                </div>                                                                
                {
                    this.renderTab()                    
                }                                                
            </div>            
            <AddTicketForm imgHost={imgHost} projectsPage={projectsPage} activeProjectsActions={activeProjectsActions} addTicketFormActions={addTicketFormActions} addTicketForm={addTicketForm} projectsActions={projectsActions} disableAddTicketForm={disableAddTicketForm} addTicketError={addTicketError}  />
            <AddTicketSrForm imgHost={imgHost} projectsPage={projectsPage} addTicketForm={addTicketForm} activeProjectsActions={activeProjectsActions} disableAddTicketForm={disableAddTicketForm} addTicketSrForm={addTicketSrForm} addTicketSrFormActions={addTicketSrFormActions} addTicketError={addTicketError} />
            <EditTicketForm imgHost={imgHost} projectsPage={projectsPage} activeProjectsActions={activeProjectsActions} editTicketForm={editTicketForm} editTicketFormActions={editTicketFormActions} projectsActions={projectsActions} isDisableEditTicketForm={isDisableEditTicketForm} editTicketError={editTicketError} />            
            <EditTicketSrForm imgHost={imgHost} projectsPage={projectsPage} activeProjectsActions={activeProjectsActions} editTicketSrForm={editTicketSrForm} editTicketSrFormActions={editTicketSrFormActions} isDisableEditTicketSrForm={isDisableEditTicketSrForm} editTicketSrError={editTicketSrError} />            
        </div>
    }
}

Projects.propTypes = {
    activeTab: PropTypes.string.isRequired
}