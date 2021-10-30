import imageLaunchVehicleLandscape from './assets/technology/imageLaunchVehicleLandscape.jpg'
import imageLaunchVehiclePortrait from './assets/technology/imageLaunchVehiclePortrait.jpg'

import imageSpaceportLandscape from './assets/technology/imageSpaceportLandscape.jpg'
import imageSpaceportPortrait from './assets/technology/imageSpaceportPortrait.jpg'

import imageSpaceCapsuleLandscape from './assets/technology/imageSpaceCapsuleLandscape.jpg'
import imageSpaceCapsulePortrait from './assets/technology/imageSpaceCapsulePortrait.jpg'


const TecnologyData = [
    {
        id: 1,
        title: 'Launch vehicle',
        imageLandscape: imageLaunchVehicleLandscape,
        image: imageLaunchVehiclePortrait,
        paragraph: 'A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth is surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it is quite an awe-inspiring sight on the launch pad!'
    },
    {
        id: 2,
        title: 'Spaceport',
        imageLandscape: imageSpaceportLandscape,
        image: imageSpaceportPortrait,
        paragraph: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
    },
    {
        id: 3,
        title: 'Space capsule',
        imageLandscape: imageSpaceCapsuleLandscape,
        image: imageSpaceCapsulePortrait,
        paragraph: 'A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth is atmosphere without wings. Our capsule is where you will spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.'
    },
]

export const getTechnology = (id) => {
    console.log('id ', id)
    return TecnologyData.filter(item => item.id === id ? item :null)
}