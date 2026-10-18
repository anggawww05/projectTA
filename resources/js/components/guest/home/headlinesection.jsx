export default function HeadlineSection({ title, highlight }) {
    return (
        <div className="flex w-full items-center gap-4">
            <h2 className="shrink-0 text-3xl font-bold text-[#262626]">
                {title}{' '}
                <span className="italic text-[#1B424C]">
                    {highlight}
                </span>
            </h2>

            <div className="h-1 flex-1 bg-[#374C30] rounded-lg"/>
        </div>
    )
}
