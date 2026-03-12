import Video from "next-video";
import tryit from '../../../videos/tryit.mp4';


export default function Ad() {

    return <Video src={tryit} style={{
        maxWidth: "1000px",
        borderRadius: "4px"
    }} 
        autoPlay 
        loop 
        muted 
        controls={false}
        className="h-full w-full rounded-sm" />
}