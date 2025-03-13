"use client";

import {
    Home,
    FileText,
    Mail,
    LogOut,
    ChevronDown,
    ChevronRight,
    User,
    PlusCircle,
    ListOrdered,
    Lock,
    Users,
    UserPlus,
    School,
    Shield,
    Megaphone,
} from "lucide-react";
import { useState } from "react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
    useSidebar,
} from "@/Components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/Components/ui/collapsible";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

const adminNavigationItems = [
    {
        title: "Dashboard",
        href: "/admin/dashboard",
        icon: Home,
    },
    // {
    //     title: "Emails",
    //     href: "/app/emails",
    //     icon: Mail,
    // },
    {
        title: "Blog",
        href: "#",
        icon: FileText,
        hasSubmenu: true,
        submenuItems: [
            {
                title: "New Blog",
                href: "/blog/create",
                icon: PlusCircle,
            },
            {
                title: "Blogs",
                href: "/blog/list",
                icon: ListOrdered,
            },
        ],
    },
];

const clientNavigationItems = [
    {
        title: "Dashboard",
        href: "/client/dashboard",
        icon: Home,
        hasSubmenu: false,
    },
];

const staffNavigationItems = [
    {
        title: "Dashboard",
        href: "/staff/dashboard",
        icon: Home,
        hasSubmenu: false,
    },
    {
        title: "Tasks",
        href: "/tasks",
        icon: ListOrdered,
        hasSubmenu: false,
    },
];

export function AppSidebar() {
    const { url: pathname } = usePage();
    const { state } = useSidebar();
    const isCollapsed = state === "collapsed";
    const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);

    const isActiveRoute = (href: string) => {
        return pathname === href || pathname.startsWith(href + "/");
    };

    const isActiveSubmenu = (item: any) => {
        if (!item.hasSubmenu) return false;
        return item.submenuItems.some((subItem: any) =>
            isActiveRoute(subItem.href)
        );
    };
    const user = usePage().props.auth.user;

    const navigationItems =
        user.role === "admin"
            ? adminNavigationItems
            : user.role === "client"
            ? clientNavigationItems
            : staffNavigationItems;

    return (
        <Sidebar className="border-r border-r-gray-200" collapsible="icon">
            <SidebarHeader className="p-4 border-b border-gray-200">
                <div className="flex justify-center items-center gap-2">
                    <AppLogo isCollapsed={isCollapsed} />
                </div>
            </SidebarHeader>
            <SidebarContent className="flex flex-col h-full overflow-y-auto overflow-x-hidden flex-grow">
                <div className="flex flex-col space-y-6 flex-1">
                    {/* Main Menu Section */}
                    <div className="flex flex-col space-y-2">
                        {!isCollapsed && (
                            <div className="px-4 pt-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                Main Menu
                            </div>
                        )}
                        <SidebarMenu>
                            {navigationItems.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    {item.hasSubmenu ? (
                                        <Collapsible
                                            open={
                                                openSubmenu === item.title ||
                                                isActiveSubmenu(item)
                                            }
                                            onOpenChange={(open) =>
                                                setOpenSubmenu(
                                                    open ? item.title : null
                                                )
                                            }
                                            className="w-full"
                                        >
                                            <CollapsibleTrigger asChild>
                                                <SidebarMenuButton
                                                    tooltip={
                                                        isCollapsed
                                                            ? item.title
                                                            : undefined
                                                    }
                                                    className={`flex flex-row items-center rounded-md h-12 focus:outline-none font-semibold transition-colors ${
                                                        isCollapsed
                                                            ? "px-3 justify-center"
                                                            : "px-4"
                                                    } ${
                                                        isActiveSubmenu(item)
                                                            ? "bg-primary-50 shadow-sm text-primary-400 font-bold"
                                                            : "text-gray-500 hover:text-primary-400"
                                                    }`}
                                                >
                                                    <span className="flex items-center gap-3 w-full">
                                                        <span className="flex justify-center items-center w-5 h-5 flex-shrink-0">
                                                            <item.icon className="w-5 h-5" />
                                                        </span>
                                                        {!isCollapsed && (
                                                            <>
                                                                <span className="text-sm tracking-wide truncate capitalize">
                                                                    {item.title}
                                                                </span>
                                                                <span className="ml-auto">
                                                                    {openSubmenu ===
                                                                    item.title ? (
                                                                        <ChevronDown className="h-4 w-4" />
                                                                    ) : (
                                                                        <ChevronRight className="h-4 w-4" />
                                                                    )}
                                                                </span>
                                                            </>
                                                        )}
                                                    </span>
                                                </SidebarMenuButton>
                                            </CollapsibleTrigger>
                                            <CollapsibleContent>
                                                <SidebarMenuSub>
                                                    {"submenuItems" in item &&
                                                        item.submenuItems.map(
                                                            (subItem) => (
                                                                <SidebarMenuSubItem
                                                                    key={
                                                                        subItem.title
                                                                    }
                                                                >
                                                                    <SidebarMenuSubButton
                                                                        asChild
                                                                        isActive={isActiveRoute(
                                                                            subItem.href
                                                                        )}
                                                                    >
                                                                        <Link
                                                                            href={
                                                                                subItem.href
                                                                            }
                                                                            className="flex items-center gap-2"
                                                                        >
                                                                            <subItem.icon className="h-4 w-4" />
                                                                            <span>
                                                                                {
                                                                                    subItem.title
                                                                                }
                                                                            </span>
                                                                        </Link>
                                                                    </SidebarMenuSubButton>
                                                                </SidebarMenuSubItem>
                                                            )
                                                        )}
                                                </SidebarMenuSub>
                                            </CollapsibleContent>
                                        </Collapsible>
                                    ) : (
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActiveRoute(item.href)}
                                            tooltip={
                                                isCollapsed
                                                    ? item.title
                                                    : undefined
                                            }
                                            className={`flex flex-row items-center rounded-md h-12 focus:outline-none font-semibold transition-colors ${
                                                isCollapsed
                                                    ? "px-3 justify-center"
                                                    : "px-4"
                                            } ${
                                                isActiveRoute(item.href)
                                                    ? "bg-primary-50 shadow-sm text-primary-400 font-bold"
                                                    : "text-gray-500 hover:text-primary-400"
                                            }`}
                                        >
                                            <Link
                                                href={item.href}
                                                className="flex items-center gap-3 w-full"
                                            >
                                                <span className="flex justify-center items-center w-5 h-5 flex-shrink-0">
                                                    <item.icon className="w-5 h-5" />
                                                </span>
                                                {!isCollapsed && (
                                                    <span className="text-sm tracking-wide truncate capitalize">
                                                        {item.title}
                                                    </span>
                                                )}
                                            </Link>
                                        </SidebarMenuButton>
                                    )}
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </div>

                    {/* User Management Section */}
                    <div className="flex flex-col space-y-2">
                        {!isCollapsed && (
                            <div className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                                User Management
                            </div>
                        )}
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton
                                    asChild
                                    isActive={isActiveRoute("/profile")}
                                    tooltip={
                                        isCollapsed ? "Profile" : undefined
                                    }
                                    className={`flex flex-row items-center rounded-md h-12 focus:outline-none font-semibold transition-colors ${
                                        isCollapsed
                                            ? "px-3 justify-center"
                                            : "px-4"
                                    } ${
                                        isActiveRoute("/profile")
                                            ? "bg-primary-50 shadow-sm text-primary-400 font-bold"
                                            : "text-gray-500 hover:text-primary-400"
                                    }`}
                                >
                                    <Link
                                        href="/profile"
                                        className="flex items-center gap-3 w-full"
                                    >
                                        <span className="flex justify-center items-center w-5 h-5 flex-shrink-0">
                                            <User className="w-5 h-5" />
                                        </span>
                                        {!isCollapsed && (
                                            <span className="text-sm tracking-wide truncate capitalize">
                                                Profile
                                            </span>
                                        )}
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                            {user.role === "admin" && (
                                <SidebarMenuItem>
                                    <Collapsible
                                        open={openSubmenu === "Users"}
                                        onOpenChange={(open) =>
                                            setOpenSubmenu(
                                                open ? "Users" : null
                                            )
                                        }
                                        className="w-full"
                                    >
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton
                                                tooltip={
                                                    isCollapsed
                                                        ? "Users"
                                                        : undefined
                                                }
                                                className={`flex flex-row items-center rounded-md h-12 focus:outline-none font-semibold transition-colors ${
                                                    isCollapsed
                                                        ? "px-3 justify-center"
                                                        : "px-4"
                                                } ${
                                                    openSubmenu === "Users"
                                                        ? "bg-primary-50 shadow-sm text-primary-400 font-bold"
                                                        : "text-gray-500 hover:text-primary-400"
                                                }`}
                                            >
                                                <span className="flex items-center gap-3 w-full">
                                                    <span className="flex justify-center items-center w-5 h-5 flex-shrink-0">
                                                        <Users className="w-5 h-5" />
                                                    </span>
                                                    {!isCollapsed && (
                                                        <>
                                                            <span className="text-sm tracking-wide truncate capitalize">
                                                                Users
                                                            </span>
                                                            <span className="ml-auto">
                                                                {openSubmenu ===
                                                                "Users" ? (
                                                                    <ChevronDown className="h-4 w-4" />
                                                                ) : (
                                                                    <ChevronRight className="h-4 w-4" />
                                                                )}
                                                            </span>
                                                        </>
                                                    )}
                                                </span>
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>
                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {[
                                                    {
                                                        title: "Clients",
                                                        href: "/app/users/clients",
                                                        icon: UserPlus,
                                                    },
                                                    {
                                                        title: "Staff",
                                                        href: "/app/users/staff",
                                                        icon: School,
                                                    },
                                                    {
                                                        title: "Admins",
                                                        href: "/app/users/admins",
                                                        icon: Shield,
                                                    },
                                                    {
                                                        title: "Campaing",
                                                        href: "/app/users/campaing",
                                                        icon: Megaphone,
                                                    },
                                                ].map((subItem) => (
                                                    <SidebarMenuSubItem
                                                        key={subItem.title}
                                                    >
                                                        <SidebarMenuSubButton
                                                            asChild
                                                            isActive={isActiveRoute(
                                                                subItem.href
                                                            )}
                                                        >
                                                            <Link
                                                                href={
                                                                    subItem.href
                                                                }
                                                                className="flex items-center gap-2"
                                                            >
                                                                <subItem.icon className="h-4 w-4" />
                                                                <span>
                                                                    {
                                                                        subItem.title
                                                                    }
                                                                </span>
                                                            </Link>
                                                        </SidebarMenuSubButton>
                                                    </SidebarMenuSubItem>
                                                ))}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </Collapsible>
                                </SidebarMenuItem>
                            )}
                        </SidebarMenu>
                    </div>
                </div>

                {/* Push footer to bottom */}
                <div className="mt-auto">
                    <SidebarFooter className="border-t border-gray-200 p-2 mt-4">
                        {isCollapsed ? (
                            <div className="flex justify-center p-2">
                                <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <div className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                                                <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-3">
                                                    <img
                                                        src="https://ui.shadcn.com/avatars/shadcn.jpg"
                                                        alt="User avatar"
                                                        className="h-full w-full object-cover"
                                                    />
                                                </div>
                                                
                                            </div>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent
                                            align="end"
                                            className="w-56"
                                        >
                                            <DropdownMenuItem asChild>
                                                <Link
                                                    href="/profile"
                                                    className="flex items-center cursor-pointer"
                                                >
                                                    <User className="mr-2 h-4 w-4" />
                                                    <span>Profile</span>
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuItem asChild>
                                                <Link
                                                    href="/profile"
                                                    className="flex items-center cursor-pointer"
                                                >
                                                    <Lock className="mr-2 h-4 w-4" />
                                                    <span>Change Password</span>
                                                </Link>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                            <DropdownMenuItem asChild>
                                                <Link
                                                    href="/logout"
                                                    method="post"
                                                    className="flex items-center text-red-500 focus:text-red-500 cursor-pointer w-full"
                                                >
                                                    <LogOut className="mr-2 h-4 w-4" />
                                                    <span>Log out</span>
                                                </Link>
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </div>
                            </div>
                        ) : (
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <div className="flex items-center p-2 hover:bg-gray-100 rounded-md cursor-pointer">
                                        <div className="h-9 w-9 rounded-full bg-gray-200 flex items-center justify-center overflow-hidden mr-3">
                                            <img
                                                src="https://ui.shadcn.com/avatars/shadcn.jpg"
                                                alt="User avatar"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <div className="flex flex-col flex-1">
                                            <span className="text-sm font-medium">
                                                {user.name}
                                            </span>
                                            <span className="text-xs text-gray-500">
                                                {user.email}
                                            </span>
                                        </div>
                                        <ChevronRight className="h-5 w-5 text-gray-400" />
                                    </div>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent
                                    align="end"
                                    className="w-56"
                                >
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/profile"
                                            className="flex items-center cursor-pointer"
                                        >
                                            <User className="mr-2 h-4 w-4" />
                                            <span>Profile</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuItem asChild>
                                        <Link
                                             href="/profile"
                                            className="flex items-center cursor-pointer"
                                        >
                                            <Lock className="mr-2 h-4 w-4" />
                                            <span>Change Password</span>
                                        </Link>
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link
                                            href="/logout"
                                            method="post"
                                            className="flex items-center text-red-500 focus:text-red-500 cursor-pointer w-full"
                                        >
                                            <LogOut className="mr-2 h-4 w-4" />
                                            <span>Log out</span>
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        )}
                    </SidebarFooter>
                </div>
            </SidebarContent>
            <SidebarRail />
        </Sidebar>
    );
}

function AppLogo({ isCollapsed }: { isCollapsed: boolean }) {
    return (
        <Link
            href="/"
            className="font-extrabold text-2xl md:text-3xl text-totblue"
        >
            <div className="flex flex-row">
                {!isCollapsed && <div>Kasuku </div>}
                <svg
                    width="42px"
                    height="42px"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    transform="rotate(45)matrix(1, 0, 0, -1, 0, 0)"
                >
                    <g
                        id="SVGRepo_bgCarrier"
                        strokeWidth="0"
                        transform="translate(6.96,6.96), scale(0.42)"
                    >
                        <path
                            transform="translate(-2.4, -2.4), scale(1.7999999999999998)"
                            fill="#EC1C24"
                            d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z"
                            strokeWidth="0"
                        ></path>
                    </g>
                    <g
                        id="SVGRepo_tracerCarrier"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                        {" "}
                        <circle
                            cx="12"
                            cy="4"
                            r="2"
                            fill="#132257"
                        ></circle>{" "}
                        <circle cx="12" cy="12" r="2" fill="#FEDD44"></circle>{" "}
                        <circle cx="12" cy="20" r="2" fill="#132257"></circle>{" "}
                    </g>
                </svg>
                {!isCollapsed && <div className="text-green-500">Tech</div>}
            </div>
        </Link>
    );
}
