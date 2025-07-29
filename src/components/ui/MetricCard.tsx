// components/ui/MetricCard.tsx
import { Card, CardContent } from "@/components/ui/card";

export default function MetricCard({ title, value }: { title: string; value: string }) {
  return (
    <Card className="hover:shadow-md transition-all duration-200 dark:bg-zinc-900">
      <CardContent className="p-5 space-y-1">
        <p className="text-sm text-muted-foreground capitalize">{title}</p>
        <h2 className="text-2xl font-semibold">{value}</h2>
      </CardContent>
    </Card>
  );
}
