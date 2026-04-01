// Componente de título
interface TitleProps {
    title: string;
    subtitle: string;
}

export const Title = ({ title, subtitle }: TitleProps) => {
    return (
        <header className="bg-[#0f0f0f] p-4">
            <h1 className="text-3xl font-bold text-yellow-600 md:text-5xl">{title}</h1>
            <p className="text-gray-400">{subtitle}</p>
        </header>
    );
};