// /data/education.ts
export type Education = {
  id: string
  course: string
  college: string
  dates: string
  details: string[]
}

export const EDUCATION: Education[] = [
  {
    id: 'kent',
    course: "MSc Information Technology",
    college: "University of Kent, Canterbury, United Kingdom",
    dates: "2011 – 2012",
    details: [
      "Graduated with Merit, focusing on advanced computing, systems design, and innovation management.",
      "Awarded job placement with Coca-Cola as a runner up in the National IBM’s Entrepreneurship Challenge.",
       "Was appointed Projected Manager for the student run IT Consultancy (Kent IT Clinic - KITC), delivering IT solutions to local businesses.",
      "Collaborated on multiple group projects emphasising digital transformation and AI readiness.",
    ],
  },
  {
    id: 'qmul',
    course: "BSc Computer Science with Business Management",
    college: "Queen Mary University of London, United Kingdom",
    dates: "2008 – 2011",
    details: [
      "Awarded a first class in final-year project: 'Designed an Android Mobile Application, gamified English learning for non-native speakers'.",
      "Was a member of SIFE (Students in Free Enterprise), contributing to community development projects using technology solutions.",
      "Completed modules in software engineering, database systems, and business strategy.",
    ],
  },
]
