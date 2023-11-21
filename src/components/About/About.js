import React from "react";
import "./About.css";
function Services() {
  let message = `Trivia is a captivating and intellectually stimulating mobile app that allows users to challenge themselves and their friends with a wealth of intriguing questions from various categories. Whether you're a history buff, a pop culture enthusiast, a science geek, or just looking for a fun way to pass the time, Trivia Master has something for everyone.`;
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="section-title">The Team Behind Trivia App</h2>

          <p class="section-subtitle">{message}</p>
        </div>

        <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img
                src="https://media.licdn.com/dms/image/C4E03AQF_IkC5edP6Ng/profile-displayphoto-shrink_200_200/0/1628629532805?e=1704326400&v=beta&t=ltxee4LYdxpbvPxfSBGB7ZegVFsyXVZVrEYvTapIbOU"
                class="team-img"
                alt="pic"
              />

              <h3>Axel</h3>

              <div class="team-info">
                <p>Front End Engineer</p>
              </div>

              <p>
              Axel is a senior at Texas State University, specializing in Computer Science and Applied Mathematics. 
              I value collaborative work, especially when it intersects his dual passion for math and computer science. 
              Axel thrives in team environments, where shared enthusiasm and collective effort drive progress. 
              </p>

              <ul class="team-icon">
                <li>
                  <a href="https://www.linkedin.com/in/axel-sanchez-moreno/" className="linkedin-alt" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
        </div>

        <div class="col-sm-6 col-md-4">
          <div class="team-item">
            <img
              src="https://media.licdn.com/dms/image/C4E03AQHEwm6YaXAGTw/profile-displayphoto-shrink_400_400/0/1645595604606?e=1703721600&v=beta&t=ABs3U2SrKtOlwOVwyMmGH5-3pUIjGQKg9hPSQxsXlZY"
              class="team-img"
              alt="pic"
            />

            <h3>David</h3>

            <div class="team-info">
              <p>Full Stack</p>
            </div>

            <p>
              Researched about the React Framework and design patterns that are typical in web development.
              Brainstormed ideas on how the website should look and feel. Worked with my team to create components that
              were easy to understand and loosely coupled. Helped establish a clear workflow to the team.
            </p>

            <ul class="team-icon">
              <li>
                <a href="https://www.linkedin.com/in/david-mojica-9b6090188/" className="linkedin-alt" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Chillsome/" class="github" target="_blank">
                  <i class="fa fa-github"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="team-item">
            <img
              src="https://cdn.discordapp.com/avatars/275129688345804802/a6ea196a7d4183a3e87251c6e79dc199.webp?size=100"
              class="team-img"
              alt="pic"
            />

            <h3>Mark</h3>

            <div class="team-info">
              <p>Front End Engineer</p>
            </div>

            <p>
            Mark is an exceptional Computer Science student with a flair for the immersive world of VR gaming. 
            His talent shines through in his creation of innovative Minecraft mods and his broad interest in video games.
             Mark combines his academic pursuits with practical application, exemplifying a fusion of theoretical knowledge and creative application.
            </p>

            <ul class="team-icon">
              <li>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="youtube">
                  <i class="fa fa-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <div class="team-item">
            <img
              src="https://media.licdn.com/dms/image/D5603AQGQsS1DMLLaZg/profile-displayphoto-shrink_400_400/0/1676418100724?e=1703721600&v=beta&t=346e7TgAGC1XkRE4c4jEuXn463fZ66OS5OGGAwNi2tY"
              class="team-img"
              alt="pic"
            />

            <h3>Tim</h3>

            <div class="team-info">
              <p>Cybersecurity Engineer</p>
            </div>

            <p>
              I am passionate about my areas of study in Electrical Engineering and Computer Science,
              specifically because I enjoy both hardware and software! My goals are to earn a M.S. in
              Cybersecurity and then become a Cybersecurity Engineer.

            </p>

            <ul class="team-icon">
              <li>
                <a href="https://twitter.com/TimothyMaraj" class="twitter" target="_blank">
                  <i class="fa fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="https://github.com/TimothyMaraj" class="github" target="_blank">
                  <i class="fa fa-github"></i>
                </a>
              </li>

              <li>
                <a href="https://www.linkedin.com/in/timothymaraj/" class="linkedin-alt" target="_blank">
                  <i class="fa fa-linkedin"></i>
                </a>
              </li>

              <li>
                <a href="https://www.snapchat.com/notmysnapchat" class="snapchat-alt" target="_blank">
                  <i class="fa fa-snapchat-ghost"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-sm-6 col-md-4">
            <div class="team-item">
              <img
                src="https://media.licdn.com/dms/image/D5603AQEt7dgD_6IrZw/profile-displayphoto-shrink_800_800/0/1693281685142?e=2147483647&v=beta&t=TjEwKsZZt6dquT08DyOXiq8z3GBvjTMDGQpWPb4FdUQ"
                class="team-img"
                alt="pic"
              />

              <h3>Calvin</h3>

              <div class="team-info">
                <p>Back End Engineer</p>
              </div>

              <p>
                My interest in merging mathematics with computer science has evolved into a passion for back-end development. Throughout this project, I concentrated on interfacing with various
                APIs to construct the game, collaborating closely with my team to seamlessly integrate the API calls.
              </p>

              <ul class="team-icon">
                <li>
                  <a href="https://www.linkedin.com/in/CalvinAlbin/" className="linkedin-alt" target="_blank">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/CalvinAlbin" class="github" target="_blank">
                    <i class="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
        </div>
        <div class="col-sm-6 col-md-4">
          <a class="profile" href="https://www.youtube.com/watch?v=eauZzwt8Ci8" style={{ textDecoration: "none", color: "inherit" }}>
            <div class="team-item">
              <img
                src="https://media.licdn.com/dms/image/C5603AQEdlcqYkCba7A/profile-displayphoto-shrink_200_200/0/1642523492556?e=1703721600&v=beta&t=xB4DpWNgA4UdWvrjv5ZXke-zxp6myFIytKAgWSaLZf4"
                class="team-img"
                alt="pic"
              />

              <h3>Dr. Lehr</h3>

              <div class="team-info">
                <p> Amazing Professor </p>
              </div>

              <p>
                Ted Lehr is a part-time Lecturer in Computer Science and an IT Data Architect with the City of Austin. 
                He is part of Austin’s Smart City team, advising on technology, business partnerships and the use of data for better services,
                and other private sector opportunities.
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Services;
