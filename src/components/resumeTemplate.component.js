import React from "react";

const ResumeTemplate = ({ data }) => {
  return (
    <div className="container">
      <section>
        <h1>{data.basics.name}</h1>
        <p>
          {data.basics.phone} | {data.basics.email} |{" "}
          {data.basics.location.address}
          {data.basics.location.city}
          {data.basics.location.postalCode}
        </p>
  <p>{data.basics.profiles.map((profile,i)=>(
      <span key={i}>{profile.network} : <a href={profile.url}>{profile.username} | </a></span>
  ))}</p>
      </section>
      <section>
        <h1>SUMMARY</h1>
        <p>{data.basics.summary}</p>
      </section>
      <section>
        <h1>SKILLS</h1>
        <ul>
          {data.skills.map((data, i) => (
            <li key={i}>{data.name}</li>
          ))}
        </ul>
      </section>
      <section>
        <h1>EDUCATION</h1>
        {data.education.map((data, i) => (
          <div key={i}>
            <p>
              {data.institution} | {data.startDate}-{data.endDate}
            </p>
            <p>
              {data.studyType} of {data.area}
            </p>
            <p>
              Relative Course:{" "}
              {data.courses.map((course, i) => (
                <span key={i}>{course};</span>
              ))}
            </p>
            <p>GPA: {data.gpa}</p>
          </div>
        ))}
      </section>
      <section>
        <h1>Work experience</h1>
        {data.work.map((work, i) => (
          <div key={i}>
            <p>
              {work.name},{work.location}
            </p>
            <p>
              {work.position} | {work.startDate}-{work.endDate}
            </p>
            <ul>
              {work.highlights.map((hl, i) => (
                <li key={i}>{hl}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h1>projects</h1>
        {data.projects.map((project, i) => (
          <div key={i}>
            <p>
              {project.name} {project.type}| {project.startDate}-
              {project.endDate}
            </p>
            <p>
              roles:{" "}
              {project.roles.map((role, i) => (
                <span key={i}>{role} </span>
              ))}
            </p>
            <p>{project.description}</p>
            <ul>
              {project.highlights.map((hl, i) => (
                <li key={i}>{hl}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h1>Awards</h1>
        {data.awards.map((award, i) => (
          <div key={i}>
            <p>title: {award.title}</p>
            <p>date:{award.date}</p>
            <p>awarder:{award.awarder}</p>
          </div>
        ))}
      </section>
      <section>
        <h1>publications</h1>
        {data.publications.map((pb, i) => (
          <div key={i}>
            <p>name:{pb.name}</p>
            <p>date:{pb.releaseDate}</p>
            <p>publisher:{pb.publisher}</p>
            <p>summary:{pb.summary}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ResumeTemplate;
