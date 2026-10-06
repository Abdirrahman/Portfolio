import { expect, test } from "bun:test";
import { readFileSync, existsSync } from "node:fs";

test("the static build preserves the portfolio's routes, content, links, and demos", () => {
  const home = readFileSync("dist/index.html", "utf8");
  const projects = readFileSync("dist/projects/index.html", "utf8");

  expect(home).toContain("Abdirrahman Mohamed");
  expect(home).toContain("Data &amp; Software Engineer");
  expect(home).toContain('href="/projects"');
  expect(home).toContain("abdirrahman@outlook.com");
  expect(projects.match(/<article class="project">/g)).toHaveLength(5);
  for (const repository of ["Syl-Desktop", "React-Native-Template", "supa", "PrayerTimesTwitBot", "Covid19-ANN"]) {
    expect(projects).toContain(`href="https://github.com/Abdirrahman/${repository}"`);
  }
  const demos = [...projects.matchAll(/<source src="([^"]+)"/g)];
  expect(demos).toHaveLength(5);
  for (const [, source] of demos) expect(existsSync(`dist${source}`)).toBe(true);
  expect(projects).toContain('href="https://supabase-psql-tut.netlify.app"');
  expect(projects).toContain('href="https://twitter.com/BotPrayerTimes"');
  expect(JSON.parse(readFileSync("dist/api/hello", "utf8"))).toEqual({ name: "John Doe" });
});

test("demos are lightweight, streamable MP4s with previews and deferred loading", () => {
  const projects = readFileSync("dist/projects/index.html", "utf8");
  const videos = [...projects.matchAll(/<video\b([^>]+)>\s*<source src="([^"]+)" type="video\/mp4"/g)];
  expect(videos).toHaveLength(5);
  let totalBytes = 0;
  for (const [, attributes, source] of videos) {
    expect(attributes).toContain('preload="none"');
    expect(attributes).toContain("controls");
    expect(attributes).not.toContain("autoplay");
    const poster = attributes.match(/poster="([^"]+\.webp)"/)?.[1];
    expect(poster).toBeDefined();
    expect(existsSync(`dist${poster}`)).toBe(true);
    expect(source).toMatch(/\/videos\/[^/]+\.[a-f0-9]{10}\.mp4$/);
    const data = readFileSync(`dist${source}`);
    totalBytes += data.length;
    expect(data.indexOf("moov")).toBeGreaterThan(0);
    expect(data.indexOf("moov")).toBeLessThan(data.indexOf("mdat"));
  }
  expect(totalBytes).toBeLessThan(5 * 1024 * 1024);
});
