import { Link } from "@inertiajs/react"
import { Card, CardContent } from "./ui/card"


interface Blog {
  title: string
  imgSrc: string
  date: string
  slug: string
}

interface TopBlogsProps {
  blogs: Blog[]
}

export default function TopBlogs({ blogs }: TopBlogsProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-lg font-semibold mb-4">Top Articles</h3>
        <div className="space-y-4">
          {blogs.map((blog, index) => (
            <Link key={index} href={`/blog/${blog.slug}`} className="flex items-start space-x-4 group">
              <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                <img
                  src={blog.imgSrc || "/placeholder.svg"}
                  alt={blog.title}
                  
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-medium group-hover:underline line-clamp-2">{blog.title}</h4>
                <p className="text-xs text-muted-foreground">{blog.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

