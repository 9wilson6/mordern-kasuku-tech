
import BlogCard from "@/Pages/Blog/BlogCard"
import { ChevronRight } from "lucide-react"

export default function BlogPage() {
  const blogs = [
    {
      category: "DEVELOPMENT",
      title: "The Catalyzer",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imgSrc: "/placeholder.svg?height=400&width=720",
      date: "12 Jun 2023",
      views: "1.2K",
      comments: "6",
    },
    {
      category: "DESIGN",
      title: "The 400 Blows",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imgSrc: "/placeholder.svg?height=400&width=720",
      date: "24 May 2023",
      views: "1.2K",
      comments: "6",
    },
    {
      category: "TECHNOLOGY",
      title: "Shooting Stars",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imgSrc: "/placeholder.svg?height=400&width=720",
      date: "10 Apr 2023",
      views: "1.2K",
      comments: "6",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header section with background pattern */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                From Our Latest Blog Posts
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                At KasukuTech, we're passionate about empowering businesses through software innovation. Explore our
                blog for practical advice, success stories, and cutting-edge trends.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog posts grid */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <BlogCard
                key={index}
                title={blog.title}
                description={blog.description}
                imgSrc={blog.imgSrc}
                category={blog.category}
                date={blog.date}
              />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button className="group" size="lg">
              See all articles
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

