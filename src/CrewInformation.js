import imageVictorGlover from './assets/crew/imageVictorGlover.png'
import imageMarkShuttleworth from './assets/crew/imageMarkShuttleworth.png'
import imageDouglasHurley from './assets/crew/imageDouglasHurley.png'
import imageAnoushehAnsari from './assets/crew/imageAnoushehAnsari.png'


const CrewData = [
    {
        id: 1,
        title: 'COMMANDER',
        name: 'DOUGLAS HURLEY',
        paragraph: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        image: imageDouglasHurley
    },
    {
        id: 2,
        title: 'MISSION SPECIALIST',
        name: 'MARK SHUTTLEWORTH',
        paragraph: 'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        image: imageMarkShuttleworth
    },
    {
        id: 3,
        title: 'PILOT',
        name: 'VICTOR GLOVER',
        paragraph: 'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
        image: imageVictorGlover
    },
    {
        id: 4,
        title: 'FLIGHT ENGINEER',
        name: 'ANOUSHEH ANSARI',
        paragraph: 'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.',
        image: imageAnoushehAnsari
    }
]

export const getCrew = (id) => {
    console.log('id ', id)
    return CrewData.filter(item => item.id === id ? item : null)
}