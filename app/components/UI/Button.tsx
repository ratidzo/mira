
interface ButtonProps {
    text: string;
}


export default function Button({ text }: ButtonProps) {
    return (
        <button className="px-10 py-2 bg-black">
            { text }
        </button>
    )
}