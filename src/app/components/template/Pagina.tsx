import Menu from "./Menu";

export interface PaginaProps {
    className?: string;
    children: React.ReactNode;
}

export default function Pagina({ className, children }: PaginaProps) {
    return (
        <div className="flex">
            <Menu />
            <main className={`flex-1 p-7 ${className ?? ''}`}>{children}</main>
        </div>
    );
}