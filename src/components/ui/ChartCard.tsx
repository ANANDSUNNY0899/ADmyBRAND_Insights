// components/ChartCard.tsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function ChartCard({ data }: { data: any[] }) {
  return (
    <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="users" stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
