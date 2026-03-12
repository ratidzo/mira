
interface ButtonProps {
    text: string;
}


export default function Button({ text }: ButtonProps) {
    return (
        <button className="px-10 py-4 bg-black text-white font-app text-sm">
            { text }
        </button>
    )
}