
interface ButtonProps {
    text: string;
}


export default function Button({ text }: ButtonProps) {
    return (
        <button className=" hover:cursor-pointer hover:bg-gray-900 px-10 py-4 bg-black text-white font-app text-sm">
            { text }
        </button>
    )
}
