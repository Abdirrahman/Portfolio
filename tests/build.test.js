import { expect, test } from "bun:test";
import { readFileSync, existsSync } from "node:fs";

test("the one-page portfolio contains the requested brief and five linked projects", () => {
  const home = readFileSync("dist/index.html", "utf8");
  expect(home).toContain("Abdirrahman Mohamed");
  expect(home).toContain("Software roots, R&amp;D tax expertise; now helping companies claim what their innovation’s worth.");
  expect(home).toContain('id="projects"');
  expect(home).toContain('href="mailto:abdirrahman@outlook.com"');
  expect(home).toContain('href="https://www.linkedin.com/in/abdirrahman/"');

  const projects = [...home.matchAll(/<a class="project-link" href="([^"]+)">([\s\S]*?)<\/a>/g)];
  expect(projects.map(([, href]) => href)).toEqual([
    "https://github.com/Abdirrahman/Covid19-ANN",
    "https://github.com/Abdirrahman/Manzar",
    "https://github.com/Abdirrahman/Flags-Game",
    "https://github.com/a-s-fernando/plant-sensors",
    "https://github.com/BenCorrigan1203/Deloton",
  ]);
  for (const [, , project] of projects) {
    const icon = project.match(/src="([^"]+\.svg)"/)?.[1];
    expect(icon).toBeDefined();
    expect(existsSync(`dist${icon}`)).toBe(true);
    expect(project).toContain('alt=""');
  }
  expect(home).not.toContain("<script");
  expect(home).not.toContain("<video");
});

test("old project links redirect to the one-page project section", () => {
  const redirect = readFileSync("dist/projects/index.html", "utf8");
  expect(redirect).toContain("/#projects");
  const config = JSON.parse(readFileSync("vercel.json", "utf8"));
  expect(config.redirects).toContainEqual({
    source: "/projects", destination: "/#projects", permanent: true,
  });
  expect(JSON.parse(readFileSync("dist/api/hello", "utf8"))).toEqual({ name: "John Doe" });
});
