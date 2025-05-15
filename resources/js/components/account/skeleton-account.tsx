import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonAccount() {
    return (
        <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                <Skeleton className="h-50 w-full rounded-lg" />
                <Skeleton className="h-50 w-full rounded-lg" />
                <Skeleton className="h-50 w-full rounded-lg" />
            </div>
            <Skeleton className="h-50 w-full rounded-lg" />
        </div>
    );
}
