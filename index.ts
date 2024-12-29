import { analyzeResume } from "./src/resume";

async function main() {
  const resumeText = `
    **John Doe**
    Email: john.doe@example.com | Phone: (123) 456-7890
    **Summary:**
    Experienced Software Engineer with a strong background in developing scalable web applications and collaborating with cross-functional teams.

    **Experience:**
    - **Senior Software Engineer** at TechCorp (2019 - Present)
      - Led the development of a web-based CRM system using JavaScript and Python.
      - Collaborated with designers and product managers to implement user-friendly features.
      - Conducted code reviews and mentored junior developers.

    - **Software Engineer** at WebSolutions (2016 - 2019)
      - Developed and maintained e-commerce platforms using JavaScript frameworks.
      - Optimized application performance, resulting in a 20% increase in load speed.
      - Integrated third-party APIs to enhance platform capabilities.

    **Education:**
    - **B.Sc. in Computer Science** from State University (2012 - 2016)

    **Skills:**
    - Programming Languages: JavaScript, Python, Java
    - Frameworks: React, Node.js, Django
    - Tools: Git, Docker, AWS

    **Certifications:**
    - Certified Scrum Master
    `;

  try {
    const response = await analyzeResume(resumeText);

    if (response.choices && response.choices.length > 0) {
      const analysis = response.choices[0].message?.content;
      console.log("Resume Analysis:\n", analysis);
    } else {
      console.error("No analysis found in the response.");
    }
  } catch (error) {
    console.error("Failed to analyze resume:", error);
  }
}

main();
