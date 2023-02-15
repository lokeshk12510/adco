interface CompleteProps {
    success: number
    warning: number
    error: number
}

export interface TableDataProps{
    project: number,
    projectName: string,
    state: string,
    contractType: string,
    category: string,
    projectManager: string,
    constructionManager: string,
    complete: CompleteProps
}


export function createData(
    project: number,
    projectName: string,
    state: string,
    contractType: string,
    category: string,
    projectManager: string,
    constructionManager: string,
    complete: CompleteProps
) {
    return {
        project,
        projectName,
        state,
        contractType,
        category,
        projectManager,
        constructionManager,
        complete,
    }
}


export const rows = [
    createData(
        3460,
        'Setup new project 1',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
    createData(
        3461,
        'Setup new project 2',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
    createData(
        3462,
        'Setup new project 3',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
    createData(
        3463,
        'Setup new project 4',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
    createData(
        3464,
        'Setup new project 4',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
    createData(
        3465,
        'Setup new project 4',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
    createData(
        3466,
        'Setup new project 4',
        'NSW',
        'Design & Construct',
        'Stable',
        'Ben Matarranz ',
        'Michael Kouknas',
        {
            success: 46,
            warning: 34,
            error: 20,
        }
    ),
]
