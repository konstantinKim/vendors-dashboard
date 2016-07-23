const initialState = {  
  projects: [
    {id:1, 'name':'project name', 'address':'project address', 'number':'01', 'tickets':[{'recycled':'10','reused':'5'},{'recycled':'15','reused':'20'}]},
    {id:2, 'name':'project name2', 'address':'project address2', 'number':'02', 'tickets':[{'recycled':'10','reused':'5'},{'recycled':'15','reused':'20'}]}
  ]
}

export default function activeProjects(state = initialState) {
        return state
}