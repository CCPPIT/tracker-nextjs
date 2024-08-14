import {IconProp}from "@fortawesome/fontawesome-svg-core"
import {
    faCableCar,
    faFaceAngry,
    faGamepad,
    faGlobe,
    faBook,
    faLaptopCode,
    faPalette,
    faComments,
    faPhoneAlt,
    faEarthAfrica,
    faPager,
    faVanShuttle,
    faQrcode,
    faCakeCandles,
    faBackwardStep,
    faPanorama,
    faSadCry,
    faSackDollar,
    faSatellite,
    faEarth,
    faWandMagicSparkles,
    faWater,
    faQuran,
    faBacterium,
    faNavicon,
    faBezierCurve,
    faMagnet,
    faKissBeam,
    faXmarkCircle,
    faTableCellsRowLock,
    faVoteYea,
    faFlask
}from "@fortawesome/free-solid-svg-icons"
type IconData={
    faIcon:IconProp,
    isSelected:boolean
}
export const IconsData:IconData[]=[
    {
        faIcon:faBackwardStep,
        isSelected:true
    },
    {
      faIcon:faFlask,
      isSelected:true

    },
    {
        faIcon:faBezierCurve,
        isSelected:false

    },
    {
        faIcon:faGlobe,
        isSelected:false,

    },
    {
        faIcon:faCableCar,
        isSelected:false,

    },
    {
        faIcon:faEarth,
        isSelected:false

    },
    {
        faIcon:faFaceAngry,
        isSelected:false
    },
    {
      faIcon:  faMagnet,
      isSelected:false,
    },{
        faIcon: faKissBeam,
        isSelected:false,


    },
    {
        faIcon:faXmarkCircle,
        isSelected:false

    },
    {
      faIcon:  faTableCellsRowLock,
      isSelected:false

    },

    {
        faIcon:faVoteYea,
        isSelected:false,

    }
    
    
]
