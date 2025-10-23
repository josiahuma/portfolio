import Image from 'next/image'
import Link from 'next/link'


export default function ProjectCard({
title,
description,
stack,
image,
links,
}: {
title: string
description: string
stack: string[]
image: string
links?: { github?: string; demo?: string }
}) {
return (
<div className="card overflow-hidden">
<div className="relative h-48 w-full">
<Image src={image} alt={title} fill className="object-cover" />
</div>
<div className="p-5">
<h3 className="text-lg font-semibold">{title}</h3>
<p className="mt-2 text-neutral-600">{description}</p>
<div className="mt-3 flex flex-wrap gap-2">
{stack.map((s) => (
<span key={s} className="badge">{s}</span>
))}
</div>
{(links?.github || links?.demo) && (
<div className="mt-4 flex gap-3">
{links.github && (
<a className="btn-outline" href={links.github} target="_blank">GitHub</a>
)}
{links.demo && (
<a className="btn-primary" href={links.demo} target="_blank">Live Demo</a>
)}
</div>
)}
</div>
</div>
)
}