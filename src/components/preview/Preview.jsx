export default function Preview({ data }) {
    return <>
        <h1>{data.personalInfo.firstName}{data.personalInfo.lastName}</h1>
        <p>{data.personalInfo.email}</p>
        <h2>Education</h2>

        {Object.entries(data.education).map(([id, value]) => (
            <div key={id}>
                <h3>{value.schoolName}</h3>
                <p>{value.degree}</p>
            </div>
        ))}
    </>
}