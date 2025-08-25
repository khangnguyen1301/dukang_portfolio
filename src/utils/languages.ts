export interface Language {
  name: string;
  iconName: string;
  className?: string;
}

export const languages: Record<string, Language> = {
  react: {
    name: "React",
    iconName: "react",
  },
  reactQuery: {
    name: "React Query",
    iconName: "react_query",
  },
  graphql: {
    name: "GraphQL",
    iconName: "graphql",
  },
  nest: {
    name: "NestJS",
    iconName: "nestjs",
  },
  material: {
    name: "Material UI",
    iconName: "materialui",
  },
  next: {
    name: "Next.js",
    iconName: "nextjs_icon_dark",
  },
  postgre: {
    name: "PostgreSQL",
    iconName: "postgresql",
  },
  prisma: {
    name: "Prisma",
    iconName: "prisma_dark",
  },
  docker: {
    name: "Docker",
    iconName: "docker",
  },
  aws: {
    name: "AWS",
    iconName: "aws",
  },
  antDesign: {
    name: "Ant Design",
    iconName: "ant-design",
  },
  shadcn: {
    name: "ShadCN",
    iconName: "shadcn-ui",
  },
  swagger: {
    name: "Swagger",
    iconName: "swagger",
  },
  redux: {
    name: "Redux",
    iconName: "redux",
  },
  redis: {
    name: "Redis",
    iconName: "redis",
  },
  radixUi: {
    name: "Radix UI",
    iconName: "radix-ui",
  },
  rabbitMQ: {
    name: "RabbitMQ",
    iconName: "rabbitmq",
  },
  gemini: {
    name: "Gemini",
    iconName: "gemini",
  },
  astro: {
    name: "Astro",
    iconName: "astro",
  },
  cloudinary: {
    name: "Cloudinary",
    iconName: "cloudinary",
  },
  clerk: {
    name: "Clerk",
    iconName: "clerk",
  },
  bootstrap: {
    name: "Bootstrap",
    iconName: "bootstrap",
  },
  cloudflare: {
    name: "Cloudflare",
    iconName: "cloudflare",
  },
  html: {
    name: "HTML 5",
    iconName: "html",
  },
  javascript: {
    name: "JavaScript",
    iconName: "javascript",
  },
  mongo: {
    name: "MongoDb",
    iconName: "mongo",
  },
  mysql: {
    name: "MySQL",
    className: "bg-[#f6ece1]!",
    iconName: "mysql",
  },
  node: {
    name: "Node.js",
    iconName: "node",
  },
  tailwind: {
    name: "Tailwind CSS",
    iconName: "tailwind",
  },
  figma: {
    name: "Figma",
    iconName: "figma",
  },
  firebase: {
    name: "Firebase",
    iconName: "firebase",
  },
  markdown: {
    name: "Markdown",
    iconName: "markdown",
  },
  sass: {
    name: "Sass",
    iconName: "sass",
  },
  ts: {
    name: "TypeScript",
    iconName: "typescript",
  },
  git: {
    name: "Git",
    iconName: "git",
  },
  css: {
    name: "CSS",
    iconName: "css",
  },
  vercel: {
    name: "Vercel",
    iconName: "vercel",
  },
  netlify: {
    name: "Netlify",
    iconName: "netlify",
  },
  gatsby: {
    name: "Gatsby",
    iconName: "gatsby",
  },
  windsurf: {
    name: "Windsurf",
    iconName: "windsurf-logo",
  },
  cursor: {
    name: "Cursor",
    iconName: "cursor-ia",
  },
  deepseek: {
    name: "DeepSeek",
    iconName: "deepseek",
  },
};

export const getLanguage = (lang: string): Language => {
  return languages[lang] || languages.html;
};
