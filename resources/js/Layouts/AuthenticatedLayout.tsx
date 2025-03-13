import ApplicationLogo from "@/Components/ApplicationLogo";
import { AppSidebar } from "@/Components/AppSidebar";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from "@/Components/ui/sidebar";
import { Link, usePage } from "@inertiajs/react";
import { PropsWithChildren, ReactNode, useEffect, useState } from "react";
import { PageProps } from "@/types";

export default function Authenticated({
    header,
    children,
}: PropsWithChildren<{ header?: ReactNode }>) {
    const user = usePage().props.auth.user;
    const { flash } = usePage<PageProps>().props;

    useEffect(() => {
        if (flash?.message) {
            toast(flash.message);
        }
    }, [flash?.message]);

    return (
        <div className="min-h-screen bg-gray-100">
            <SidebarProvider>
                <div className="flex h-dvh w-full bg-gray-200">
                    <AppSidebar />
                    <ToastContainer />
                    <SidebarInset className="flex-1 bg-white">
                        <div className="sticky top-0 z-50 bg-white">
                            <header className="flex min-h-18.5 items-center shadow-xs border-b border-gray-100 px-4">
                                <SidebarTrigger className="mr-4" />
                                <h1 className="text-xl font-semibold">
                                    Profile
                                </h1>
                            </header>
                        </div>
                        <main className="p-4">{children}</main>
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </div>
    );
}
