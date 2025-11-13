import dayjs from "dayjs"

type Topics = "science" | "math" | "humanities"

interface Internship {
  name: string
  description: string
  stipend?: number
  topics: Topics[]
}

const internships: Internship[] = [
  { 
    name: "CDS AI Implementations", 
    description: "implement AI", 
    topics: ["humanities", "science"] 
  },
  { 
    name: "kenny lee ", 
    description: "stupid", 
    topics: ["humanities", "science"] 
  }
] satisfies Internship[]

export default internships