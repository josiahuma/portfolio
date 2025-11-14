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
    id: 'fresh',
    employer: "Fresh Fountain Charity, UK",
    role: 'Volunteer Web Developer & Digital Advisor',
    dates: 'Jan 2023 – Present',
    bullets: [
      'Developed and integrated an open-source CRM system to digitise member management and communication.',
      'Delivered digital literacy and media training sessions for staff and volunteers.',
      'Strengthened the organisation’s global visibility with 8,000+ web views across 10+ countries.',
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
    dates: 'Mar 2016 – Mar 2022',
    bullets: [
      'Founded and led a registered digital media and print technology company delivering on-demand, high-quality printing and digital branding services to businesses, individuals, and government agencies.',
      'Oversaw end-to-end operations: digital design, online order automation, and large-scale production.',
      'Pioneered early adoption of digital workflow automation for print orders, reducing turnaround time by 60%.',
      'Managed a team of designers and print technicians, scaling the company’s reach to clients nationwide.',
      'Featured by a leading African technology publication for contributions to SME digital innovation.',
    ],
    links: [
      { label: 'Company website', url: 'https://viganlimited.com' },
      {
        label: 'Featured Article',
        url: 'https://techpoint.africa/general/abia-ariaria-market-aba-tech-scene/',
      },
      { label: 'YouTube feature', url: 'https://www.youtube.com/watch?v=N3pKrrEMP-A' },
      { label: 'Instagram', url: 'https://www.instagram.com/viganpress' },
      { label: 'Facebook', url: 'https://www.facebook.com/viganlimited/' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/company/viganlimited/' },
    ],
  },
  {
    id: 'kozi',
    employer: 'KoziApp (Nigeria)',
    role: 'Founder / Product Lead / CEO',
    dates: 'Jan 2015 – Aug 2015 (terminated due to an accident)',
    bullets: [
      'Conceptualised, designed, and led the development of KoziApp — a personality-based job matching and career discovery platform across web, Android, and BlackBerry devices.',
      'Built and implemented the psychometric matching algorithm to align job seekers with roles that matched their personality profiles and behavioural strengths.',
      'Added over 1,000 companies and gained national recognition through a feature in Techpoint Africa for pioneering data-driven recruitment innovation in Nigeria.',
    ],
    links: [
      { label: 'Downloadable APK File', url: 'https://apkpure.com/kozi/com.kozi.android'},
      {
        label: 'Featured Article',
        url: 'https://techpoint.africa/feature/how-koziapp-is-filling-the-gap-nigerian-job-listing-sites-have-created/',
      },
      { label: 'YouTube Video', url: 'https://www.youtube.com/watch?v=n5Wa11BbVLM'},
      { label: 'Instagram', url: 'https://www.instagram.com/koziapp/?hl=en-gb' },
      { label: 'Twitter', url: 'https://x.com/koziapp' },
    ],
  },
  {
    id: 'oveem',
    employer: 'Oveem (Nigeria)',
    role: 'Founder / Product Lead / CEO',
    dates: 'Oct 2013 – Jan 2015',
    bullets: [
      'Founded and developed one of Nigeria’s first online fresh fruit and vegetable ordering platforms, connecting farmers directly to consumers via a digital marketplace.',
      'Designed, coded, and deployed the web platform, managing product listings, logistics, and customer experience end-to-end.',
      'Partnered with restaurants, businesses, and households; expanded delivery operations by acquiring logistics vehicles and growing the customer base regionally.',
    ],
    links: [
      {
        label: 'Featured Article',
        url: 'https://techcabal.com/2014/04/16/oveem-wants-shop-fruits-vegetables-home/',
      },
      { label: 'Instagram', url: 'https://www.instagram.com/oveemng/?hl=en-gb' },
      { label: 'Facebook', url: 'https://www.facebook.com/oveemng/' },
      { label: 'Twitter', url: 'https://x.com/OveemNG' },
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
      'Coca-Cola Enterprises, London UK (Work placement awarded as a runner up in IBM Entrepreneurship Competition)',
    role: 'Business IT Analyst',
    dates: 'Jun 2012 – Sep 2012',
    bullets: [
      'Evaluated and improved stock management web systems during the 2012 Olympics.',
      'Ensured risk and impact documentation for technology changes across event operations.',
      'Developed a stock failure identification desktop application using Java, reducing time spent by ~80%.',
    ],
  },
]
