
export const getProjectIndex = function(projectId, projectsState) {
  var project_index
  for (project_index = 0; project_index < projectsState.length; project_index++){
    if (projectsState[project_index].PROJECT_ID == projectId){                          
      break
    }
  }
  return project_index
}