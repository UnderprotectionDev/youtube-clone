import HomeLayout from "@/modules/home/ui/layouts/home-layout";

// TODO: Confirm this is needed or not
export const dynamic = "force-dynamic";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return <HomeLayout>{children}</HomeLayout>;
}
