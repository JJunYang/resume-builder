import React from "react";
import "../styles/resumeTemplate.css";

const ResumeTemplate = ({ data }) => {
  return (
    <div className="container mt-2" id="template">
      <section id="basics">
        <h1>{data.basics.name}</h1>
        <p className="row justify-content-center">
          {data.basics.location.address}, {data.basics.location.city},{" "}
          {data.basics.location.postalCode} |{data.basics.phone} |{" "}
          {data.basics.email}
        </p>
        <p className="profiles">
          {data.basics.profiles.map((profile, i) => (
            <span key={i}>
              {profile.network} : <a href={profile.url}>{profile.username}</a>
            </span>
          ))}
        </p>
      </section>
      <section>
        <h2>SUMMARY</h2>
        <hr></hr>
        <p>{data.basics.summary}</p>
      </section>
      <section id="skills">
        <h2>SKILLS</h2>
        <hr></hr>
        <ul className="row">
          {data.skills.map((skill, i) => (
            <li key={i} className="col-4">
              {skill.name}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>EDUCATION</h2>
        <hr></hr>
        {data.education.map((data, i) => (
          <div key={i}>
            <p className="experienceTitle">
              {data.institution}
              <span className="date">
                {data.startDate} to {data.endDate}
              </span>
            </p>
            <p className="italic">
              {data.studyType} of {data.area} (GPA: {data.gpa})
            </p>
            <p className="courses">
              Relative Course:{" "}
              {data.courses.map((course, i) => (
                <span key={i}>{course};</span>
              ))}
            </p>
          </div>
        ))}
      </section>
      <section>
        <h2>Work experience</h2>
        <hr></hr>
        {data.work.map((work, i) => (
          <div key={i}>
            <p className="experienceTitle">
              {work.name},{work.location}
              <span className="date">
                {work.startDate}-{work.endDate}
              </span>
            </p>
            <p className="italic">{work.position}</p>
            <ul>
              {work.highlights.map((hl, i) => (
                <li key={i}>{hl}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <section>
        <h2>projects</h2>
        <hr></hr>
        {data.projects.map((project, i) => (
          <div key={i}>
            <p className="experienceTitle">
              {project.name} {project.type}{" "}
              <span className="date">
                {project.startDate} to {project.endDate}
              </span>
            </p>
            <p className="italic">
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
        <div className="row">
          <div className="col-6">
            <h2>Awards</h2>
            <hr></hr>
            <ul className="details">
              {data.awards.map((award, i) => (
                <li key={i}>
                  <p className="experienceTitle">Title: {award.title}</p>
                  <p>Date:{award.date}</p>
                  <p>Awarder:{award.awarder}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-6">
            <h2>publications</h2>
            <hr></hr>
            <ul className="details">
              {data.publications.map((pb, i) => (
                <li key={i}>
                  <p className="experienceTitle">Name:{pb.name}</p>
                  <p>Date:{pb.releaseDate}</p>
                  <p>Publisher:{pb.publisher}</p>
                  <p>Summary:{pb.summary}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResumeTemplate;
