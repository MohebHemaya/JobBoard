import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import jobs from "../../../../jobs.json";

interface JobPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((j) => j.slug === slug);

  if (!job) {
    return {
      title: "Job Not Found",
      description: "The requested job posting could not be found.",
    };
  }

  return {
    title: `${job.title} | ${job.company}`,
    description: job.description,
  };
}


export default async function JobPage({ params }: JobPageProps) {
  // 1. Await the parameters (Next.js 15+ dynamic route rule)
  const { slug } = await params;

  // 2. Find the job from our data source
  const job = jobs.find((j) => j.slug === slug);

  // 3. Proper 404 handling using notFound()
  if (!job) {
    notFound();
  }


  // 4. Generate JSON-LD Google Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": job.title,
    "description": job.description,
    "datePosted": job.datePosted,
    "validThrough": job.validThrough,
    "employmentType": job.employmentType.toUpperCase().replace("-", "_"),
    "hiringOrganization": {
      "@type": "Organization",
      "name": job.company,
      "sameAs": job.website,
      "logo": job.companyLogo,
    },
    "jobLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": job.location,
      },
    },
    "baseSalary": {
      "@type": "MonetaryAmount",
      "currency": job.salary.currency,
      "value": {
        "@type": "QuantitativeValue",
        "value": job.salary.value,
        "unitText": "MONTH",
      },
    },
  };

  return (
    <div className="min-h-screen bg-zinc-50 font-sans text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 py-12 px-6">
      {/* Inject Google Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto">
        <Link
          href="/jobs"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-indigo-400 mb-8 transition-colors"
        >
          ← Back to jobs
        </Link>

        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
          {/* Header section */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-zinc-100 dark:border-zinc-800 pb-6 mb-6">
            <div className="flex items-center gap-4">
              {/* Company Logo */}
              <div className="relative h-16 w-16 flex items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800">
                <Image
                  src={job.companyLogo}
                  alt={`${job.company} logo`}
                  width={64}
                  height={64}
                  className="object-cover rounded-2xl"
                />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">{job.title}</h1>
                <p className="text-zinc-600 dark:text-zinc-400 font-medium">{job.company}</p>
              </div>
            </div>
          </div>

          {/* Job Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className="bg-zinc-50 dark:bg-zinc-950 p-4 rounded-2xl">
              <span className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider">Location</span>
              <span className="block mt-1 font-bold text-sm">{job.location}</span>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950 p-4 rounded-2xl">
              <span className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider">Job Type</span>
              <span className="block mt-1 font-bold text-sm">{job.employmentType}</span>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950 p-4 rounded-2xl">
              <span className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider">Experience</span>
              <span className="block mt-1 font-bold text-sm">{job.experience}</span>
            </div>
            <div className="bg-zinc-50 dark:bg-zinc-950 p-4 rounded-2xl">
              <span className="block text-xs font-semibold text-zinc-500 uppercase tracking-wider">Salary</span>
              <span className="block mt-1 font-bold text-sm">
                {job.salary.currency} {job.salary.value.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-bold mb-4">Job Description</h2>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed whitespace-pre-wrap">
              {job.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
