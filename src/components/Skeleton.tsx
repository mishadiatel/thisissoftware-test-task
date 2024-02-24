export default function Skeleton() {
    return (
        <div className={'grid grid-cols-2 gap-8 w-full max-[1030px]:grid-cols-1 '}>
            {[...new Array(20)].map((_, index) => (
                <div key={index} className={'h-40 rounded-lg w-full bg-gray-200'}> </div>
            ))}
        </div>
    )
}
