import Video from "next-video";
import tryit from '../../../videos/tryit.mp4';


export default function Ad() {

    return <Video src={tryit} />
}