export default function Stat({ label, value }: { label: string; value: string }) {
return (
<div className="card p-6 text-center">
<div className="text-3xl font-bold text-brand">{value}</div>
<div className="mt-1 text-neutral-600">{label}</div>
</div>
)
}