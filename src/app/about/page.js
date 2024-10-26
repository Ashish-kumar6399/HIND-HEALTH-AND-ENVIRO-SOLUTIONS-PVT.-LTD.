import React from 'react'
import AboutUs from '../../components/AboutUs';
import Certified from '../../components/Certified';
// import Committed from '../Components/Committed'
import Director from '../../components/Director'
import VisionMission from '@/components/VisionMission';

const About=()=> {
    return (
        <div>
            < AboutUs />
            {/* < Certified /> */}
            <VisionMission/>
        </div>
    )
}
export default About;