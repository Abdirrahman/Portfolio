import { expect, test } from "bun:test";
import { readFileSync, existsSync } from "node:fs";

test("the one-page portfolio contains the requested brief and five linked projects", () => {
  const home = readFileSync("dist/index.html", "utf8");
  expect(home).toContain("<h1>Abdirrahman</h1>");
  expect(home).toContain("Software roots, R&amp;D tax expertise; now helping companies claim what their innovation’s worth.");
  expect(home).toContain('id="projects"');
  expect(home).toContain('id="projects-heading">Selected Projects</h2>');
  expect(home).toContain('name="theme-color" content="#161616"');
  expect(home).toContain('aria-label="Contact"');
  expect(home).toContain('href="https://github.com/Abdirrahman"');
  expect(home).toContain('href="https://www.linkedin.com/in/abdirrahman/"');
  expect(home).toContain('href="mailto:abdirrahman@outlook.com"');

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
  const scripts = [...home.matchAll(/<script\b([^>]*)>/g)];
  expect(scripts).toHaveLength(1);
  expect(scripts[0][1]).toContain('type="application/ld+json"');
  expect(home).not.toContain("<video");
});

test("the published career and search metadata reflect the final portfolio", () => {
  const home = readFileSync("dist/index.html", "utf8");
  expect(home).toMatch(/Previously a Technical Consultant at[\s\S]*?Bonham &amp; Brook[\s\S]*?and a Data Engineer at[\s\S]*?Sigma Labs/);
  expect(home).not.toContain("Leyton");
  expect(home).not.toContain("identity-role");
  expect(home).toContain("<title>Abdirrahman Mohamed | R&amp;D Tax Consultant</title>");
  expect(home).toContain('rel="canonical" href="https://www.abdirrahman.com/"');
  expect(home).toContain('property="og:url" content="https://www.abdirrahman.com/"');
  expect(home).toContain('name="twitter:card" content="summary"');
  expect(home).not.toContain('name="robots" content="noindex');
  const profile = JSON.parse(home.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  expect(profile["@type"]).toBe("ProfilePage");
  expect(profile.mainEntity["@type"]).toBe("Person");
  expect(profile.mainEntity.name).toBe("Abdirrahman Mohamed");
  expect(profile.mainEntity.sameAs).toEqual([
    "https://github.com/Abdirrahman", "https://www.linkedin.com/in/abdirrahman/",
  ]);
  const description = home.match(/<meta name="description" content="([^"]+)"/)[1];
  expect(description).toContain("R&amp;D tax consultant");
  expect(description).not.toContain("Leyton");
  expect(readFileSync("dist/robots.txt", "utf8")).toContain("Sitemap: https://www.abdirrahman.com/sitemap.xml");
  const sitemap = readFileSync("dist/sitemap.xml", "utf8");
  expect([...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, url]) => url)).toEqual(["https://www.abdirrahman.com/"]);
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
