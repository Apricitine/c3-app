

interface Scholarship {
    name: string
    money: number
    organization?: string
    financialneeds: boolean
}

const scholarships: Scholarship[] = [

    {
        name: "Coca-Cola Scholarship",
        money: 6767,
        organization: "Coca-cola",
        financialneeds: false
    }

] satisfies Scholarship[]

export default scholarships