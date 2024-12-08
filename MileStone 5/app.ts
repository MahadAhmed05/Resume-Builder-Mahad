function toggleVisibility(sectionId: string): void {
  const section = document.getElementById(sectionId);

  if (section) {
    if (section.style.display === "none") {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  }
}

function toggleForm(): void {
  const form = document.getElementById("resume-form");

  const display = document.getElementById("resume-display");

  if (form && display) {
    if (form.style.display === "none") {
      form.style.display = "block";
      display.style.display = "none";
    } else {
      form.style.display = "none";
      display.style.display = "block";
    }
  }
}

function updateResume(): void {
  const name = (<HTMLInputElement>document.getElementById("name")).value;
  const contact = (document.getElementById("contact") as HTMLInputElement)
    .value;
  const education = (document.getElementById("education") as HTMLInputElement)
    .value;
  const skill1 = (document.getElementById("skill1") as HTMLInputElement).value;
  const skill2 = (document.getElementById("skill2") as HTMLInputElement).value;
  const skill3 = (document.getElementById("skill3") as HTMLInputElement).value;
  const experience = (document.getElementById("experience") as HTMLInputElement)
    .value;

  (document.getElementById("display-name") as HTMLElement).innerText = name;
  (
    document.getElementById("display-contact") as HTMLElement
  ).innerText = `Contact: ${contact}`;
  (document.getElementById("display-education") as HTMLElement).innerText =
    education;
  (document.getElementById("display-experience") as HTMLElement).innerText =
    experience;
  (document.getElementById("display-skills") as HTMLElement).innerHTML = `
      <li>${skill1}</li>
      <li>${skill2}</li>
      <li>${skill3}</li>
    `;

  toggleForm();
}
