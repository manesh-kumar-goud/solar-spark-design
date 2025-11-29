import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding PM Surya Ghar Subsidy Scheme",
    excerpt:
      "Learn everything about the government's solar subsidy program and how to apply for maximum benefits.",
    date: "Nov 25, 2024",
    author: "Admin",
    category: "Government Schemes",
  },
  {
    id: 2,
    title: "How Solar Panels Can Reduce Your Electricity Bill",
    excerpt:
      "Discover how solar energy can help you save up to 90% on your monthly electricity bills.",
    date: "Nov 20, 2024",
    author: "Admin",
    category: "Solar Benefits",
  },
  {
    id: 3,
    title: "Guide to Choosing the Right Solar Panel for Your Home",
    excerpt:
      "A comprehensive guide to help you select the perfect solar panels based on your needs and budget.",
    date: "Nov 15, 2024",
    author: "Admin",
    category: "Guides",
  },
  {
    id: 4,
    title: "Solar Panel Maintenance Tips",
    excerpt:
      "Keep your solar system running at peak efficiency with these simple maintenance tips.",
    date: "Nov 10, 2024",
    author: "Admin",
    category: "Maintenance",
  },
];

const Blog = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-hero py-20">
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="mb-4 font-heading text-4xl font-bold text-primary-foreground md:text-5xl">
            Blog & News
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-primary-foreground/80">
            Stay updated with the latest in solar energy, tips, and industry news.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
            {blogPosts.map((post, index) => (
              <article
                key={post.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-solar transition-all hover:-translate-y-1 hover:shadow-solar-lg"
              >
                {/* Thumbnail placeholder */}
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5" />

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {post.date}
                    </span>
                  </div>

                  <h2 className="mb-2 font-heading text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="mb-4 text-muted-foreground line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      {post.author}
                    </span>
                    <Button variant="ghost" size="sm" className="gap-1">
                      Read More
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Pagination placeholder */}
          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="solar" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
