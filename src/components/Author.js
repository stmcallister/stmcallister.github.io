import React from "react";
import profilePic from "../assets/images/scott-mcallister-kcdc-2021-circle.png";

export default function Author() {
  return (
    <section id="author" className="author-section">
      <div className="container">
        <div className="author-content">
          <div className="author-photo">
            <img className="profile-pic" src={profilePic} alt="Scott T. McAllister" />
          </div>
          <div className="author-text">
            <h2>Scott T. McAllister</h2>
            <p>
              Scott T. McAllister spent more than a decade building software
              across a variety of industries before moving into Developer
              Relations. For nearly the past decade, he has worked as a
              Developer Advocate at multiple companies, helping developers
              understand complex technologies such as APIs,
              infrastructure-as-code, network ingress, and Kubernetes. When
              he's not helping developers solve tough technical challenges, he
              enjoys spending time with his family, exploring new technologies,
              and contributing to open source projects.
            </p>

            <h3>Developer Relations Activity Patterns</h3>
            <p>
              <em>Developer Relations Activity Patterns</em> (Apress/Springer,
              2026) explores the recurring activities, workflows, and engagement
              models used by successful Developer Relations teams — covering
              advocacy, content creation, community engagement, and internal
              alignment.
            </p>
            <p>
              <a
                href="https://link.springer.com/book/10.1007/979-8-8688-1895-0"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Springer &rarr;
              </a>
            </p>

            <div className="author-links">
              <a href="mailto:stmcallister+author@gmail.com">Email</a>{" "}
              <a
                href="https://www.linkedin.com/in/stmcallister/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>{" "}
              <a
                href="https://github.com/stmcallister"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}