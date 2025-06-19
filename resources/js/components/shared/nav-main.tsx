import { SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { cn } from '@/lib/utils';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';

export function NavMain({ items = [] }: { items: NavItem[] }) {
    const page = usePage();
    return (
        <SidebarGroup className="px-2 py-0">
            <SidebarMenu>
            {/* <SidebarGroupLabel>Lycée Said Mohamed Cheickh</SidebarGroupLabel> */}
                {items.map((item) => (
                    <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton 
                            asChild 
                            isActive={item.href === page.url} 
                            tooltip={{ children: item.title }}>
                            <Link href={route(item.href)}   
                            className={
                                cn('flex items-center rounded-md px-3 py-2 transition-colors',
                                item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100',
                                )} 
                                prefetch>
                                {item.icon && <item.icon />}
                                <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    );
}
