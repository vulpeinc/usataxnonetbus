export const site = {
  name: "USA Tax",
  domain: "usataxnonetbus.com",
  url: "https://www.usataxnonetbus.com",
  email: "usataxnonetbus@gmail.com",
  description:
    "USA Tax provides individual and business tax preparation, tax planning and consultation with clear communication and personal attention.",
  disclaimer:
    "USA Tax is a private company and is not affiliated with the Internal Revenue Service (IRS) or any government agency.",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  forWho: string[];
  includes: string[];
  prepare: string[];
};

export const services: Service[] = [
  {
    slug: "individual-tax-preparation",
    title: "Individual Tax Preparation",
    short: "Preparation of your federal individual income tax return, based on the documents you provide.",
    intro:
      "We prepare your individual income tax return from the information and documents you provide, explain what we need from you, and walk you through the return before it is filed.",
    forWho: [
      "Employees with W-2 income",
      "Freelancers and independent contractors",
      "Households with dependents or education expenses",
      "Taxpayers with investment or rental income",
    ],
    includes: [
      "Review of the documents and information you provide",
      "Preparation of your federal return",
      "A walkthrough of the return before filing",
      "Answers to your questions during the engagement",
    ],
    prepare: ["W-2 and 1099 forms", "Prior-year return, if available", "Records of deductions and credits you plan to claim"],
  },
  {
    slug: "business-tax-preparation",
    title: "Business Tax Preparation",
    short: "Tax return preparation for small businesses and self-employed owners.",
    intro:
      "We prepare tax returns for small businesses based on your financial records, and we tell you early what is missing so filing deadlines are easier to meet.",
    forWho: [
      "Sole proprietors and single-member LLCs",
      "Partnerships and multi-member LLCs",
      "Small corporations",
      "Business owners with income from more than one source",
    ],
    includes: [
      "Review of your income and expense records",
      "Preparation of the applicable business return",
      "A list of any missing information before we start",
      "Answers to your questions during the engagement",
    ],
    prepare: ["Profit and loss statement or bookkeeping records", "Formation documents and EIN", "Prior-year business return, if available"],
  },
  {
    slug: "tax-planning",
    title: "Tax Planning",
    short: "Forward-looking review of your situation to help you make informed decisions during the year.",
    intro:
      "Tax planning looks ahead instead of back. We review your current situation and expected changes, so you can make decisions during the year with a clearer view of how they may affect your taxes.",
    forWho: [
      "Individuals expecting a change in income or family situation",
      "New business owners",
      "Self-employed taxpayers who make estimated payments",
      "Anyone who wants fewer surprises at filing time",
    ],
    includes: [
      "Review of your current and expected situation",
      "Discussion of options that may apply to you",
      "A written summary of the points discussed",
    ],
    prepare: ["Most recent tax return", "Year-to-date income information", "Notes on planned changes (new job, business, home, family)"],
  },
  {
    slug: "tax-consultation",
    title: "Tax Consultation",
    short: "One-on-one sessions to answer your tax questions and clarify your options.",
    intro:
      "A consultation is a focused conversation about a specific question: a notice you received, a change in your situation, or a decision you need to make. We explain what applies to you and what the next steps could be.",
    forWho: [
      "Taxpayers with a specific question",
      "People who received a letter or notice and want help understanding it",
      "Business owners comparing options before a decision",
    ],
    includes: [
      "A scheduled one-on-one session",
      "Review of the documents relevant to your question",
      "A clear explanation of the next steps",
    ],
    prepare: ["Your question, in a few sentences", "Any letter, notice or document related to it"],
  },
  {
    slug: "tax-document-organization",
    title: "Tax Document Organization",
    short: "Help gathering and organizing the documents you need before filing.",
    intro:
      "Missing or disorganized documents are a common reason returns get delayed. We help you list what you need, organize what you have and identify what is still missing.",
    forWho: [
      "First-time filers",
      "Taxpayers with several income sources",
      "Business owners whose records need to be organized before filing",
    ],
    includes: [
      "A checklist based on your situation",
      "Review of the documents you have",
      "A list of missing items and where they usually come from",
    ],
    prepare: ["Any tax documents you have already received", "Bank or business statements, if applicable"],
  },
  {
    slug: "tax-filing-assistance",
    title: "Tax Filing Assistance",
    short: "Guidance through the filing process so you know where your return stands.",
    intro:
      "We guide you through the filing process, explain each step and deadline, and tell you what to expect after your return is submitted.",
    forWho: [
      "Taxpayers who want support through the filing process",
      "Clients of our preparation services",
      "Anyone unsure about deadlines or filing requirements",
    ],
    includes: [
      "Explanation of the filing steps and deadlines",
      "Guidance on how your return will be submitted",
      "Help understanding the status of your return",
    ],
    prepare: ["Your completed or prepared return", "Identification as required for filing"],
  },
];

export const steps = [
  { title: "Connect With Us", text: "Tell us about your needs and the type of assistance you're looking for." },
  { title: "Understand Your Situation", text: "We review the information provided and identify the next appropriate steps." },
  { title: "Receive Personalized Guidance", text: "Our team explains the available services and helps you understand the process." },
  { title: "Move Forward With Confidence", text: "Receive guidance and support throughout your engagement." },
];

export const faqs = [
  {
    q: "How do I get started?",
    a: "Send us a message through the contact form or by email. Tell us what kind of help you need, and we will reply with the next steps and the information we will need from you.",
  },
  {
    q: "Do you work with both individuals and businesses?",
    a: "Yes. We prepare individual returns and returns for small businesses, and we also offer tax planning and consultations.",
  },
  {
    q: "Should I send my documents through the contact form?",
    a: "No. Please do not send your Social Security number, tax returns or financial documents through the contact form or by regular email. Once we talk, we will explain how to share documents safely.",
  },
  {
    q: "Can you guarantee a refund amount?",
    a: "No one can honestly guarantee a refund amount. Your result depends on your income, deductions, credits and the documents you provide. We will explain what applies to your situation.",
  },
  {
    q: "Are you affiliated with the IRS?",
    a: "No. USA Tax is a private company and is not affiliated with the IRS or any government agency.",
  },
  {
    q: "What should I prepare before our first conversation?",
    a: "A short description of your situation and, if you have it, your most recent tax return. We will send you a more specific list after we understand what you need.",
  },
];

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/contact", label: "Contact" },
];
