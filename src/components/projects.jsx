import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Projects = () => {
  return (
    <div id="projects" className="section">
      <div className="header">Featured Projects</div>
      <div class="accordion py-4" id="projectsAccordion">
        <div class="projectItem accordion-item">
          <div class="projectItemHeader accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="false"
              aria-controls="collapseOne"
            >
              EME MECHANICAL
            </button>
          </div>
          <div
            id="collapseOne"
            class="projectItemBody accordion-collapse collapse"
            data-bs-parent="#projectsAccordion"
          >
            A user-friendly website for a mechanical engineering company
            showcasing their history, culture, and services. They're easy to
            contact via the phone number link at the top, or the "Join Us" page.
            <a href="https://github.com/jaramilloez/EME-Mechanical">
              <FontAwesomeIcon icon={faGithub} className="projectItemGithub" />
            </a>
          </div>
        </div>
        <div class="projectItem accordion-item">
          <div class="projectItemHeader accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              KITCHEN COMPASS
            </button>
          </div>
          <div
            id="collapseTwo"
            class="projectItemBody accordion-collapse collapse"
            data-bs-parent="#projectsAccordion"
          >
            A comprehensive recipe website offering a diverse range of cuisines.
            Users can explore delicious recipes to create personalized shopping
            lists, and connect with other users to share a shopping list and
            custom recipes.
            <a href="https://github.com/jaramilloez/kitchen-compass">
              <FontAwesomeIcon icon={faGithub} className="projectItemGithub" />
            </a>
          </div>
        </div>
        <div class="projectItem accordion-item">
          <div class="projectItemHeader accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              TASK MANAGER
            </button>
          </div>
          <div
            id="collapseThree"
            class="projectItemBody accordion-collapse collapse"
            data-bs-parent="#projectsAccordion"
          >
            A classic, efficient task manager. Users can create, edit, and
            delete their tasks. It also bene
            fits from filter and sorting
            options, as well as all of the tasks being paginated.
            <a href="https://github.com/jaramilloez/Task-Manager">
              <FontAwesomeIcon icon={faGithub} className="projectItemGithub" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
