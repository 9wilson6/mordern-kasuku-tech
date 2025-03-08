

import { Input } from "@/Components/ui/input"
import { Search } from "lucide-react"
import BlogCard from "./BlogCard"
import { Badge } from "@/Components/ui/badge"
import TopBlogs from "@/Components/TopBlogs"
import { Button } from "@/Components/ui/button"


export default function BlogPage() {
  // In a real app, you would fetch this data from your CMS or API
  const allBlogs = [
    {
      category: "DEVELOPMENT",
      title: "The Catalyzer",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imgSrc: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
      date: "12 Jun 2023",
      slug: "the-catalyzer",
    },
    {
      category: "DESIGN",
      title: "The 400 Blows",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imgSrc: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
      date: "24 May 2023",
      slug: "the-400-blows",
    },
    {
      category: "TECHNOLOGY",
      title: "Shooting Stars",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imgSrc: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
      date: "10 Apr 2023",
      slug: "shooting-stars",
    },
    {
      category: "BUSINESS",
      title: "Neptune",
      description:
        "Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.",
      imgSrc: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
      date: "8 Mar 2023",
      slug: "neptune",
    },
    {
      category: "DEVELOPMENT",
      title: "The 400 Blows",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imgSrc: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
      date: "15 Feb 2023",
      slug: "the-400-blows-2",
    },
    {
      category: "DESIGN",
      title: "Holden Caulfield",
      description: "Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.",
      imgSrc: "https://cdn.pixabay.com/photo/2017/04/10/22/28/residence-2219972_1280.jpg",
      date: "5 Jan 2023",
      slug: "holden-caulfield",
    },
  ]

  const topBlogs = allBlogs.slice(0, 3)

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20 max-w-7xl mx-auto">
        <div className="flex flex-col space-y-8 ">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Our Blog</h1>
            <p className="max-w-[700px] text-muted-foreground md:text-xl">
              Insights, thoughts, and stories from the KasukuTech team
            </p>
          </div>

          {/* Search bar */}
          <div className="flex w-full max-w-md items-center space-x-2">
            <Input type="text" placeholder="Search articles..." className="flex-1" />
            <Button type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>

          {/* Main content area with sidebar */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 ">
            {/* Main blog listing */}
            <div className="lg:col-span-2 col-span-1 ">
              <div className="grid  gap-4 sm:grid-cols-2 w-full justify-center items-center mx-auto">
                {allBlogs.map((blog, index) => (
                  <BlogCard
                    key={index}
                    title={blog.title}
                    description={blog.description}
                    imgSrc={blog.imgSrc}
                    category={blog.category}
                    date={blog.date}
                    slug={blog.slug}
                  />
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4 max-w-md w-full justify-center items-center mx-auto">
              <TopBlogs blogs={topBlogs} />

              {/* Categories */}
              <div className="rounded-lg border bg-card p-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-black text-white hover:bg-black/90">DEVELOPMENT</Badge>
                  <Badge className="bg-black text-white hover:bg-black/90">DESIGN</Badge>
                  <Badge className="bg-black text-white hover:bg-black/90">TECHNOLOGY</Badge>
                  <Badge className="bg-black text-white hover:bg-black/90">BUSINESS</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

