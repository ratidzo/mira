import tryit from '../../../videos/tryit.mp4';


export default function Ad() {

    return (
        <video className="w-[60vw]"  loop autoPlay muted>
            <source src="tryit.mp4" type="video/mp4" />
        </video>
    )
}
