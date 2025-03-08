import TopBlogs from "@/Components/TopBlogs";
import { Badge } from "@/Components/ui/badge";
import { Calendar } from "lucide-react";

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = params;


        const post = {
            title: "The Catalyzer",
            content:
                "This is the content of the blog post. In a real app, this would be MDX content.",
            date: "12 Jun 2023",
            category: "DEVELOPMENT",
            author: "John Doe",
            authorImage: "/placeholder.svg?height=100&width=100",
            coverImage: "/placeholder.svg?height=600&width=1200",
        };

        const topBlogs = [
            {
                title: "The 400 Blows",
                imgSrc: "/placeholder.svg?height=400&width=720",
                date: "24 May 2023",
                slug: "the-400-blows",
            },
            {
                title: "Shooting Stars",
                imgSrc: "/placeholder.svg?height=400&width=720",
                date: "10 Apr 2023",
                slug: "shooting-stars",
            },
            {
                title: "Neptune",
                imgSrc: "/placeholder.svg?height=400&width=720",
                date: "8 Mar 2023",
                slug: "neptune",
            },
        ];

        return (
            <div className="min-h-screen bg-background">
                <div className="container px-4 py-12 md:px-6 md:py-16 lg:py-20 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 xl:grid-cols-4">
                        {/* Main content */}
                        <div className="lg:col-span-2 xl:col-span-3">
                            {/* Cover image */}
                            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
                                <img
                                    src={post.coverImage || "/placeholder.svg"}
                                    alt={post.title}
                                    className="object-cover"
                                />
                                <Badge className="absolute top-4 left-4 z-10 bg-black text-white">
                                    {post.category}
                                </Badge>
                            </div>

                            {/* Post header */}
                            <div className="mb-8">
                                <h1 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-4">
                                    {post.title}
                                </h1>
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <div className="relative h-10 w-10 overflow-hidden rounded-full">
                                            <img
                                                src={
                                                    post.authorImage ||
                                                    "/placeholder.svg"
                                                }
                                                alt={post.title}
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="font-medium">
                                            {post.author}
                                        </span>
                                    </div>
                                    <div className="flex items-center text-muted-foreground">
                                        <Calendar className="mr-1 h-4 w-4" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Post content */}
                            <div className="prose prose-lg max-w-none dark:prose-invert">
                                {/* In a real app, this would be rendered MDX content */}
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Suspendisse varius enim in
                                    eros elementum tristique. Duis cursus, mi
                                    quis viverra ornare, eros dolor interdum
                                    nulla, ut commodo diam libero vitae erat.
                                </p>
                                <p>
                                    Aenean faucibus nibh et justo cursus id
                                    rutrum lorem imperdiet. Nunc ut sem vitae
                                    risus tristique posuere. Aenean faucibus
                                    nibh et justo cursus id rutrum lorem
                                    imperdiet.
                                </p>
                                <h2>Heading Level 2</h2>
                                <p>
                                    Suspendisse potenti. Praesent ac mattis sem.
                                    Maecenas finibus, purus eget tincidunt
                                    euismod, tortor eros malesuada urna, ut
                                    ultrices est nibh id risus. Proin non
                                    porttitor nisi, at efficitur nunc.
                                </p>
                                <ul>
                                    <li>First item in the list</li>
                                    <li>Second item in the list</li>
                                    <li>Third item in the list</li>
                                </ul>
                                <p>
                                    Curabitur lobortis id lorem id bibendum. Ut
                                    id consectetur magna. Quisque volutpat augue
                                    enim, pulvinar lobortis nibh lacinia at.
                                </p>
                                <blockquote>
                                    This is a blockquote. Suspendisse varius
                                    enim in eros elementum tristique.
                                </blockquote>
                                <p>
                                    Donec rutrum congue leo eget malesuada.
                                    Vivamus suscipit tortor eget felis porttitor
                                    volutpat. Cras ultricies ligula sed magna
                                    dictum porta.
                                </p>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <TopBlogs blogs={topBlogs} />

                            {/* Categories */}
                            <div className="rounded-lg border bg-card p-6">
                                <h3 className="text-lg font-semibold mb-4">
                                    Categories
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    <Badge className="bg-black text-white hover:bg-black/90">
                                        DEVELOPMENT
                                    </Badge>
                                    <Badge className="bg-black text-white hover:bg-black/90">
                                        DESIGN
                                    </Badge>
                                    <Badge className="bg-black text-white hover:bg-black/90">
                                        TECHNOLOGY
                                    </Badge>
                                    <Badge className="bg-black text-white hover:bg-black/90">
                                        BUSINESS
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
  
}
