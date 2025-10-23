import { ReactNode } from 'react'


export default function Section({
title,
subtitle,
children,
id,
}: {
title?: string
subtitle?: string
children: ReactNode
id?: string
}) {
return (
<section id={id} className="py-14 md:py-20">
<div className="mb-8">
{title && (
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
{title}
</h2>
)}
{subtitle && <p className="lead mt-2 max-w-3xl">{subtitle}</p>}
</div>
{children}
</section>
)
}