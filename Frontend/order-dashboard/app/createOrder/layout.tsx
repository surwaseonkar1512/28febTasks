import CreateOrderForm from "@/components/CreateOrderComponents/CreateOrderForm";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <CreateOrderForm />
    </div>
  );
}
