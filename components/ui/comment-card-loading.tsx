import Skeleton from "./skeleton";

export default function CommentCardLoading({
  className,
}: {
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="py-4 flex gap-2 border-y border-t-0 border-zinc-800">
        <div>
          <Skeleton className="w-[40px] h-[40px] rounded-full" />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <div className="flex gap-1 xs:flex-col lg:flex-row lg:items-center">
            <Skeleton className="w-32 h-3" />
            <div className="flex gap-1 items-center">
              <Skeleton className="w-20 h-3" />
              <Skeleton className="w-1 h-1 rounded-full" />
              <Skeleton className="w-20 h-3" />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Skeleton className="w-3/6 h-3" />
            <Skeleton className="w-3/6 h-3" />
          </div>
        </div>
      </div>
    </div>
  );
}
