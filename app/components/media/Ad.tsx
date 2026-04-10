import tryit from '../../../videos/tryit.mp4';


export default function Ad() {

    return (
        <video className="w-full h-[600px] object-cover rounded-md" playsInline loop autoPlay muted>
            <source src="tryit.mp4" type="video/mp4" />
        </video>
    )
}
