import {get, set, remove, getOfflinePrograms, setOfflinePrograms, isProgramDownloaded} from '../utils/database' ; 

const PROGRAMS_JSON_URL = 'https://raw.githubusercontent.com/eighth-mile/syllabus-repo/main/programs.json' ; 
const SUBJECTS_URL = 'https://raw.githubusercontent.com/eighth-mile/syllabus-repo/main/'

export async function getProgramsFromRepo(){
    const result = await fetch(PROGRAMS_JSON_URL) ; 
    const programsJSON = await result.json() ; 
    // Add the isDownloaded variable here
    for (const [i, program] of programsJSON.entries())
    {
        const isDownloaded = await isProgramDownloaded(program.title) ; 
        programsJSON[i].isDownloaded = isDownloaded ; 
    }
    const temp = [] ; 
    console.log(programsJSON) ; 
    await set('programs', programsJSON) ;
    return programsJSON ; 
}

export async function downloadFileFromRepo(path)
{
    const fullUrl = `${SUBJECTS_URL}${path}` ; 
    const result = await fetch(fullUrl) ; 
    const content = await result.text() ; 
    return content ; 
}

export async function downloadProgramFromRepo(i){
    const programs = await get('programs') ;
    const program = programs[i] ;
    const subjects = program.subjects ; 
    const paths = subjects.map(subject => subject.path) ; 
    const downloadCalls = paths.map(path => downloadFileFromRepo(path)) ; 
    const allSubjectContents = await Promise.all(downloadCalls) ; 
    console.log("allSubjectContents.length() => ", allSubjectContents.length) ; 
    for(let i = 0; i < allSubjectContents.length; i++)
    {
        const content = allSubjectContents[i] ;
        const title = subjects[i].title ; 
        const code = subjects[i].code ; 
        const path = subjects[i].path ; 
        const value = {
            content,
            title,
            code,
            path
        }; 
        await set(path, value) ; 
    }

    //offline-programs 
    const offlinePrograms = await getOfflinePrograms() ; 
    offlinePrograms[program.title] = program ; 
    await setOfflinePrograms(offlinePrograms) ; 
}