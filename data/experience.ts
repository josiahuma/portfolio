// /data/experience.ts
export type Experience = {
  id: string
  employer: string
  role: string
  dates: string
  bullets: string[]
  links?: { label: string; url: string }[]
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'hmpps',
    employer: "His Majesty’s Prison & Probation Service (MoJ, UK)",
    role: 'ICT Manager / Regional ICT Training Specialist',
    dates: 'Dec 2021 – Present',
    bullets: [
      'Lead the AI digital modernization strategy across the East of England region, supporting over 2,000 staff.',
      'Designed and implemented a regional intranet platform adopted as the official knowledge and collaboration hub used by over 2,000 staff.',
      'Spearheaded data-led decision frameworks using Power BI dashboards and Power Apps.',
      'Provide ICT leadership and staff capability training aligned with MoJ security standards.',
    ],
  },
  {
    id: 'littlefish',
    employer: 'Littlefish Ltd, Nottingham UK',
    role: 'Service Desk Engineer',
    dates: 'Jun 2021 – Dec 2021',
    bullets: [
      'Delivered advanced support for public sector clients, managing O365, Exchange, AD, and GSuite environments.',
      'Monitored multi-site server health using Cisco Prime, Veeam, and WhatsUp Gold.',
      'Mentored new engineers, improving service desk onboarding and escalation processes.',
    ],
  },
  {
    id: 'xma',
    employer: 'XMA, Nottingham UK',
    role: 'IT Analyst',
    dates: 'Dec 2020 – Jun 2021',
    bullets: [
      'Handled first-line queries and escalated IT support for enterprise clients.',
      'Automated key support workflows and maintained client backup and recovery systems.',
    ],
  },
  {
    id: 'vigan',
    employer: 'Vigan Limited (UK & Nigeria)',
    role: 'Founder / Product Lead / CEO',
    dates: 'Mar 2014 – Mar 2022',
    bullets: [
      'Founded and led a registered digital media and print technology company delivering on-demand, high-quality printing and digital branding services to businesses, individuals, and government agencies.',
      'Oversaw end-to-end operations: digital design, online order automation, and large-scale production.',
      'Pioneered early adoption of digital workflow automation for print orders, reducing turnaround time by 60%.',
      'Managed a team of designers and print technicians, scaling the company’s reach to clients nationwide.',
      'Featured by a leading African technology publication for contributions to SME digital innovation.',
      'Registered and operated the company in both the UK and Nigeria, establishing cross-border B2B partnerships.',
    ],
    links: [
      {
        label: 'Techpoint Africa article',
        url: 'https://techpoint.africa/general/abia-ariaria-market-aba-tech-scene/',
      },
      {
        label: 'YouTube feature',
        url: 'https://www.youtube.com/watch?v=N3pKrrEMP-A',
      },
      { label: 'Instagram', url: 'https://www.instagram.com/viganpress' },
      { label: 'Facebook', url: 'https://www.facebook.com/viganlimited/' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/company/viganlimited/' },
    ],
  },
  {
    id: 'lagosstate',
    employer: 'Lagos State Government, Nigeria (Compulsory National Service)',
    role: 'IT Helpdesk Analyst',
    dates: 'Mar 2013 – Feb 2014',
    bullets: [
      'Supported digital transformation using Excel, Access, and Google tools.',
      'Created productivity dashboards for departmental performance insights.',
    ],
  },
  {
    id: 'coke',
    employer:
      'Coca-Cola Enterprises, London UK (Job placement awarded as a runner up in IBM Entrepreneurship Competition)',
    role: 'Business IT Analyst',
    dates: 'Jun 2012 – Sep 2012',
    bullets: [
      'Evaluated and improved stock management web systems during the 2012 Olympics.',
      'Ensured risk and impact documentation for technology changes across event operations.',
      'Developed a stock failure identification desktop application using Java, reducing time spent by ~80%.',
    ],
  },
]
