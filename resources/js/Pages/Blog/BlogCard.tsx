
import { Badge } from "@/Components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/Components/ui/card"
import { Link } from "@inertiajs/react"
import { Calendar } from "lucide-react"

interface BlogCardProps {
  title: string
  description: string
  imgSrc: string
  category: string
  date: string
  slug: string
  views?: string
  comments?: string
}

export default function BlogCard({ title, description, imgSrc, category, date, slug, views, comments }: BlogCardProps) {
  return (
    <Link href={`/blog/${slug}`} className="w-full max-w-md">
      <Card className="overflow-hidden h-full transition-all duration-200 hover:shadow-lg">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={imgSrc || "/placeholder.svg"}
            alt={title}
            
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge variant="secondary" className="absolute top-4 left-4 z-10 bg-green-500 text-white hover:bg-green-700">
            {category}
          </Badge>
        </div>
        <CardHeader className="p-5">
          <h3 className="text-xl font-bold tracking-tight text-totblue-light">{title}</h3>
        </CardHeader>
        <CardContent className="p-5 pt-0">
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
        <CardFooter className="p-5 pt-0 flex items-center text-sm text-muted-foreground">
          <div className="flex items-center">
            <Calendar className="mr-1 h-3.5 w-3.5" />
            <span>{date}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  )
}

