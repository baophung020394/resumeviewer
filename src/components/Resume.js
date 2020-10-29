import React from 'react'

function Resume({ data }) {
    if (data.resume) {
        var educations = data.resume.education.map(function (education, index) {
            return (
                <div className="row item" key={index}>
                    <div className="twelve columns">
                        <h3>{education.school}</h3>
                        <p className="info">{education.degree} <span>&bull;</span> <em className="date">{education.graduated}</em></p>
                        <p>
                            {education.description}
                        </p>

                    </div>
                </div>
            )
        });

        var works = data.resume.work.map(function (work, index) {
            return (
                <div className="row item" key={index}>
                    <div className="twelve columns">
                        <h3>{work.company}</h3>
                        <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
                        <p>
                            {work.description}
                        </p>
                    </div>
                </div>
            )
        });

        var skills = data.resume.skills.map(function(skill, index) {
            return (
                <li key={index}><span className={skill.className}></span><em>{skill.name}</em></li>
            )
        })
    }
    return (
        <section id="resume">
            <div className="row education">
                <div className="three columns header-col">
                    <h1><span>Education</span></h1>
                </div>
                <div className="nine columns main-col">

                    {
                        educations
                    }
                </div>
            </div>
            <div className="row work">
                <div className="three columns header-col">
                    <h1><span>Work</span></h1>
                </div>
                <div className="nine columns main-col">
                    {
                        works
                    }
                </div>
            </div>
            <div className="row skill">

                <div className="three columns header-col">
                    <h1><span>Skills</span></h1>
                </div>

                <div className="nine columns main-col">

                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                    voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                    voluptatem sequi nesciunt.
                  </p>

                    <div className="bars">

                        <ul className="skills">
                           {
                               skills
                           }
                        </ul>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Resume
