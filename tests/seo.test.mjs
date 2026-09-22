import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { SERVICES } from "../src/lib/services-data.ts";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

test("google verification file exists and matches exact required content", () => {
  const filePath = path.join(publicDir, "google7291d6ac8f4f90ed.html");
  assert.ok(fs.existsSync(filePath), "google7291d6ac8f4f90ed.html must exist in public directory");
  const content = fs.readFileSync(filePath, "utf-8").trim();
  assert.equal(
    content,
    "google-site-verification: google7291d6ac8f4f90ed.html",
    "Verification file must contain exact expected verification token without HTML wrapping",
  );
});

test("robots.txt allows crawling and specifies production sitemap", () => {
  const filePath = path.join(publicDir, "robots.txt");
  assert.ok(fs.existsSync(filePath), "robots.txt must exist in public directory");
  const content = fs.readFileSync(filePath, "utf-8");
  assert.match(content, /User-agent:\s*\*/i);
  assert.match(content, /Allow:\s*\//i);
  assert.match(
    content,
    /Sitemap:\s*https:\/\/nasibrehmandigitalsolutions\.vercel\.app\/sitemap\.xml/i,
  );
});

test("sitemap.xml is valid XML and contains all 16 canonical indexable pages", () => {
  const filePath = path.join(publicDir, "sitemap.xml");
  assert.ok(fs.existsSync(filePath), "sitemap.xml must exist in public directory");
  const content = fs.readFileSync(filePath, "utf-8");

  // Namespace check
  assert.match(content, /<urlset\s+xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/);

  // Extract all <loc> URLs
  const locRegex = /<loc>(https:\/\/[^<]+)<\/loc>/g;
  const urls = [];
  let match;
  while ((match = locRegex.exec(content)) !== null) {
    urls.push(match[1]);
  }

  assert.equal(urls.length, 16, "Sitemap must contain exactly 16 canonical URLs");

  const expectedUrls = [
    "https://nasibrehmandigitalsolutions.vercel.app/",
    "https://nasibrehmandigitalsolutions.vercel.app/services",
    "https://nasibrehmandigitalsolutions.vercel.app/services/website-development",
    "https://nasibrehmandigitalsolutions.vercel.app/services/ai-chatbots",
    "https://nasibrehmandigitalsolutions.vercel.app/services/ai-automation",
    "https://nasibrehmandigitalsolutions.vercel.app/services/ai-voice-agents",
    "https://nasibrehmandigitalsolutions.vercel.app/services/custom-digital-solutions",
    "https://nasibrehmandigitalsolutions.vercel.app/projects",
    "https://nasibrehmandigitalsolutions.vercel.app/process",
    "https://nasibrehmandigitalsolutions.vercel.app/pricing",
    "https://nasibrehmandigitalsolutions.vercel.app/faq",
    "https://nasibrehmandigitalsolutions.vercel.app/contact",
    "https://nasibrehmandigitalsolutions.vercel.app/privacy",
    "https://nasibrehmandigitalsolutions.vercel.app/terms",
    "https://nasibrehmandigitalsolutions.vercel.app/disclaimer",
    "https://nasibrehmandigitalsolutions.vercel.app/accessibility",
  ];

  for (const exp of expectedUrls) {
    assert.ok(urls.includes(exp), `Sitemap missing expected canonical URL: ${exp}`);
  }

  // Ensure exclusions
  assert.equal(content.includes("/portfolio"), false, "Redirect /portfolio must be excluded");
  assert.equal(content.includes("/testimonials"), false, "Redirect /testimonials must be excluded");
  assert.equal(
    content.includes("google7291d6ac8f4f90ed.html"),
    false,
    "Verification file must not be in sitemap",
  );
  for (const url of urls) {
    assert.equal(url.includes("?"), false, `Query parameters must not be in sitemap URL: ${url}`);
    assert.equal(url.includes("#"), false, `URL fragments must not be in sitemap URL: ${url}`);
  }
});

test("all five service detail pages have optimized, distinct titles and descriptions with required keyword themes", () => {
  assert.equal(SERVICES.length, 5);

  const expectedThemes = {
    "website-development": "Website Development Services in Pakistan",
    "ai-chatbots": "AI Chatbot Development Services",
    "ai-automation": "n8n Workflow Automation Services",
    "ai-voice-agents": "AI Voice Agent Development Services",
    "custom-digital-solutions": "Custom Software & Business Automation",
  };

  const titles = new Set();
  const descriptions = new Set();

  for (const s of SERVICES) {
    assert.ok(s.metaTitle, `Service ${s.slug} must have metaTitle`);
    assert.ok(s.metaDescription, `Service ${s.slug} must have metaDescription`);

    // Unique check
    assert.ok(!titles.has(s.metaTitle), `Duplicate title found: ${s.metaTitle}`);
    assert.ok(
      !descriptions.has(s.metaDescription),
      `Duplicate description found: ${s.metaDescription}`,
    );
    titles.add(s.metaTitle);
    descriptions.add(s.metaDescription);

    // Brand check
    assert.ok(
      s.metaTitle.includes("Nasib Rehman"),
      `Title must preserve brand identity: ${s.metaTitle}`,
    );

    // Keyword theme check
    const expectedTheme = expectedThemes[s.slug];
    assert.ok(
      s.metaTitle.toLowerCase().includes(expectedTheme.toLowerCase()),
      `Title ${s.metaTitle} should reflect keyword theme ${expectedTheme}`,
    );

    // Length checks (concise title, natural description)
    assert.ok(
      s.metaTitle.length >= 35 && s.metaTitle.length <= 70,
      `Title length ${s.metaTitle.length} outside recommended range (35-70): ${s.metaTitle}`,
    );
    assert.ok(
      s.metaDescription.length >= 120 && s.metaDescription.length <= 180,
      `Description length ${s.metaDescription.length} outside recommended range (120-180): ${s.metaDescription}`,
    );
  }
});

test("projects route metadata uses honest concept/demo description and excludes client builds", () => {
  const filePath = path.join(rootDir, "src", "routes", "projects.tsx");
  assert.ok(fs.existsSync(filePath), "projects.tsx must exist");
  const content = fs.readFileSync(filePath, "utf-8");
  assert.equal(
    content.includes("client builds"),
    false,
    "Projects route must not claim client builds when page only contains demo/concept builds",
  );
  assert.ok(
    content.includes(
      "Explore demo websites, chatbot concepts, workflow automations and voice agent examples by Nasib Rehman. Review the projects and discuss your requirements.",
    ),
    "Projects route must include approved honesty-compliant description",
  );
});
